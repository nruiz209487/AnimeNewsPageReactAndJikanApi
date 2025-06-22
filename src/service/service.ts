import type { Anime } from "@/models/AnimeItem";
import type { AnimeNewsItem } from "@/models/AnimeNewsItem";

const BASEURL = "https://api.jikan.moe/v4/";

export async function getTopAnimes(): Promise<Anime[]> {
  try {
    const response = await fetch(`${BASEURL}seasons/now`);
    const data = await response.json();

    // Filtrar duplicados basándose en mal_id no es cosa mia es cosa de la api que devuelve duplicados
    const uniqueAnimes = data.data.filter(
      (anime: Anime, index: number, self: Anime[]) =>
        index === self.findIndex((a) => a.mal_id === anime.mal_id)
    );

    return uniqueAnimes as Anime[];
  } catch (error) {
    console.error("Error al obtener los animes:", error);
    throw error;
  }
}
export async function getNewsByAnime(id: Number): Promise<AnimeNewsItem[]> {
  try {
    const response = await fetch(`${BASEURL}anime/${id}/news`);

    const data = await response.json();
    return data.data as AnimeNewsItem[];
  } catch (error) {
    console.error("Error al obtener los animes:", error);
    throw error;
  }
}
