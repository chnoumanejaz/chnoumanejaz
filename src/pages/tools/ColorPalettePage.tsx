import { ToolPageLayout } from "./ToolPageLayout";
import { ColorPaletteTool } from "@/tools/color-palette/ColorPaletteTool";

export default function ColorPalettePage() {
  return (
    <ToolPageLayout
      title="Color Palette Generator"
      description="Generate beautiful, accessible color palettes for your next design project."
      canonical="/tools/color-palette"
    >
      <ColorPaletteTool />
    </ToolPageLayout>
  );
}
