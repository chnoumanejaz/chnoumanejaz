import { useState, useEffect, useRef, useCallback } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const accentColors = [
  { name: "Emerald", light: "152 60% 40%", dark: "152 60% 52%", preview: "hsl(152, 60%, 46%)" },
  { name: "Blue", light: "217 91% 50%", dark: "217 91% 60%", preview: "hsl(217, 91%, 55%)" },
  { name: "Purple", light: "262 83% 58%", dark: "262 83% 68%", preview: "hsl(262, 83%, 63%)" },
  { name: "Rose", light: "346 77% 50%", dark: "346 77% 60%", preview: "hsl(346, 77%, 55%)" },
  { name: "Amber", light: "38 92% 50%", dark: "38 92% 60%", preview: "hsl(38, 92%, 55%)" },
];

function applyAccent(color: typeof accentColors[0]) {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");
  const value = isDark ? color.dark : color.light;
  root.style.setProperty("--primary", value);
  root.style.setProperty("--accent", value);
  root.style.setProperty("--ring", value);
  root.style.setProperty("--sidebar-primary", value);
  root.style.setProperty("--sidebar-ring", value);
}

export function AccentSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("accent-color") || "Emerald";
  });
  const ref = useRef<HTMLDivElement>(null);

  const currentIndex = accentColors.findIndex((c) => c.name === selected);

  const cycleColor = useCallback(() => {
    const nextIndex = (currentIndex + 1) % accentColors.length;
    setSelected(accentColors[nextIndex].name);
    setOpen(true);
    // Auto-close the preview after a moment
    setTimeout(() => setOpen(false), 1200);
  }, [currentIndex]);

  useEffect(() => {
    const color = accentColors.find((c) => c.name === selected) || accentColors[0];
    applyAccent(color);
    localStorage.setItem("accent-color", color.name);
  }, [selected]);

  // Re-apply on theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const color = accentColors.find((c) => c.name === selected) || accentColors[0];
      applyAccent(color);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [selected]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentColor = accentColors[currentIndex] || accentColors[0];

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={cycleColor}
        className="relative p-2 rounded-full hover:bg-secondary transition-colors"
        aria-label="Cycle accent color"
        whileTap={{ scale: 0.85, rotate: 90 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Palette className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        {/* Active color dot */}
        <motion.span
          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-background"
          style={{ backgroundColor: currentColor.preview }}
          key={currentColor.name}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute top-full right-0 mt-2 px-3 py-2 bg-card/95 backdrop-blur-xl border border-border rounded-full shadow-xl z-50"
          >
            <div className="flex items-center gap-1.5">
              {accentColors.map((color, i) => {
                const isSelected = selected === color.name;
                return (
                  <motion.button
                    key={color.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(color.name);
                    }}
                    className="relative rounded-full transition-all"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 500, damping: 25 }}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    title={color.name}
                  >
                    <span
                      className="block w-6 h-6 rounded-full"
                      style={{ backgroundColor: color.preview }}
                    />
                    {isSelected && (
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-foreground"
                        layoutId="accent-ring"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
