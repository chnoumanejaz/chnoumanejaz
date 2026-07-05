import { useMemo, useState } from "react";
import { Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  generatePalette,
  isValidHex,
  type ColorSwatch,
  type HarmonyMode,
} from "./colorUtils";

const HARMONY_MODES: { value: HarmonyMode; label: string }[] = [
  { value: "complementary", label: "Complementary" },
  { value: "triadic", label: "Triadic" },
  { value: "analogous", label: "Analogous" },
  { value: "split-complementary", label: "Split" },
  { value: "monochromatic", label: "Monochromatic" },
];

function SwatchCard({ swatch }: { swatch: ColorSwatch }) {
  const rgbText = `rgb(${swatch.rgb.r}, ${swatch.rgb.g}, ${swatch.rgb.b})`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(swatch.hex);
    toast({
      title: "Copied",
      description: `${swatch.hex} copied to clipboard.`,
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group rounded-2xl border border-border overflow-hidden text-left hover:border-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="h-28 w-full" style={{ backgroundColor: swatch.hex }} />
      <div className="p-4 bg-card space-y-1">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium text-sm">{swatch.name}</p>
          <Copy className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="font-mono text-xs text-muted-foreground">{swatch.hex.toUpperCase()}</p>
        <p className="font-mono text-xs text-muted-foreground">{rgbText}</p>
      </div>
    </button>
  );
}

export function ColorPaletteTool() {
  const [baseColor, setBaseColor] = useState("#6366f1");
  const [hexInput, setHexInput] = useState("#6366f1");
  const [mode, setMode] = useState<HarmonyMode>("complementary");

  const palette = useMemo(() => {
    if (!isValidHex(baseColor)) return [];
    return generatePalette(baseColor, mode);
  }, [baseColor, mode]);

  const handleHexChange = (value: string) => {
    setHexInput(value);
    const normalized = value.startsWith("#") ? value : `#${value}`;
    if (isValidHex(normalized)) {
      setBaseColor(normalized);
    }
  };

  const handleColorPickerChange = (value: string) => {
    setBaseColor(value);
    setHexInput(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
        <div className="space-y-2">
          <Label htmlFor="color-picker">Base color</Label>
          <div className="flex items-center gap-3">
            <input
              id="color-picker"
              type="color"
              value={baseColor}
              onChange={(e) => handleColorPickerChange(e.target.value)}
              className="h-12 w-12 rounded-xl border border-border cursor-pointer bg-transparent"
            />
            <Input
              value={hexInput}
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="#6366f1"
              className="font-mono w-36"
              spellCheck={false}
            />
          </div>
        </div>
      </div>

      <Tabs value={mode} onValueChange={(value) => setMode(value as HarmonyMode)}>
        <TabsList className="flex flex-wrap h-auto gap-1">
          {HARMONY_MODES.map((harmony) => (
            <TabsTrigger key={harmony.value} value={harmony.value} className="text-xs sm:text-sm">
              {harmony.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {HARMONY_MODES.map((harmony) => (
          <TabsContent key={harmony.value} value={harmony.value} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {palette.map((swatch) => (
                <SwatchCard key={`${harmony.value}-${swatch.name}`} swatch={swatch} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
