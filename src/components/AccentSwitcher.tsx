import { useState, useEffect, useRef } from "react";
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
  root.style.setProperty("--primary", color.light);
  root.style.setProperty("--accent", color.light);
  root.style.setProperty("--ring", color.light);
  root.style.setProperty("--sidebar-primary", color.light);
  root.style.setProperty("--sidebar-ring", color.light);

  // Also set dark mode values via a class observer
  const isDark = root.classList.contains("dark");
  if (isDark) {
    root.style.setProperty("--primary", color.dark);
    root.style.setProperty("--accent", color.dark);
    root.style.setProperty("--ring", color.dark);
    root.style.setProperty("--sidebar-primary", color.dark);
    root.style.setProperty("--sidebar-ring", color.dark);
  }
}

export function AccentSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("accent-color") || "Emerald";
  });
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="p-2 rounded-full hover:bg-secondary transition-colors"
        aria-label="Change accent color"
      >
        <Palette className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 p-2 bg-card border border-border rounded-xl shadow-lg flex gap-2 z-50"
          >
            {accentColors.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  setSelected(color.name);
                  setOpen(false);
                }}
                className={`w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 ${
                  selected === color.name ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110" : ""
                }`}
                style={{ backgroundColor: color.preview }}
                title={color.name}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
