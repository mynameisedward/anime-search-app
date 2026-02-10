export type ItemPageType = {
  images: {
    webp: {
      large_image_url: string;
    };
  };
  title: string;
  title_japanese: string;
  episodes: number;
  source: string;
  rating: string;
  trailer: {
    youtube_id: string | null;
    embed_url: string | null;
  };
  genres: { mal_id: number; type: string; name: string }[];
  score: number;
  year: number;
  status: string;
  duration: string;
  type: string;
  chapters: number;
  rank: number;
  members: number;
  synopsis: string;
} | null;
