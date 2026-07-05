import { useMemo, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface RegexMatch {
  index: number;
  value: string;
  groups: string[];
}

const FLAG_OPTIONS = ["g", "i", "m", "s"] as const;

function getMatches(regex: RegExp, text: string): RegexMatch[] {
  const matches: RegexMatch[] = [];
  const global = regex.global;

  if (global) {
    let match: RegExpExecArray | null;
    const clone = new RegExp(regex.source, regex.flags);
    while ((match = clone.exec(text)) !== null) {
      matches.push({
        index: match.index,
        value: match[0],
        groups: match.slice(1),
      });
      if (match[0].length === 0) {
        clone.lastIndex += 1;
      }
    }
  } else {
    const match = regex.exec(text);
    if (match) {
      matches.push({
        index: match.index,
        value: match[0],
        groups: match.slice(1),
      });
    }
  }

  return matches;
}

function HighlightedText({
  text,
  matches,
}: {
  text: string;
  matches: RegexMatch[];
}) {
  if (!text || matches.length === 0) {
    return <span className="whitespace-pre-wrap break-words">{text}</span>;
  }

  const segments: React.ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match, i) => {
    if (match.index > cursor) {
      segments.push(
        <span key={`text-${i}`} className="whitespace-pre-wrap break-words">
          {text.slice(cursor, match.index)}
        </span>,
      );
    }

    segments.push(
      <mark
        key={`match-${i}`}
        className="rounded-sm bg-primary/25 text-foreground px-0.5 whitespace-pre-wrap break-words"
      >
        {match.value}
      </mark>,
    );

    cursor = match.index + match.value.length;
  });

  if (cursor < text.length) {
    segments.push(
      <span key="text-end" className="whitespace-pre-wrap break-words">
        {text.slice(cursor)}
      </span>,
    );
  }

  return <>{segments}</>;
}

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("\\w+");
  const [testString, setTestString] = useState(
    "Hello world! Test your regex patterns here with instant feedback.",
  );
  const [flags, setFlags] = useState<Record<string, boolean>>({
    g: true,
    i: false,
    m: false,
    s: false,
  });

  const flagString = FLAG_OPTIONS.filter((flag) => flags[flag]).join("");

  const { regex, error, matches } = useMemo(() => {
    if (!pattern) {
      return { regex: null, error: null, matches: [] as RegexMatch[] };
    }

    try {
      const compiled = new RegExp(pattern, flagString);
      const found = testString ? getMatches(compiled, testString) : [];
      return { regex: compiled, error: null, matches: found };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid regular expression";
      return { regex: null, error: message, matches: [] as RegexMatch[] };
    }
  }, [pattern, flagString, testString]);

  const toggleFlag = (flag: (typeof FLAG_OPTIONS)[number]) => {
    setFlags((prev) => ({ ...prev, [flag]: !prev[flag] }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="regex-pattern">Regular expression</Label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-mono">
              /
            </span>
            <Input
              id="regex-pattern"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="pl-7 pr-7 font-mono"
              placeholder="Enter pattern..."
              spellCheck={false}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-mono">
              /{flagString}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {FLAG_OPTIONS.map((flag) => (
              <Toggle
                key={flag}
                pressed={flags[flag]}
                onPressedChange={() => toggleFlag(flag)}
                size="sm"
                className="font-mono w-9"
                aria-label={`${flag} flag`}
              >
                {flag}
              </Toggle>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="test-string">Test string</Label>
        <Textarea
          id="test-string"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against..."
          className="min-h-[140px] font-mono text-sm"
          spellCheck={false}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label>Highlighted matches</Label>
          {regex && !error && (
            <Badge variant="secondary">
              {matches.length} match{matches.length === 1 ? "" : "es"}
            </Badge>
          )}
        </div>
        <div className="rounded-xl border border-border bg-card p-4 min-h-[100px] font-mono text-sm leading-relaxed">
          <HighlightedText text={testString} matches={matches} />
        </div>
      </div>

      {matches.length > 0 && (
        <div className="space-y-3">
          <Label>Match details</Label>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-2 bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <span>#</span>
              <span>Match</span>
              <span>Index</span>
            </div>
            {matches.map((match, i) => (
              <div
                key={`${match.index}-${i}`}
                className="grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-3 border-t border-border text-sm font-mono"
              >
                <span className="text-muted-foreground">{i + 1}</span>
                <div>
                  <span className="break-all">{match.value || "(empty)"}</span>
                  {match.groups.length > 0 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Groups: {match.groups.map((g, gi) => `$${gi + 1}="${g}"`).join(", ")}
                    </p>
                  )}
                </div>
                <span className="text-muted-foreground">{match.index}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
