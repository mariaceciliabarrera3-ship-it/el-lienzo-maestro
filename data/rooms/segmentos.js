export default {
  id: "canales",
  wall: [
    "#cfc8b6",
    "#d4f0e0",
    "#a8e2c0",
    "#7fd9a8"
  ],
  intro: "Acá definimos cómo llega nuestro producto o servicio al cliente. Pensá en una librería: puede vender en su local, por su página web o a través de una app de envíos. Esos son sus canales.",
  concepts: {
    medio_entrega: "El medio o la forma en que un producto o servicio llega y se vende a los clientes.",
    recursos_clave: "Lista de materiales físicos o insumos necesarios para construir un producto (no es un canal).",
    estructura_costos: "Lista de gastos y sueldos que la empresa debe pagar (no es un canal).",
    canal_afiliados: "Sitios web o blogs que promocionan productos mediante enlaces para atraer compradores.",
    logistica_falsa: "Creer que un canal de venta cambia la naturaleza física de la entrega por regalos (no tiene sentido).",
    canal_digital: "Uso de aplicaciones o plataformas en línea para entregar y vender productos."
  },
  questions: [
    {
      id: "canales-1",
      roomId: "canales",
      round: 1,
      correct: "medio_entrega",
      prompt: "¿Qué es un canal de distribución dentro del modelo de negocio Canvas?",
      options: [
        {
          id: "canales-1-a",
          conceptId: "recursos_clave",
          text: "Es la lista de materiales físicos necesarios para construir un producto.",
          char: "teo",
          whyNot: "Los insumos y materiales pertenecen a los recursos clave requeridos para la producción, no al camino para entregar el producto al cliente."
        },
        {
          id: "canales-1-b",
          conceptId: "estructura_costos",
          text: "Es la lista de todos los gastos y sueldos que la empresa debe pagar cada mes.",
          char: "aurelio",
          whyNot: "Esa definición corresponde a la estructura de costos y no al camino por el cual el producto llega y se vende a los clientes."
        },
        {
          id: "canales-1-c",
          conceptId: "medio_entrega",
          text: "Es el medio o la forma en que un producto o servicio llega y se vende a los clientes.",
          char: "nora"
        }
      ],
      explanation: "Los canales definen la ruta directa o indirecta por la cual una empresa comercializa y entrega su valor al público.",
      voices: {
        nora: {
          ok: "Correcto. El canal es el camino que recorre el valor hasta llegar al cliente.",
          ko: "Esa no. Leé la explicación: el canal es el medio de entrega, no los materiales ni los costos."
        },
        teo: {
          ok: "Cierra. Sin canal, el producto no llega y no hay venta que registrar.",
          ko: "No cierra. Los costos y los materiales son recursos, no el camino de venta."
        },
        aurelio: {
          ok: "Exacto. Dominar el canal es dominar el acceso al mercado.",
          ko: "Un traspié. Confundir costos con canales es perder el rumbo del negocio."
        }
      }
    },
    {
      id: "canales-2",
      roomId: "canales",
      round: 2,
      correct: "canal_afiliados",
      prompt: "¿Cómo funciona el programa de afiliados como canal alternativo en plataformas como Amazon?",
      options: [
        {
          id: "canales-2-a",
          conceptId: "canal_afiliados",
          text: "Sitios web y blogs promocionan productos mediante enlaces y atraen más compradores.",
          char: "teo"
        },
        {
          id: "canales-2-b",
          conceptId: "logistica_falsa",
          text: "Sustituye la entrega de paquetes físicos por envíos de regalos sorpresa.",
          char: "aurelio",
          whyNot: "Es una estrategia de marketing y venta, no un método de cambio en la logística de entrega física de los productos."
        },
        {
          id: "canales-2-c",
          conceptId: "recursos_clave",
          text: "Permite que los clientes compren productos sin necesidad de conexión a internet.",
          char: "nora",
          whyNot: "Requiere plataformas digitales e internet para redirigir tráfico mediante los enlaces de afiliado, no elimina la necesidad de conexión."
        }
      ],
      explanation: "Los afiliados ayudan a promocionar el catálogo entre sus seguidores, ampliando la visibilidad del negocio a través de sus propios medios.",
      voices: {
        nora: {
          ok: "Correcto. Los afiliados extienden el alcance mediante enlaces en sus propios medios.",
          ko: "Esa no. Los afiliados usan internet y enlaces, no eliminan la necesidad de conexión."
        },
        teo: {
          ok: "Cierra. Es una estrategia de tráfico medible que amplía la visibilidad sin costo fijo.",
          ko: "No cierra. Sin internet no hay enlaces de afiliado, es una premisa netamente digital."
        },
        aurelio: {
          ok: "Exacto. Apalancarse en la audiencia de otros es una jugada maestra de expansión.",
          ko: "Un traspié. Los regalos sorpresa no son un modelo de negocio escalable ni real."
        }
      }
    },
    {
      id: "canales-3",
      roomId: "canales",
      round: 3,
      correct: "canal_digital",
      prompt: "Una panadería empieza a vender sus facturas a través de una aplicación de delivery en lugar de solo en el mostrador. ¿Qué bloque del Canvas está modificando principalmente?",
      options: [
        {
          id: "canales-3-a",
          conceptId: "canal_digital",
          text: "Está ampliando sus canales de distribución al agregar un medio digital para llegar al cliente.",
          char: "aurelio"
        },
        {
          id: "canales-3-b",
          conceptId: "estructura_costos",
          text: "Está cambiando la forma de interactuar, pero el cambio principal es el medio de entrega.",
          char: "nora",
          whyNot: "Aunque cambia la interacción, el núcleo de la modificación es el camino por el cual el producto llega al cliente, no solo la relación."
        },
        {
          id: "canales-3-c",
          conceptId: "medio_entrega",
          text: "Está cambiando el producto que ofrece a los clientes.",
          char: "teo",
          whyNot: "Las facturas siguen siendo las mismas; lo que cambia es cómo se entregan y venden, no el producto en sí."
        }
      ],
      explanation: "Agregar una app de delivery es sumar un nuevo canal de distribución digital, sin alterar necesariamente el producto en sí.",
      voices: {
        nora: {
          ok: "Correcto. Agregar una app es sumar un nuevo canal de distribución digital.",
          ko: "Esa no. El producto es el mismo, lo que cambia es el medio por el que se entrega."
        },
        teo: {
          ok: "Cierra. Una app es un canal que abre una nueva vía de ingresos medible y rastreable.",
          ko: "No cierra. La propuesta de valor (las facturas) no cambió, solo el canal de venta."
        },
        aurelio: {
          ok: "Exacto. Estar donde está el cliente, en este caso en su celular, es una ventaja competitiva.",
          ko: "Un traspié. No confundas la relación con el medio por el que se concreta la venta."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"25\" y=\"28\" width=\"10\" height=\"8\" fill=\"#c8a165\" stroke=\"#17212b\" stroke-width=\"1\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"25\" width=\"16\" height=\"10\" fill=\"#17212b\"/><rect x=\"24\" y=\"27\" width=\"12\" height=\"6\" fill=\"#4f9d69\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"25\" width=\"16\" height=\"10\" fill=\"#17212b\"/><rect x=\"24\" y=\"27\" width=\"12\" height=\"6\" fill=\"#4f9d69\"/><path d=\"M38 28l4 6h-8z\" fill=\"#e0a526\"/>"
  ]
};
