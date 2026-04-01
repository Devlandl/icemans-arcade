"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-arcade-border bg-arcade-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Gamepad2 className="w-8 h-8 text-arcade-cyan group-hover:text-arcade-magenta transition-colors" />
          <span className="font-arcade text-sm text-arcade-cyan group-hover:text-glow-cyan transition-all">
            ICEMAN&apos;S ARCADE
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-arcade-cyan/10 border border-arcade-cyan/30 rounded text-arcade-cyan text-sm hover:bg-arcade-cyan/20 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
