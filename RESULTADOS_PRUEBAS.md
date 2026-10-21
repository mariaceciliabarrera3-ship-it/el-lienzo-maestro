# Resultados de pruebas — v4.1

Ejecución local con Node.js 22.16.0. No se afirma publicación ni prueba manual de navegador.

## `node tests/verify.mjs`

- `sequences=19683`
- `route_index_min=25 route_index_max=62`
- `unicorn_paths=708 unicorn_percent=3.60%`
- `fixed_strategy_ranks=Primeras pedaleadas | Rumbo claro | En marcha`
- `checks=PASS`

Incluye aserciones para nueve bloques únicos y en orden canónico, 27 consecuencias no repetidas, diálogos por ronda, 12 eventos de Tito, variación de posición correcta, cinco casillas por tramo, exportación/importación, migración v4→v5 y rechazo de estados de tablero/mazos inválidos.

## `node tests/simulate-events.mjs`

- `simulated_games=10000`
- `event_model=synthetic per-round indicator perturbation in [-1,0,+1]`
- `unicorn_games=405 unicorn_percent=4.05%`
- `fixed_strategy_control_wins=0/3`
- `checks=PASS`

Es una prueba de estrés sintética; no usa las cartas reales de Tito y no valida el tablero circular.

## `node tests/simulate-tabletop.mjs`

- `tabletop_trials=10000`
- `rank_counts={"unicornio":434,"rumbo":2809,"marcha":6545,"pedaleadas":212}`
- `unicorn_percent=4.34%`
- `blocked_or_unfinishable_games=0`
- `checks=PASS`

Modelo simplificado e independiente de mesa, con decisiones aleatorias. No demuestra equivalencia con la versión digital ni equilibrio entre personas reales.

## Sintaxis

`node --check js/engine.js`, `node --check js/app.js` y `node --check data/scenario.js` terminaron sin errores.

## No probado

- Interacción manual de extremo a extremo en navegador, dispositivos y lectores de pantalla.
- Publicación real en Cloudflare Pages.
- Cloudflare Pages Functions, D1, login, recuperación, sincronización y borrado.
- Tablero, casillas, eventos de Tito y reacciones de personajes integrados en interfaz.
- Usabilidad, duración, aprendizaje, equilibrio con personas y demanda comercial.
