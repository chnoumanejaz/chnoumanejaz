import { ToolPageLayout } from "./ToolPageLayout";
import { JsonFormatterTool } from "@/tools/json-formatter/JsonFormatterTool";

export default function JsonFormatterPage() {
  return (
    <ToolPageLayout
      title="JSON Formatter"
      description="A fast, clean JSON formatter and validator to debug your API responses instantly."
      canonical="/tools/json-formatter"
    >
      <JsonFormatterTool />
    </ToolPageLayout>
  );
}
