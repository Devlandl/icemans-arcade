import { games } from "@/lib/games";
import { GameCard } from "@/components/game-card";
import { Gamepad2, Zap, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center">
            <Gamepad2 className="w-20 h-20 text-arcade-cyan animate-pulse" />
          </div>
          <h1 className="font-arcade text-2xl md:text-3xl text-arcade-cyan text-glow-cyan leading-relaxed">
            ICEMAN&apos;S ARCADE
          </h1>
          <p className="text-lg text-arcade-muted max-w-xl mx-auto">
            Browser games built by Iceman. Dungeon crawlers, trivia, and more -
            all playable right in your browser.
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-arcade-green text-sm">
              <Zap className="w-4 h-4" />
              <span>Instant Play</span>
            </div>
            <div className="flex items-center gap-2 text-arcade-magenta text-sm">
              <Trophy className="w-4 h-4" />
              <span>No Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="font-arcade text-sm text-arcade-magenta mb-8 text-glow-magenta">
          GAMES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>

        {/* Coming Soon */}
        {games.length < 3 && (
          <div className="mt-12 text-center">
            <p className="font-arcade text-xs text-arcade-muted">
              MORE GAMES COMING SOON...
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
