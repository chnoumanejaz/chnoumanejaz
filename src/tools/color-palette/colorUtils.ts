export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const normalized = hex.replace("#", "");
  if (!/^[0-9A-Fa-f]{6}$/.test(normalized)) return null;

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  if (delta !== 0) {
    switch (max) {
      case r:
        h = ((g - b) / delta) % 6;
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      default:
        h = (r - g) / delta + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }

  return { h, s: s * 100, l: l * 100 };
}

export function hslToHex(h: number, s: number, l: number): string {
  const saturation = s / 100;
  const lightness = l / 100;

  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lightness - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

function swatchFromHsl(name: string, h: number, s: number, l: number): ColorSwatch {
  const hex = hslToHex(h, s, l);
  const rgb = hexToRgb(hex)!;
  return { name, hex, rgb };
}

export type HarmonyMode =
  | "complementary"
  | "triadic"
  | "analogous"
  | "split-complementary"
  | "monochromatic";

export function generatePalette(baseHex: string, mode: HarmonyMode): ColorSwatch[] {
  const hsl = hexToHsl(baseHex);
  if (!hsl) return [];

  const { h, s, l } = hsl;

  switch (mode) {
    case "complementary":
      return [
        swatchFromHsl("Base", h, s, l),
        swatchFromHsl("Complement", (h + 180) % 360, s, l),
      ];
    case "triadic":
      return [
        swatchFromHsl("Base", h, s, l),
        swatchFromHsl("Triadic 1", (h + 120) % 360, s, l),
        swatchFromHsl("Triadic 2", (h + 240) % 360, s, l),
      ];
    case "analogous":
      return [
        swatchFromHsl("Analogous -", (h - 30 + 360) % 360, s, l),
        swatchFromHsl("Base", h, s, l),
        swatchFromHsl("Analogous +", (h + 30) % 360, s, l),
      ];
    case "split-complementary":
      return [
        swatchFromHsl("Base", h, s, l),
        swatchFromHsl("Split -", (h + 150) % 360, s, l),
        swatchFromHsl("Split +", (h + 210) % 360, s, l),
      ];
    case "monochromatic":
      return [
        swatchFromHsl("Light", h, s, Math.min(95, l + 25)),
        swatchFromHsl("Base", h, s, l),
        swatchFromHsl("Dark", h, s, Math.max(5, l - 25)),
        swatchFromHsl("Muted", h, Math.max(10, s - 30), l),
        swatchFromHsl("Vivid", h, Math.min(100, s + 15), l),
      ];
    default:
      return [swatchFromHsl("Base", h, s, l)];
  }
}

export function isValidHex(hex: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(hex);
}
