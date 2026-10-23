export default {
  id: "relaciones",
  wall: [
    "#cfc8b6",
    "#f0d4d4",
    "#e2a8a8",
    "#d97f7f"
  ],
  intro: "Acá definimos cómo nos relacionamos con el cliente. Pensá en un gimnasio: puede ser solo usar las máquinas por tu cuenta (autoservicio) o tener un entrenador que te guía (asistencia personal).",
  concepts: {
    membresia: "Programa que ofrece ventajas y accesos VIP o prioritarios a los clientes registrados.",
    asistencia_personal: "Trato directo, cercano y exclusivo entre un representante de la empresa y el cliente.",
    autoservicio: "El cliente realiza trámites o compras por cuenta propia, sin colaboración en el desarrollo.",
    automatizacion: "Utiliza sistemas tecnológicos y correos programados en lugar del trato mano a mano.",
    comunidades: "Reúnen a grupos de clientes para que hablen entre sí, sin atención dedicada uno a uno.",
    co_creacion: "Involucra activamente al cliente dentro del proceso de desarrollo y mejora de los productos o servicios."
  },
  questions: [
    {
      id: "relaciones-1",
      roomId: "relaciones",
      round: 1,
      correct: "membresia",
      prompt: "Si te inscribes a un club que te brinda beneficios exclusivos, como envíos gratuitos y acceso anticipado a productos, ¿qué tipo de relación tienes con la empresa?",
      options: [
        {
          id: "relaciones-1-a",
          conceptId: "membresia",
          text: "Membresía.",
          char: "nora"
        },
        {
          id: "relaciones-1-b",
          conceptId: "asistencia_personal",
          text: "Asistencia personal.",
          char: "teo",
          whyNot: "La asistencia personal es la orientación directa dada por un vendedor o representante, no un sistema de ventajas exclusivas."
        },
        {
          id: "relaciones-1-c",
          conceptId: "autoservicio",
          text: "Autoservicio.",
          char: "aurelio",
          whyNot: "El autoservicio consiste en realizar trámites o compras por cuenta propia, sin relación con programas de beneficios."
        }
      ],
      explanation: "La membresía es un programa que ofrece ventajas y accesos VIP o prioritarios a los clientes registrados.",
      voices: {
        nora: {
          ok: "Correcto. La membresía otorga ventajas prioritarias. La claridad siempre gana.",
          ko: "Esa no. La membresía es un programa de ventajas, no atención directa. Leé con atención."
        },
        teo: {
          ok: "Cierra. Un programa de beneficios fideliza y asegura ingresos recurrentes. Así cierran las cuentas.",
          ko: "No cierra. El autoservicio o la asistencia no son programas de beneficios registrados. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Ofrecer acceso VIP es una forma brillante de retener a los mejores clientes. Esa es la jugada maestra.",
          ko: "Un traspié. Confundir asistencia con membresía es perder el valor del club exclusivo. Aprendé la diferencia."
        }
      }
    },
    {
      id: "relaciones-2",
      roomId: "relaciones",
      round: 2,
      correct: "asistencia_personal",
      prompt: "Un vendedor atiende de forma directa, cercana y dedicada a un comprador durante su visita a la tienda. ¿Cómo se llama este tipo de relación?",
      options: [
        {
          id: "relaciones-2-a",
          conceptId: "automatizacion",
          text: "Automatización.",
          char: "teo",
          whyNot: "La automatización utiliza sistemas tecnológicos y correos programados en lugar del trato mano a mano entre personas."
        },
        {
          id: "relaciones-2-b",
          conceptId: "comunidades",
          text: "Comunidades.",
          char: "nora",
          whyNot: "Las comunidades reúnen a grupos de clientes para que hablen entre sí, no implican atención dedicada uno a uno por parte de un empleado."
        },
        {
          id: "relaciones-2-c",
          conceptId: "asistencia_personal",
          text: "Asistencia personal.",
          char: "aurelio"
        }
      ],
      explanation: "La asistencia personal implica un trato directo, cercano y exclusivo entre un representante de la empresa y el cliente.",
      voices: {
        nora: {
          ok: "Correcto. La asistencia personal es un trato directo y exclusivo. La claridad siempre gana.",
          ko: "Esa no. La automatización o las comunidades no son atención uno a uno. Leé con atención."
        },
        teo: {
          ok: "Cierra. Un vendedor dedicado mejora la experiencia y la conversión. Así cierran las cuentas.",
          ko: "No cierra. Las comunidades o la automatización no reemplazan al vendedor dedicado. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. El trato exclusivo y cercano es la mejor forma de asegurar una venta. Esa es la jugada maestra.",
          ko: "Un traspié. Un grupo o un bot no reemplazan el trato humano dedicado. Aprendé la diferencia."
        }
      }
    },
    {
      id: "relaciones-3",
      roomId: "relaciones",
      round: 3,
      correct: "co_creacion",
      prompt: "Cuando una empresa invita a los clientes a dar ideas o probar una versión nueva de un producto para mejorar su diseño, ¿qué tipo de relación aplica?",
      options: [
        {
          id: "relaciones-3-a",
          conceptId: "automatizacion",
          text: "Automatización.",
          char: "teo",
          whyNot: "La automatización utiliza sistemas para enviar mensajes periódicos o recordatorios, no para pedir retroalimentación en la creación."
        },
        {
          id: "relaciones-3-b",
          conceptId: "co_creacion",
          text: "Co-creación.",
          char: "nora"
        },
        {
          id: "relaciones-3-c",
          conceptId: "autoservicio",
          text: "Autoservicio.",
          char: "aurelio",
          whyNot: "El autoservicio busca que el cliente realice sus compras o gestione sus necesidades solo, sin colaborar en el desarrollo."
        }
      ],
      explanation: "La co-creación involucra activamente al cliente dentro del proceso de desarrollo y mejora de los productos o servicios.",
      voices: {
        nora: {
          ok: "Correcto. La co-creación involucra al cliente en el desarrollo. La claridad siempre gana.",
          ko: "Esa no. La co-creación pide ideas, el autoservicio solo pide que compres. Leé con atención."
        },
        teo: {
          ok: "Cierra. Involucrar al cliente reduce el riesgo de lanzar algo que nadie quiere. Así cierran las cuentas.",
          ko: "No cierra. La automatización envía mensajes, no pide retroalimentación de diseño. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Que el cliente diseñe contigo es la forma más inteligente de garantizar el éxito. Esa es la jugada maestra.",
          ko: "Un traspié. Dejar que el cliente solo compre no es lo mismo que pedirle que cree contigo. Aprendé la diferencia."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><path d=\"M24 28q6-6 12 0\" fill=\"none\" stroke=\"#1f7a8c\" stroke-width=\"2\"/><circle cx=\"30\" cy=\"24\" r=\"3\" fill=\"#1f7a8c\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><path d=\"M22 28l4 4 8-8\" fill=\"none\" stroke=\"#4f9d69\" stroke-width=\"2\"/><circle cx=\"22\" cy=\"28\" r=\"2\" fill=\"#4f9d69\"/><circle cx=\"34\" cy=\"20\" r=\"2\" fill=\"#4f9d69\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><path d=\"M24 26l6 6 10-10\" fill=\"none\" stroke=\"#e0a526\" stroke-width=\"2.5\"/><circle cx=\"24\" cy=\"26\" r=\"2.5\" fill=\"#e0a526\"/><circle cx=\"40\" cy=\"16\" r=\"2.5\" fill=\"#e0a526\"/>"
  ]
};
