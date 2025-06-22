import type { AnimeNewsItem } from "@/models/AnimeNewsItem";

type AnimeNewsComponentProps = {
  news: AnimeNewsItem[];
};

function AnimeNewsComponent({ news }: AnimeNewsComponentProps) {
  return (
    <div className="news-page">
      <main className="container">
        <div className="news-feed">
          <div style={{ marginTop: "2rem" }} />
          {news.map((anime, index) => (
            <article
              key={anime.mal_id}
              className="news-article mb-4 pb-4"
              style={{
                borderBottom:
                  index < news.length - 1 ? "1px solid #e9ecef" : "none",
              }}
            >
              <div className="row mb-3">
                <div className="col-md-3">
                  {anime.images?.jpg?.image_url && (
                    <img
                      src={anime.images.jpg.image_url}
                      className="img-fluid rounded"
                      alt={anime.title}
                      style={{
                        maxHeight: "150px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  )}
                </div>

                <div className="col-md-9">
                  <h2 className="h4 fw-bold text-dark mb-2">{anime.title}</h2>

                  <div className="d-flex flex-wrap gap-3 text-muted small mb-2">
                    <span>
                      <i className="fas fa-calendar-alt me-1"></i>
                      {new Date(anime.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>
                      <i className="fas fa-user me-1"></i>
                      {anime.author_username}
                    </span>
                    <span>
                      <i className="fas fa-comments me-1"></i>
                      {anime.comments} comentarios
                    </span>
                  </div>
                </div>
              </div>

              <div className="article-content mb-3">
                {anime.excerpt && (
                  <div
                    className="text-dark"
                    dangerouslySetInnerHTML={{ __html: anime.excerpt }}
                    style={{
                      textAlign: "justify",
                      lineHeight: "1.6",
                      fontSize: "0.95rem",
                    }}
                  />
                )}
              </div>

              <div className="text-end">
                <a
                  href={anime.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Leer más
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AnimeNewsComponent;
