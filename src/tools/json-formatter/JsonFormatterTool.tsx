import { useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AlertCircle, Check, Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";

const SAMPLE_JSON = `{
  "name": "Nouman Ejaz",
  "role": "Software Engineer",
  "skills": ["React", "TypeScript", "Node.js"],
  "active": true
}`;

export function JsonFormatterTool() {
  const { resolvedTheme } = useTheme();
  const [input, setInput] = useState(SAMPLE_JSON);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const syntaxStyle = resolvedTheme === "dark" ? oneDark : ghcolors;

  const lineCount = useMemo(() => input.split("\n").length, [input]);

  const parseJson = (text: string) => {
    try {
      return JSON.parse(text);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON";
      throw new Error(message);
    }
  };

  const handleFormat = () => {
    try {
      const parsed = parseJson(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError(null);
      setIsValid(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON";
      setError(message);
      setOutput("");
      setIsValid(false);
    }
  };

  const handleMinify = () => {
    try {
      const parsed = parseJson(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError(null);
      setIsValid(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON";
      setError(message);
      setOutput("");
      setIsValid(false);
    }
  };

  const handleValidate = () => {
    try {
      parseJson(input);
      setError(null);
      setIsValid(true);
      toast({ title: "Valid JSON", description: "Your JSON is well-formed." });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON";
      setError(message);
      setIsValid(false);
    }
  };

  const handleCopy = async () => {
    const text = output || input;
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    toast({ title: "Copied", description: "JSON copied to clipboard." });
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
    setIsValid(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleFormat} size="sm">
          Format
        </Button>
        <Button onClick={handleMinify} variant="secondary" size="sm">
          Minify
        </Button>
        <Button onClick={handleValidate} variant="outline" size="sm">
          Validate
        </Button>
        <Button onClick={handleCopy} variant="outline" size="sm" className="gap-1.5">
          <Copy className="h-3.5 w-3.5" />
          Copy
        </Button>
        <Button onClick={handleClear} variant="ghost" size="sm" className="gap-1.5">
          <Trash2 className="h-3.5 w-3.5" />
          Clear
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {isValid && !error && (
        <Alert className="border-green-500/50 text-green-700 dark:text-green-400">
          <Check className="h-4 w-4" />
          <AlertDescription>Valid JSON</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Input</label>
          <div className="relative rounded-xl border border-border overflow-hidden bg-card">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-muted/50 border-r border-border flex flex-col items-end py-3 pr-2 text-xs text-muted-foreground font-mono select-none pointer-events-none">
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i} className="leading-6">
                  {i + 1}
                </span>
              ))}
            </div>
            <Textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(null);
                setIsValid(null);
              }}
              placeholder="Paste your JSON here..."
              className="min-h-[360px] pl-12 font-mono text-sm resize-none border-0 rounded-none focus-visible:ring-0"
              spellCheck={false}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Output</label>
          <div className="rounded-xl border border-border overflow-hidden min-h-[360px] bg-card">
            {output ? (
              <SyntaxHighlighter
                language="json"
                style={syntaxStyle}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  minHeight: "360px",
                  fontSize: "0.875rem",
                  background: "transparent",
                }}
              >
                {output}
              </SyntaxHighlighter>
            ) : (
              <div className="flex items-center justify-center min-h-[360px] text-sm text-muted-foreground p-6 text-center">
                Formatted or minified JSON will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
