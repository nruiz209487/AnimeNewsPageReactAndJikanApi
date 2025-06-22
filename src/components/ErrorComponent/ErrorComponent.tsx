function ErrorComponent() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <i
        className="bi bi-exclamation-triangle-fill"
        style={{ fontSize: "3rem", color: "red" }}
      ></i>
      <h1>
        Algo salió mal. Si recargas muchas veces, la API deniega la entrada por
        demasiadas peticiones. El límite es bajo 😢
      </h1>
    </div>
  );
}

export default ErrorComponent;
