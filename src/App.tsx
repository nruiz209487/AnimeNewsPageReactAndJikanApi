import "@/App.css";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import TopAnimeListCompnent from "@/components/TopAnimeListComponent/TopAnimeListComponent";
import AnimeNewsComponent from "@/components/AnimeNewsComponent/AnimeNewsComponent";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";
import { useState, useEffect } from "react";
import { getRoutes } from "@/routes/routes";
import { getNewsByAnime, getTopAnimes } from "@/service/service";
import type { Anime } from "@/models/AnimeItem";
import type { AnimeNewsItem } from "@/models/AnimeNewsItem";

function App() {
  const [topAnimes, setTopAnimes] = useState<Anime[]>([]);
  const [selectedNews, setSelectedNews] = useState<AnimeNewsItem[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnimes() {
      try {
        const animes: Anime[] = await getTopAnimes();
        setTopAnimes(animes);
      } catch (err) {
        setError("Error al cargar los animes.");
      }
    }

    fetchAnimes();
  }, []);

  const handleSelectAnime = async (id: number) => {
    try {
      const news = await getNewsByAnime(id);
      setSelectedNews(news);
    } catch (err) {
      setError("Error al cargar las noticias del anime.");
    }
  };

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <>
      <HeaderComponent routes={getRoutes()} />

      {selectedNews ? (
        <AnimeNewsComponent news={selectedNews} />
      ) : (
        <TopAnimeListCompnent animes={topAnimes} onSelect={handleSelectAnime} />
      )}

      {/* Recursos externos */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
      />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;
