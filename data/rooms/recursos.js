export default {
  id: "recursos",
  wall: [
    "#cfc8b6",
    "#e0d8d0",
    "#c8bfb5",
    "#b0a89e"
  ],
  intro: "Acá están las herramientas indispensables para que el negocio funcione. Pensá en una panadería: el horno, la harina y el panadero son sus recursos clave. Sin ellos, no hay pan.",
  concepts: {
    elementos_indispensables: "Los elementos indispensables que una empresa necesita para funcionar y entregar valor a sus clientes.",
    obsequios_fidelizacion: "Los obsequios que se entregan a los clientes cuando cumplen años.",
    anuncios_redes: "Únicamente los anuncios que la empresa publica en redes sociales para atraer clientes.",
    instalaciones_maquinas: "Las instalaciones de ejercicio y las máquinas de entrenamiento.",
    cocineros_comida: "Los cocineros especializados en comida rápida.",
    convenios_hoteles: "Los convenios de alojamiento con cadenas de hoteles internacionales.",
    recursos_humanos: "Recursos humanos especializados (profesores o doctores capacitados).",
    infraestructura_fisica: "Recursos de infraestructura física (edificios, escritorios).",
    tecnologia_plataforma: "Recursos de tecnología de plataforma (programas, servidores)."
  },
  questions: [
    {
      id: "recursos-1",
      roomId: "recursos",
      round: 1,
      correct: "elementos_indispensables",
      prompt: "¿Qué son los recursos clave dentro de un modelo de negocio?",
      options: [
        {
          id: "recursos-1-a",
          conceptId: "obsequios_fidelizacion",
          text: "Son los obsequios que se entregan a los clientes cuando cumplen años.",
          char: "aurelio",
          whyNot: "Los obsequios forman parte de las estrategias de fidelización en la relación con el cliente, no de las herramientas o activos centrales del negocio."
        },
        {
          id: "recursos-1-b",
          conceptId: "anuncios_redes",
          text: "Son únicamente los anuncios que la empresa publica en redes sociales para atraer clientes.",
          char: "teo",
          whyNot: "La publicidad en internet forma parte de los canales o de las actividades de promoción, pero no representa el conjunto de elementos esenciales para operar el negocio."
        },
        {
          id: "recursos-1-c",
          conceptId: "elementos_indispensables",
          text: "Son los elementos indispensables que una empresa necesita para funcionar y entregar valor a sus clientes.",
          char: "nora"
        }
      ],
      explanation: "Los recursos clave abarcan los elementos físicos, humanos, intelectuales y financieros indispensables para operar y crear una propuesta de valor.",
      voices: {
        nora: {
          ok: "Correcto. Son los elementos indispensables para operar. La claridad siempre gana.",
          ko: "Esa no. Los recursos clave son activos centrales, no obsequios ni anuncios. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin los elementos indispensables, el negocio no funciona. Así cierran las cuentas.",
          ko: "No cierra. La publicidad es un canal, no un recurso central. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Tener los activos correctos es la base de todo imperio. Esa es la jugada maestra.",
          ko: "Un traspié. Los regalos son marketing, no el motor del negocio. Aprendé la diferencia."
        }
      }
    },
    {
      id: "recursos-2",
      roomId: "recursos",
      round: 2,
      correct: "instalaciones_maquinas",
      prompt: "¿Cuál es un recurso clave fundamental para el funcionamiento de un gimnasio?",
      options: [
        {
          id: "recursos-2-a",
          conceptId: "cocineros_comida",
          text: "Los cocineros especializados en comida rápida.",
          char: "nora",
          whyNot: "El personal de cocina es un recurso humano especializado para la industria restaurantera o de comida rápida."
        },
        {
          id: "recursos-2-b",
          conceptId: "convenios_hoteles",
          text: "Los convenios de alojamiento con cadenas de hoteles internacionales.",
          char: "aurelio",
          whyNot: "Los convenios hoteleros son recursos clave propios de una agencia de viajes, no de un establecimiento deportivo."
        },
        {
          id: "recursos-2-c",
          conceptId: "instalaciones_maquinas",
          text: "Las instalaciones de ejercicio y las máquinas de entrenamiento.",
          char: "teo"
        }
      ],
      explanation: "Un gimnasio requiere de manera indispensable el espacio adecuado y el equipo físico específico para que los usuarios realicen sus actividades deportivas.",
      voices: {
        nora: {
          ok: "Correcto. El personal de cocina no tiene lugar en un gimnasio. La claridad siempre gana.",
          ko: "Esa no. Los cocineros son para restaurantes, no para gimnasios. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin máquinas ni espacio, no hay servicio que cobrar. Así cierran las cuentas.",
          ko: "No cierra. Los convenios de hoteles son para turismo, no para deporte. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. El equipo adecuado es lo que vende la experiencia. Esa es la jugada maestra.",
          ko: "Un traspié. Un gimnasio no necesita convenios hoteleros. Aprendé la diferencia."
        }
      }
    },
    {
      id: "recursos-3",
      roomId: "recursos",
      round: 3,
      correct: "recursos_humanos",
      prompt: "En un negocio de servicios como una escuela de idiomas o un consultorio médico, ¿a qué categoría pertenecen los profesores o doctores capacitados?",
      options: [
        {
          id: "recursos-3-a",
          conceptId: "infraestructura_fisica",
          text: "Recursos de infraestructura física.",
          char: "teo",
          whyNot: "Los escritorios o los edificios son recursos físicos materiales, no el personal que presta la atención médica o académica."
        },
        {
          id: "recursos-3-b",
          conceptId: "tecnologia_plataforma",
          text: "Recursos de tecnología de plataforma.",
          char: "nora",
          whyNot: "Los programas informáticos y servidores son herramientas tecnológicas, a diferencia de los profesionales que interactúan con los clientes."
        },
        {
          id: "recursos-3-c",
          conceptId: "recursos_humanos",
          text: "Recursos humanos especializados.",
          char: "aurelio"
        }
      ],
      explanation: "Las personas que cuentan con habilidades y conocimientos específicos necesarios para ofrecer el servicio constituyen el talento humano esencial.",
      voices: {
        nora: {
          ok: "Correcto. Los profesionales son el recurso humano esencial. La claridad siempre gana.",
          ko: "Esa no. La tecnología son herramientas, no las personas que atienden. Leé con atención."
        },
        teo: {
          ok: "Cierra. El talento humano es el activo más valioso en servicios. Así cierran las cuentas.",
          ko: "No cierra. La infraestructura son edificios, no el personal capacitado. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. El conocimiento de tu equipo es tu mayor ventaja competitiva. Esa es la jugada maestra.",
          ko: "Un traspié. No confundas el edificio con el profesional que trabaja en él. Aprendé la diferencia."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"26\" y=\"28\" width=\"8\" height=\"8\" fill=\"#6b7a8f\" stroke=\"#17212b\" stroke-width=\"1\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><circle cx=\"30\" cy=\"26\" r=\"6\" fill=\"none\" stroke=\"#e0a526\" stroke-width=\"2\"/><path d=\"M30 20v12M24 26h12\" stroke=\"#e0a526\" stroke-width=\"2\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"22\" width=\"20\" height=\"14\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1.5\"/><path d=\"M24 26h12M24 30h8M24 34h10\" stroke=\"#1f7a8c\" stroke-width=\"1.5\"/>"
  ]
};
