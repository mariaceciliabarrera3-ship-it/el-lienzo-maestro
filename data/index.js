// Orden oficial de las salas (único lugar donde se define) y carga de cada sala.
export const ORDER = [
  ["valor", "Propuesta de valor"],
  ["segmentos", "Segmentos de clientes"],
  ["canales", "Canales"],
  ["relaciones", "Relaciones con clientes"],
  ["ingresos", "Fuentes de ingresos"],
  ["recursos", "Recursos clave"],
  ["actividades", "Actividades clave"],
  ["socios", "Socios clave"],
  ["costos", "Estructura de costos"]
];

const CHARACTERS = [
  { id: "nora", name: "Nora" },
  { id: "teo", name: "Teo Ábaco" },
  { id: "aurelio", name: "Sir Aurelio" }
];

const loaded = await Promise.all(
  ORDER.map(([id]) =>
    import(`./rooms/${id}.js`).then(m => m.default, e => ({ id, error: String(e.message || e) }))
  )
);

export const LOAD_ERRORS = loaded.filter(r => r.error).map(r => `${r.id} (${r.error})`);
const ok = loaded.filter(r => !r.error);

export const CONTENT = {
  version: "5.1.0-mvp",
  characters: CHARACTERS,
  rooms: ORDER.map(([id, name], i) => ({
    id,
    name,
    intro: loaded[i].intro,
    wall: loaded[i].wall,
    decor: loaded[i].decor
  })),
  concepts: Object.fromEntries(ok.map(r => [r.id, r.concepts || {}])),
  questions: ok.flatMap(r => r.questions || [])
};
