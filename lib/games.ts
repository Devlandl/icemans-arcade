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
  {
    slug: "1d-trivia",
    title: "1D Trivia: One Direction Fan Quiz",
    description:
      "Test your One Direction knowledge across multiple difficulty levels. Earn rewards and unlock the Directions Vault.",
    file: "1d-trivia.html",
    image: "/images/1d-trivia.png",
    price: 3,
    storeSlug: "1d-trivia",
    storeUrl: "https://tvrapp.app/store/1d-trivia",
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
