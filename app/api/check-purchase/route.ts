import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const slug = request.nextUrl.searchParams.get("slug");

  if (!userId || !slug) {
    return NextResponse.json({ purchased: false });
  }

  try {
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
    const url = new URL(`${convexUrl}/api/query`);
    url.searchParams.set("path", "purchases:isPurchasedBySlug");
    url.searchParams.set(
      "args",
      JSON.stringify({ clerkUserId: userId, productSlug: slug })
    );

    const response = await fetch(url.toString());
    const data = await response.json();

    return NextResponse.json({ purchased: data.value === true });
  } catch {
    return NextResponse.json({ purchased: false });
  }
}
