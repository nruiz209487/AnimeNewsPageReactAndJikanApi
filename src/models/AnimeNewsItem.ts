export interface AnimeNewsImage {
  jpg: {
    image_url: string;
  };
}

export class AnimeNewsItem {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: AnimeNewsImage;
  comments: number;
  excerpt: string;

  constructor(
    mal_id: number,
    url: string,
    title: string,
    date: string,
    author_username: string,
    author_url: string,
    forum_url: string,
    images: AnimeNewsImage,
    comments: number,
    excerpt: string
  ) {
    this.mal_id = mal_id;
    this.url = url;
    this.title = title;
    this.date = date;
    this.author_username = author_username;
    this.author_url = author_url;
    this.forum_url = forum_url;
    this.images = images;
    this.comments = comments;
    this.excerpt = excerpt;
  }

  get formattedDate(): string {
    const d = new Date(this.date);
    return d.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  static fromJSON(data: any): AnimeNewsItem {
    return new AnimeNewsItem(
      data.mal_id,
      data.url,
      data.title,
      data.date,
      data.author_username,
      data.author_url,
      data.forum_url,
      data.images,
      data.comments,
      data.excerpt
    );
  }
}
