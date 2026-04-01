"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Lock, ExternalLink, Loader2 } from "lucide-react";
import type { Game } from "@/lib/games";

export function PurchaseGate({
  game,
  children,
}: {
  game: Game;
  children: React.ReactNode;
}) {
  const { user, isSignedIn, isLoaded } = useUser();
  const [purchased, setPurchased] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    async function check() {
      try {
        const res = await fetch(
          `/api/check-purchase?userId=${user!.id}&slug=${game.storeSlug}`
        );
        const data = await res.json();
        setPurchased(data.purchased);
      } catch {
        setPurchased(false);
      }
    }

    check();
  }, [isLoaded, isSignedIn, user, game.storeSlug]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-arcade-cyan animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
        <Lock className="w-16 h-16 text-arcade-muted" />
        <h2 className="font-arcade text-sm text-arcade-cyan text-center">
          SIGN IN TO PLAY
        </h2>
        <p className="text-arcade-muted text-center max-w-md">
          Sign in with your TVR account to access your purchased games.
        </p>
        <SignInButton mode="modal">
          <button className="px-6 py-3 bg-arcade-cyan/10 border border-arcade-cyan/30 rounded font-arcade text-xs text-arcade-cyan hover:bg-arcade-cyan/20 transition-colors">
            SIGN IN
          </button>
        </SignInButton>
      </div>
    );
  }

  if (purchased === null) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-arcade-cyan animate-spin" />
      </div>
    );
  }

  if (!purchased) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
        <Lock className="w-16 h-16 text-arcade-magenta" />
        <h2 className="font-arcade text-sm text-arcade-magenta text-center text-glow-magenta">
          UNLOCK THIS GAME
        </h2>
        <p className="text-arcade-muted text-center max-w-md">
          {game.title} is available for ${game.price} on the TVR App Store.
        </p>
        <a
          href={game.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-arcade-green/10 border border-arcade-green/30 rounded font-arcade text-xs text-arcade-green hover:bg-arcade-green/20 transition-colors"
        >
          GET THIS GAME - ${game.price}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return <>{children}</>;
}
