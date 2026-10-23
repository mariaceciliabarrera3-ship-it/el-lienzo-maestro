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
    recursos_clave: "Lista de materiales físicos o insumos necesarios para construir un producto.",
    estructura_costos: "Lista de gastos y sueldos que la empresa debe pagar cada mes.",
    canal_afiliados: "Sitios web o blogs que promocionan productos mediante enlaces para atraer compradores.",
    regalos_sorpresa: "Sustituir la entrega de paquetes físicos por envíos de regalos sorpresa.",
    sin_internet: "Comprar productos sin necesidad de conexión a internet.",
    canal_digital: "Sumar un nuevo canal de distribución digital para llegar a más clientes.",
    cambiar_producto: "Cambiar el producto que se ofrece porque ahora se vende por otro medio.",
    cambiar_costos: "Cambiar la estructura de costos porque se suma un nuevo medio de venta."
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
          whyNot: "Los insumos y materiales pertenecen a los recursos clave requeridos para la producción, no al camino para entregar el producto."
        },
        {
          id: "canales-1-b",
          conceptId: "estructura_costos",
          text: "Es la lista de todos los gastos y sueldos que la empresa debe pagar cada mes.",
          char: "aurelio",
          whyNot: "Esa definición corresponde a la estructura de costos y no al camino para entregar el producto al cliente."
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
          ok: "Correcto. Es el camino por el que llega el valor al cliente. La claridad siempre gana.",
          ko: "Esa no. El canal es el medio de entrega, no los materiales ni los costos. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin canal no hay venta que registrar. Así cierran las cuentas.",
          ko: "No cierra. Los materiales y los costos son otra cosa. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Dominar el canal es dominar el acceso al mercado. Esa es la jugada maestra.",
          ko: "Un traspié. Confundir costos con canales es perder el rumbo del negocio. Aprendé la diferencia."
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
          conceptId: "regalos_sorpresa",
          text: "Sustituye la entrega de paquetes físicos por envíos de regalos sorpresa.",
          char: "aurelio",
          whyNot: "Es una estrategia de marketing y venta, no un método de cambio en la logística de entrega."
        },
        {
          id: "canales-2-c",
          conceptId: "sin_internet",
          text: "Permite que los clientes compren productos sin necesidad de conexión a internet.",
          char: "nora",
          whyNot: "Requiere plataformas digitales e internet para redirigir tráfico mediante los enlaces de afiliado."
        }
      ],
      explanation: "Los afiliados ayudan a promocionar el catálogo entre sus seguidores, ampliando la visibilidad del negocio.",
      voices: {
        nora: {
          ok: "Correcto. Los afiliados extienden el alcance mediante enlaces. La claridad siempre gana.",
          ko: "Esa no. Los afiliados usan internet y enlaces, no eliminan la necesidad de conexión. Revisá."
        },
        teo: {
          ok: "Cierra. Es tráfico medible que amplía la visibilidad sin costo fijo. Así cierran las cuentas.",
          ko: "No cierra. Sin internet no hay enlaces de afiliado. Los números no mienten."
        },
        aurelio: {
          ok: "Exacto. Apalancarse en la audiencia de otros es una jugada maestra de expansión.",
          ko: "Un traspié. Los regalos sorpresa no son un modelo real. Aprendé la diferencia."
        }
      }
    },
    {
      id: "canales-3",
      roomId: "canales",
      round: 3,
      correct: "canal_digital",
      prompt: "Una zapatería que antes solo vendía en su local ahora también recibe pedidos por Instagram. ¿Qué está sumando al negocio?",
      options: [
        {
          id: "canales-3-a",
          conceptId: "canal_digital",
          text: "Un nuevo canal de distribución digital para llegar a más clientes donde estén.",
          char: "aurelio"
        },
        {
          id: "canales-3-b",
          conceptId: "cambiar_producto",
          text: "Un cambio en el producto que ofrece, porque ahora vende por redes sociales.",
          char: "teo",
          whyNot: "Las zapas siguen siendo las mismas; lo que cambia es el medio por el cual se venden y entregan, no el producto."
        },
        {
          id: "canales-3-c",
          conceptId: "cambiar_costos",
          text: "Un cambio en la estructura de costos, porque ahora tiene más gastos fijos cada mes.",
          char: "nora",
          whyNot: "Aunque pueda haber nuevos costos, lo principal que suma es un nuevo camino para llegar al cliente, no un cambio de costos."
        }
      ],
      explanation: "Sumar Instagram como medio de venta es agregar un nuevo canal de distribución digital, sin alterar el producto en sí.",
      voices: {
        nora: {
          ok: "Correcto. Sumar Instagram es sumar un nuevo canal digital. La claridad siempre gana.",
          ko: "Esa no. Lo principal que cambia es el camino para llegar al cliente, no los costos. Revisá."
        },
        teo: {
          ok: "Cierra. Una red social es un canal que abre una nueva vía de ingresos medible. Así cierran las cuentas.",
          ko: "No cierra. El producto (las zapas) no cambió, solo el canal de venta. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Estar donde está el cliente, en su celular, es una jugada maestra.",
          ko: "Un traspié. No confundas el producto con el medio por el que se vende. Aprendé la diferencia."
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
