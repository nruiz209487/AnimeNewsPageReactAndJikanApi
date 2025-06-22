import type { Route } from "@/routes/routes";
import icon from "@/assets/Icon.png";

type HeaderProps = {
  routes: Route[];
};

function getCurrentSeasonAndYear() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let season = "";

  if (month >= 3 && month <= 5) season = "Primavera";
  else if (month >= 6 && month <= 8) season = "Verano";
  else if (month >= 9 && month <= 11) season = "Otoño";
  else season = "Invierno";

  return { season, year };
}

function HeaderComponent({ routes }: HeaderProps) {
  const { season, year } = getCurrentSeasonAndYear();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative shadow-sm py-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={icon} alt="Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold fs-5">Anime News</span>
        </a>
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-light fw-semibold"
          style={{ zIndex: 1, pointerEvents: "none" }}
        >
          <span className="d-none d-md-inline">
            Los Animes más populares en la temporada de {season} {year}
          </span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {routes.map((route, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={route.path}>
                  <i className="fas fa-angle-right me-1"></i>
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
