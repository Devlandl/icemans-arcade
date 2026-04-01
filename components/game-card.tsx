import Link from "next/link";
import { Sword } from "lucide-react";
import type { Game } from "@/lib/games";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/${game.slug}`} className="group block">
      <div className="bg-arcade-card border border-arcade-border rounded-lg overflow-hidden transition-all duration-300 group-hover:neon-glow-cyan group-hover:border-arcade-cyan/50 group-hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="aspect-video bg-arcade-dark flex items-center justify-center relative overflow-hidden">
          <Sword className="w-16 h-16 text-arcade-cyan/30 group-hover:text-arcade-cyan/60 transition-colors" />
          <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
        </div>

        {/* Info */}
        <div className="p-4 space-y-2">
          <h3 className="font-arcade text-xs text-arcade-cyan group-hover:text-glow-cyan transition-all leading-relaxed">
            {game.title}
          </h3>
          <p className="text-sm text-arcade-muted line-clamp-2">
            {game.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-arcade text-xs text-arcade-green">
              ${game.price}
            </span>
            <span className="text-xs text-arcade-muted group-hover:text-arcade-cyan transition-colors">
              PLAY NOW &gt;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
