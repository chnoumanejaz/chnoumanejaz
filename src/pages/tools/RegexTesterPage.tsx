import { ToolPageLayout } from "./ToolPageLayout";
import { RegexTesterTool } from "@/tools/regex-tester/RegexTesterTool";

export default function RegexTesterPage() {
  return (
    <ToolPageLayout
      title="Regex Tester"
      description="Test and debug your regular expressions in real-time with instant visual feedback."
      canonical="/tools/regex-tester"
    >
      <RegexTesterTool />
    </ToolPageLayout>
  );
}
