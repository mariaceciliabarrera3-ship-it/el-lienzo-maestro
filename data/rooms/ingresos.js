export default {
  id: "ingresos",
  wall: [
    "#cfc8b6",
    "#e0d0b8",
    "#d4c0a0",
    "#c8b088"
  ],
  intro: "Acá definimos cómo entra la plata al negocio. Pensá en un kiosco: puede ganar dinero vendiendo golosinas sueltas o con un combo mensual de snacks. Esa es su fuente de ingresos.",
  concepts: {
    mecanismo_ganancia: "La manera y el modelo mediante el cual la empresa gana dinero vendiendo su producto o servicio.",
    recursos_clave: "El listado de herramientas, maquinaria y materiales que la empresa necesita para fabricar sus productos.",
    comunicacion_promocion: "Las formas en que la empresa comunica sus anuncios y promociones al público.",
    suscripcion: "Cobro de un monto fijo de forma periódica (mensual o anual) para disfrutar de un producto o servicio.",
    licencia_unica: "Un único pago inicial que concede el derecho de uso, sin requerir cobros recurrentes periódicos.",
    intermediario: "Cobrar una comisión por conectar a dos partes (comprador y vendedor), no por dar acceso a un catálogo propio.",
    coste_total: "Calcular el coste total que requiere producir o elaborar el producto.",
    empleados_competencia: "Contar cuántos empleados trabajan en la tienda competidora más cercana.",
    lujo_logotipo: "Evaluar el nivel de lujo o elegancia que tiene el logotipo del negocio."
  },
  questions: [
    {
      id: "ingresos-1",
      roomId: "ingresos",
      round: 1,
      correct: "mecanismo_ganancia",
      prompt: "¿Qué representa el bloque de 'Fuente de ingresos' en el modelo Canvas?",
      options: [
        {
          id: "ingresos-1-a",
          conceptId: "mecanismo_ganancia",
          text: "La manera y el modelo mediante el cual la empresa gana dinero vendiendo su producto o servicio.",
          char: "nora"
        },
        {
          id: "ingresos-1-b",
          conceptId: "recursos_clave",
          text: "El listado de herramientas, maquinaria y materiales que la empresa necesita para fabricar sus productos.",
          char: "teo",
          whyNot: "Los materiales y herramientas forman parte del bloque de recursos clave, no de la generación de ingresos."
        },
        {
          id: "ingresos-1-c",
          conceptId: "comunicacion_promocion",
          text: "Las formas en que la empresa comunica sus anuncios y promociones al público.",
          char: "aurelio",
          whyNot: "La comunicación de anuncios y promociones se gestiona a través de los canales y la relación con el cliente."
        }
      ],
      explanation: "La fuente de ingresos define el mecanismo financiero y el modelo con el cual el negocio genera ganancias a través de las ventas a sus clientes.",
      voices: {
        nora: {
          ok: "Correcto. Es el mecanismo financiero que genera ganancias. La claridad siempre gana.",
          ko: "Esa no. El bloque de ingresos es sobre cómo entra la plata, no sobre herramientas o anuncios. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin un modelo de ganancia claro, no hay negocio. Así cierran las cuentas.",
          ko: "No cierra. Herramientas y materiales son recursos, no ingresos. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Saber cómo entra el dinero es la base de todo imperio. Esa es la jugada maestra.",
          ko: "Un traspié. La comunicación es marketing, no la fuente de dinero. Aprendé la diferencia."
        }
      }
    },
    {
      id: "ingresos-2",
      roomId: "ingresos",
      round: 2,
      correct: "suscripcion",
      prompt: "Si plataformas como Netflix o Spotify cobran una cuota fija mensual para dar acceso continuo a sus contenidos, ¿qué estrategia de ingresos están utilizando?",
      options: [
        {
          id: "ingresos-2-a",
          conceptId: "suscripcion",
          text: "Suscripción.",
          char: "teo"
        },
        {
          id: "ingresos-2-b",
          conceptId: "licencia_unica",
          text: "Licencia única.",
          char: "aurelio",
          whyNot: "Una licencia exige un único pago inicial que concede el derecho de uso, sin requerir cobros recurrentes periódicos."
        },
        {
          id: "ingresos-2-c",
          conceptId: "intermediario",
          text: "Intermediario.",
          char: "nora",
          whyNot: "El intermediario cobra una comisión por conectar a dos partes (comprador y vendedor), no por dar acceso a un catálogo propio."
        }
      ],
      explanation: "La suscripción se basa en el cobro de un monto fijo de forma periódica (mensual o anual) para disfrutar de un producto o servicio.",
      voices: {
        nora: {
          ok: "Correcto. El cobro periódico fijo es la definición clásica de suscripción. La claridad siempre gana.",
          ko: "Esa no. El intermediario solo conecta partes, no vende su propio catálogo. Leé con atención."
        },
        teo: {
          ok: "Cierra. Un cobro periódico fijo garantiza flujo de caja constante. Así cierran las cuentas.",
          ko: "No cierra. La licencia es un pago único, no recurrente. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. La recurrencia es el sueño de todo estratega. Esa es la jugada maestra.",
          ko: "Un traspié. Una licencia es un pago único, no mensual. Aprendé la diferencia."
        }
      }
    },
    {
      id: "ingresos-3",
      roomId: "ingresos",
      round: 3,
      correct: "coste_total",
      prompt: "Al momento de establecer el precio exacto de un producto (táctica de precios), ¿cuál es el análisis mínimo e indispensable para no operar con pérdidas?",
      options: [
        {
          id: "ingresos-3-a",
          conceptId: "coste_total",
          text: "Calcular el coste total que requiere producir o elaborar el producto.",
          char: "aurelio"
        },
        {
          id: "ingresos-3-b",
          conceptId: "empleados_competencia",
          text: "Contar cuántos empleados trabajan en la tienda competidora más cercana.",
          char: "nora",
          whyNot: "Aunque es importante observar el mercado, el análisis fundamental de costos depende de la estructura de gastos propia."
        },
        {
          id: "ingresos-3-c",
          conceptId: "lujo_logotipo",
          text: "Evaluar el nivel de lujo o elegancia que tiene el logotipo del negocio.",
          char: "teo",
          whyNot: "El diseño gráfico puede influir en la imagen, pero no determina el costo financiero que se debe recuperar con las ventas."
        }
      ],
      explanation: "Conocer cuánto cuesta fabricar el producto es indispensable para fijar un precio superior que asegure una ganancia.",
      voices: {
        nora: {
          ok: "Correcto. Sin conocer el costo, no se puede fijar un precio justo. La claridad siempre gana.",
          ko: "Esa no. Los empleados de la competencia no definen tus costos internos. Leé con atención."
        },
        teo: {
          ok: "Cierra. El precio debe cubrir el costo y dejar margen. Así cierran las cuentas.",
          ko: "No cierra. Un logo lindo no paga las facturas de producción. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Sin conocer el costo, no hay ganancia posible. Esa es la jugada maestra.",
          ko: "Un traspié. La imagen vende, pero el costo define la viabilidad. Aprendé la diferencia."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"25\" y=\"28\" width=\"10\" height=\"8\" fill=\"#c8a165\" stroke=\"#17212b\" stroke-width=\"1\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"25\" width=\"16\" height=\"10\" fill=\"#17212b\"/><circle cx=\"30\" cy=\"30\" r=\"3\" fill=\"#e0a526\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"24\" width=\"20\" height=\"12\" fill=\"#17212b\" stroke=\"#e0a526\" stroke-width=\"1\"/><path d=\"M30 28l2 4h-4z\" fill=\"#e0a526\"/><rect x=\"24\" y=\"38\" width=\"4\" height=\"2\" fill=\"#e0a526\"/><rect x=\"32\" y=\"38\" width=\"4\" height=\"2\" fill=\"#e0a526\"/>"
  ]
};
