export interface AnimeImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
}

export interface Title {
  type: string;
  title: string;
}

export interface Aired {
  from: string;
  to: string;
  prop: {
    from: {
      day: number;
      month: number;
      year: number;
    };
    to: {
      day: number;
      month: number;
      year: number;
    };
  };
  string: string;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Entity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: AnimeImage;
    webp: AnimeImage;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  genres: Entity[];
  explicit_genres: Entity[];
  themes: Entity[];
  demographics: Entity[];
}
