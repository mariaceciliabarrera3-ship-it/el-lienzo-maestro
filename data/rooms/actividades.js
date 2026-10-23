export default {
  id: "actividades",
  wall: [
    "#cfc8b6",
    "#e0d8d0",
    "#c8bfb5",
    "#b0a89e"
  ],
  intro: "Acá están las tareas que el negocio debe hacer sí o sí para funcionar. Pensá en una panadería: amasar, hornear y atender son sus actividades clave. Sin eso, no hay pan.",
  concepts: {
    tareas_esenciales: "Las tareas esenciales e importantes que la empresa debe realizar para crear y entregar valor a sus clientes.",
    dinero_ganado: "El dinero total que la empresa gana y guarda en el banco al final del.",
    socios_externos: "Las personas y aliados externos que le prestan dinero o servicios a la empresa.",
    mantenimiento_software: "Mantenimiento y actualización continua de plataformas de software.",
    asesoramiento_moda: "Ofrecer asesoramiento de moda personalizado a cada cliente.",
    preparacion_rapida: "Preparación rápida de alimentos y gestión eficaz de pedidos.",
    comprender_propuesta: "Comprender en detalle tu propuesta de valor y las necesidades que vas a resolver.",
    comprar_mercaderia: "Comprar inmediatamente la mercancía antes de saber qué le gusta al cliente.",
    publicidad_tv: "Contratar publicidad en televisión antes de definir el producto o servicio."
  },
  questions: [
    {
      id: "actividades-1",
      roomId: "actividades",
      round: 1,
      correct: "tareas_esenciales",
      prompt: "¿Qué son las 'Actividades Claves' dentro de un modelo de negocio?",
      options: [
        {
          id: "actividades-1-a",
          conceptId: "dinero_ganado",
          text: "El dinero total que la empresa gana y guarda en el banco al final del mes.",
          char: "teo",
          whyNot: "El dinero obtenido corresponde al flujo de ingresos y ganancias, no a las actividades de trabajo del negocio."
        },
        {
          id: "actividades-1-b",
          conceptId: "socios_externos",
          text: "Las personas y aliados externos que le prestan dinero o servicios a la empresa.",
          char: "aurelio",
          whyNot: "Los aliados o proveedores externos se clasifican como socios clave, no como actividades operativas."
        },
        {
          id: "actividades-1-c",
          conceptId: "tareas_esenciales",
          text: "Las tareas esenciales e importantes que la empresa debe realizar para crear y entregar valor a sus clientes.",
          char: "nora"
        }
      ],
      explanation: "Las actividades clave representan las acciones fundamentales para definir, fabricar y ofrecer la propuesta de valor del negocio.",
      voices: {
        nora: {
          ok: "Correcto. Son las acciones fundamentales para crear valor. La claridad siempre gana.",
          ko: "Esa no. Las actividades son tareas, no dinero ni socios. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin tareas esenciales, no hay proceso que medir. Así cierran las cuentas.",
          ko: "No cierra. El dinero es el resultado, no la actividad. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Dominar las tareas clave es dominar la operación. Esa es la jugada maestra.",
          ko: "Un traspié. Los socios son aliados, no las tareas diarias. Aprendé la diferencia."
        }
      }
    },
    {
      id: "actividades-2",
      roomId: "actividades",
      round: 2,
      correct: "preparacion_rapida",
      prompt: "¿Cuál es una actividad clave principal en un restaurante de comida rápida?",
      options: [
        {
          id: "actividades-2-a",
          conceptId: "mantenimiento_software",
          text: "Mantenimiento y actualización continua de plataformas de software.",
          char: "nora",
          whyNot: "El mantenimiento de plataformas digitales corresponde a negocios tecnológicos SaaS y no al área gastronómica."
        },
        {
          id: "actividades-2-b",
          conceptId: "asesoramiento_moda",
          text: "Ofrecer asesoramiento de moda personalizado a cada cliente.",
          char: "aurelio",
          whyNot: "El asesoramiento de moda es una tarea de tiendas de vestir, totalmente ajena a la venta de alimentos."
        },
        {
          id: "actividades-2-c",
          conceptId: "preparacion_rapida",
          text: "Preparación rápida de alimentos y gestión eficaz de pedidos.",
          char: "teo"
        }
      ],
      explanation: "La agilidad en la cocina y la atención rápida son la base del valor en el modelo de comida rápida.",
      voices: {
        nora: {
          ok: "Correcto. La preparación y gestión de pedidos son el núcleo del servicio. La claridad siempre gana.",
          ko: "Esa no. Un restaurante no se dedica al software ni a la moda. Leé con atención."
        },
        teo: {
          ok: "Cierra. La agilidad en cocina y pedidos es lo que hace rentable el modelo. Así cierran las cuentas.",
          ko: "No cierra. El software o la moda no son el foco de un restaurante. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. La velocidad en la entrega es lo que fideliza al cliente. Esa es la jugada maestra.",
          ko: "Un traspié. Asesorar en moda en una hamburguesería no tiene sentido. Aprendé la diferencia."
        }
      }
    },
    {
      id: "actividades-3",
      roomId: "actividades",
      round: 3,
      correct: "comprender_propuesta",
      prompt: "¿Cuál es el primer paso recomendado para identificar las actividades clave de tu negocio?",
      options: [
        {
          id: "actividades-3-a",
          conceptId: "comprender_propuesta",
          text: "Comprender en detalle tu propuesta de valor y las necesidades que vas a resolver.",
          char: "nora"
        },
        {
          id: "actividades-3-b",
          conceptId: "comprar_mercaderia",
          text: "Comprar inmediatamente la mercancía antes de saber qué le gusta al cliente.",
          char: "teo",
          whyNot: "Adquirir inventario sin conocer la propuesta de valor puede generar pérdidas y actividades innecesarias."
        },
        {
          id: "actividades-3-c",
          conceptId: "publicidad_tv",
          text: "Contratar publicidad en televisión antes de definir el producto o servicio.",
          char: "aurelio",
          whyNot: "Promocionar un negocio sin definir qué se ofrece o cómo se entregará es un paso apresurado que causa confusión."
        }
      ],
      explanation: "Es imprescindible saber qué beneficio o solución estás ofreciendo antes de determinar qué tareas se necesitan para entregarlo.",
      voices: {
        nora: {
          ok: "Correcto. Primero la propuesta, después las tareas. La claridad siempre gana.",
          ko: "Esa no. Promocionar o comprar sin saber qué vendés es un error. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin saber qué vendés, no podés calcular costos ni actividades. Así cierran las cuentas.",
          ko: "No cierra. Comprar mercadería a ciegas es la receta para perder plata. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Conocer tu solución es el primer paso para construir un imperio. Esa es la jugada maestra.",
          ko: "Un traspié. La publicidad sin producto definido es tirar el dinero. Aprendé la diferencia."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"24\" y=\"28\" width=\"12\" height=\"8\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"24\" y=\"28\" width=\"12\" height=\"8\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1\"/><path d=\"M26 31h8M26 33h6\" stroke=\"#1f7a8c\" stroke-width=\"1.5\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"24\" width=\"16\" height=\"12\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1.5\"/><path d=\"M26 28h8M26 30h6M26 32h8\" stroke=\"#1f7a8c\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"28\" r=\"4\" fill=\"#e0a526\"/>"
  ]
};
