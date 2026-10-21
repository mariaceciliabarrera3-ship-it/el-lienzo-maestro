# El Lienzo Maestro: La Incubadora — Etapa 1

Prototipo educativo sin servidor, sin dependencias externas y sin cuentas. El juego corre en el navegador; guarda localmente y exporta/importa JSON.

## Requisitos
- Navegador moderno con JavaScript habilitado.
- Para servir los archivos localmente, Python 3 o Node.js. No se instala ningún paquete.
- Node.js 20+ para ejecutar las pruebas automatizadas (`node --test` no es necesario; se usa `node tests/...mjs`).

## Probar en tu computadora
1. Descomprimí la carpeta `etapa1`.
2. Abrí una terminal dentro de esa carpeta.
3. Ejecutá `python -m http.server 8000`.
4. Abrí `http://localhost:8000`.
5. Completá el inicio, clasificá las tres notas, y jugá las nueve rondas. En cada ronda elegí primero una predicción; recién después aparecen las decisiones.
6. Editá las notas y evidencias del Canvas. Recargá la página para comprobar el guardado local.
7. Usá **Exportar JSON**, después **Importar JSON** para probar la copia portátil.
8. Para cerrar el servidor, volvé a la terminal y presioná `Ctrl+C`.

Si Python no está instalado, con Node.js se puede ejecutar `npx` pero eso puede descargar paquetes, por lo que no es la opción recomendada. Alternativa integrada: en una terminal con Node 20+ ejecutar `node -e "require('http').createServer((req,res)=>{const fs=require('fs');const path=require('path');const root=process.cwd();let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(req.url==='/'||req.url==='/')f=path.join(root,'index.html');fs.readFile(f,(e,d)=>{if(e){res.statusCode=404;return res.end('Not found')}res.setHeader('Content-Type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.json')?'application/json':'text/html');res.end(d)})}).listen(8000)"`.

## Publicar en Cloudflare Pages (cuando se decida)
1. Crear un proyecto Pages y subir el contenido de esta carpeta como raíz del sitio, o conectar un repositorio.
2. No configurar build command ni framework: es un sitio estático.
3. Publicar y probar la URL real en escritorio y móvil.
4. Confirmar en el momento de publicar los términos y límites gratuitos de Cloudflare. La nube y D1 no se usan en esta Etapa 1.

## Pruebas automatizadas
Con Node.js 20+ desde esta carpeta:

```bash
node tests/verify.mjs
node tests/simulate-events.mjs
node tests/simulate-tabletop.mjs
```

La primera enumera las 19.683 secuencias de decisiones y comprueba límites de indicadores, medallas, exportación/importación y estrategias fijas. La segunda es una simulación separada de estrés con eventos sintéticos pequeños; **no** representa todavía eventos de Tito integrados al juego. La tercera simula por separado el puntaje simplificado de mesa; no prueba equivalencia con digital. Sus resultados se documentan en `RESULTADOS_PRUEBAS.md` solo después de ejecutar los scripts en el entorno de entrega.

## Límites conocidos de esta etapa
- No hay tablero circular, Tito, Don Supuesto ni eventos aleatorios integrados: se agregan en Etapa 3.
- No hay login, servidor, Cloudflare Functions, D1 ni sincronización.
- No hay audio ni kit imprimible dedicado: Etapa 4.
- El modo manual muestra el orden clásico; no reconfigura todavía la ruta narrativa.
- El tiempo objetivo de 25 minutos es una hipótesis que requiere pruebas con usuarios.
- Los nombres, ejemplos y consecuencias son ficción educativa. No constituyen asesoramiento financiero ni validación de mercado.
