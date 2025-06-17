const agentes = [
  { nombre: "BRIMSTONE", imagen: "BrimstoneValo.Png" },
  { nombre: "PHOENIX", imagen: "PhoenixValo.Png" },
  { nombre: "SAGE", imagen: "SageValorant.Png" },
  { nombre: "SOVA", imagen: "SovaValorant.Png" },
  { nombre: "JETT", imagen: "JettValo.Png" },
  { nombre: "VIPER", imagen: "ViperValo.Png" },
  { nombre: "CYPHER", imagen: "CypherValo.Png" },
  { nombre: "REYNA", imagen: "ReynaValo.Png" },
  { nombre: "KILLJOY", imagen: "KilljoyValo.Png" },
  { nombre: "OMEN", imagen: "OmenValo.Png" },
  { nombre: "RAZE", imagen: "RazeValo.Png" },
  { nombre: "SKYE", imagen: "SkyeValo.Png" }
];

const grid = document.getElementById("agentesGrid");

agentes.forEach(agente => {
  const card = document.createElement("div");
  card.className = "agent-card";

  const img = document.createElement("img");
  img.src = `media/images/${agente.imagen}`;
  img.alt = agente.nombre;

  card.appendChild(img);
  grid.appendChild(card);
});

// Observer para animación al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.agent-card').forEach(card => {
  observer.observe(card);
});
