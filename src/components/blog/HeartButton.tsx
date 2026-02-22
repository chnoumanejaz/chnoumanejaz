import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeartButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center gap-1.5"
    >
      <div
        className={cn(
          "p-3 rounded-full border transition-all duration-300",
          liked
            ? "bg-primary/10 border-primary text-primary scale-110"
            : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:scale-105"
        )}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-all duration-300",
            liked && "fill-primary scale-110"
          )}
        />
      </div>
      <span className={cn("text-xs font-medium transition-colors", liked ? "text-primary" : "text-muted-foreground")}>
        {likes}
      </span>
    </button>
  );
}
