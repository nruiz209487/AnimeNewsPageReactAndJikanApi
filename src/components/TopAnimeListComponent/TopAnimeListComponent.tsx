import { useState } from "react";
import type { Anime } from "@/models/AnimeItem";

type TopAnimeListComponentProps = {
  animes: Anime[];
  onSelect: (animeId: number) => void;
};

function TopAnimeListComponent({
  animes,
  onSelect,
}: TopAnimeListComponentProps) {
  const [expandedSynopsis, setExpandedSynopsis] = useState<
    Record<number, boolean>
  >({});

  const toggleSynopsis = (id: number) => {
    setExpandedSynopsis((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container my-4">
      <div className="row">
        {animes.map((anime, index) => {
          const isSynopsisExpanded = expandedSynopsis[anime.mal_id] || false;
          const synopsisExcerpt = anime.synopsis
            ? anime.synopsis.slice(0, 100) +
              (anime.synopsis.length > 100 && !isSynopsisExpanded ? "..." : "")
            : "N/A";

          return (
            <div
              key={anime.mal_id}
              className="col-6 col-md-4 col-lg-3 mb-4"
              onClick={() => onSelect(anime.mal_id)}
            >
              <div
                className="card h-100 shadow-sm border-0 overflow-hidden hover-shadow transition-all"
                style={{
                  cursor: "pointer",
                  transform: "translateY(0)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="position-relative">
                  <img
                    src={anime.images.jpg.image_url}
                    className="card-img-top"
                    alt={anime.title}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <span className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 rounded-end">
                    #{index + 1}
                  </span>
                </div>

                <div className="card-body p-3">
                  <h5
                    className="card-title fw-bold mb-2 text-truncate"
                    style={{ fontSize: "1rem" }}
                    title={anime.title}
                  >
                    {anime.title}
                  </h5>

                  <div className="mb-2 d-flex align-items-center">
                    <i className="bi bi-people text-primary me-2"></i>
                    <small>Popularidad: {anime.popularity ?? "N/A"}</small>
                  </div>

                  <div className="mb-2 d-flex align-items-center">
                    <i className="bi bi-play-circle text-success me-2"></i>
                    <small>Episodios: {anime.episodes ?? "N/A"}</small>
                  </div>

                  <div className="mb-2 d-flex align-items-center">
                    <i className="bi bi-calendar-event text-warning me-2"></i>
                    <small>
                      Año:{" "}
                      {anime.year ?? formatDate(anime.aired?.from) ?? "N/A"}
                    </small>
                  </div>

                  <div className="mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-building text-info me-2"></i>
                      <small>Estudios:</small>
                    </div>
                    <div className="ms-4">
                      <small>
                        {anime.studios && anime.studios.length > 0
                          ? anime.studios
                              .map((studio) => studio.name)
                              .join(", ")
                          : "N/A"}
                      </small>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-tags text-danger me-2"></i>
                      <small>Géneros:</small>
                    </div>
                    <div className="d-flex flex-wrap gap-1 ms-4">
                      {anime.genres && anime.genres.length > 0
                        ? anime.genres.slice(0, 3).map((genre) => (
                            <span
                              key={genre.mal_id}
                              className="badge bg-secondary bg-opacity-25 text-dark"
                              style={{ fontSize: "0.65rem" }}
                            >
                              {genre.name}
                            </span>
                          ))
                        : "N/A"}
                    </div>
                  </div>

                  {anime.synopsis && (
                    <div className="mb-2">
                      <div className="d-flex align-items-center mb-1">
                        <i className="bi bi-info-circle text-muted me-2"></i>
                        <small>Sinopsis:</small>
                      </div>
                      <p
                        className="small mb-0"
                        style={{ fontSize: "0.8rem", lineHeight: "1.4" }}
                      >
                        {synopsisExcerpt}

                        <button
                          className="btn btn-link p-0 ms-1 text-primary"
                          style={{ fontSize: "0.7rem" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSynopsis(anime.mal_id);
                          }}
                        ></button>
                      </p>
                    </div>
                  )}
                </div>

                <div className="card-footer bg-white border-0 py-2">
                  <a
                    href={anime.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100 btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopAnimeListComponent;
