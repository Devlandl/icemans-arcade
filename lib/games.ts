export interface Game {
  slug: string;
  title: string;
  description: string;
  file: string;
  image: string;
  price: number;
  storeSlug: string;
  storeUrl: string;
}

export const games: Game[] = [
  {
    slug: "dungeon-crawler",
    title: "Dungeon: The Fallen Keep",
    description:
      "Explore a dark dungeon, fight monsters, and find treasure in this classic dungeon crawler.",
    file: "dungeon-crawler.html",
    image: "/images/dungeon-crawler.png",
    price: 3,
    storeSlug: "dungeon-crawler",
    storeUrl: "https://tvrapp.app/store/dungeon-crawler",
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
