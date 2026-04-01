"use client";

import { useParams } from "next/navigation";
import { getGame } from "@/lib/games";
import { PurchaseGate } from "@/components/purchase-gate";
import { ArrowLeft, Maximize, Minimize } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GamePage() {
  const { gameSlug } = useParams<{ gameSlug: string }>();
  const game = getGame(gameSlug);
  const [fullscreen, setFullscreen] = useState(false);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="font-arcade text-sm text-arcade-magenta">
          GAME NOT FOUND
        </h2>
        <Link
          href="/"
          className="text-arcade-cyan hover:underline text-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Arcade
        </Link>
      </div>
    );
  }

  return (
    <div className={fullscreen ? "fixed inset-0 z-50 bg-black" : ""}>
      {!fullscreen && (
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-arcade-cyan hover:underline text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Arcade
          </Link>
          <h1 className="font-arcade text-xs text-arcade-cyan">
            {game.title}
          </h1>
        </div>
      )}

      <PurchaseGate game={game}>
        <div
          className={
            fullscreen ? "w-full h-full" : "max-w-6xl mx-auto px-4 pb-8"
          }
        >
          <div className="flex justify-end mb-2 px-1">
            <button
              onClick={() => setFullscreen(!fullscreen)}
              className="flex items-center gap-2 text-xs text-arcade-muted hover:text-arcade-cyan transition-colors"
            >
              {fullscreen ? (
                <>
                  <Minimize className="w-4 h-4" /> Exit Fullscreen
                </>
              ) : (
                <>
                  <Maximize className="w-4 h-4" /> Fullscreen
                </>
              )}
            </button>
          </div>

          <iframe
            src={`/games/${game.file}`}
            className={
              fullscreen
                ? "w-full h-[calc(100%-2rem)] border-0"
                : "w-full aspect-video rounded-lg border border-arcade-border neon-glow-cyan"
            }
            title={game.title}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </PurchaseGate>
    </div>
  );
}
