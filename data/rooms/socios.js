export default {
  id: "socios",
  wall: [
    "#cfc8b6",
    "#e0d0e8",
    "#c8b0d8",
    "#b090c8"
  ],
  intro: "Acá están los aliados que ayudan al negocio a funcionar. Pensá en una panadería: el proveedor de harina y el repartidor son sus socios clave. Nadie crece solo.",
  concepts: {
    aliados_colaboracion: "Son las personas, organizaciones o aliados con los que una empresa colabora para poder funcionar y crecer.",
    competencia_rivales: "Son las empresas rivales que ofrecen exactamente lo mismo para quitarte ventas.",
    herramientas_oficina: "Son los aparatos tecnológicos y herramientas que se quedan guardados en la oficina.",
    anunciantes_facebook: "Utilizan la plataforma para crear anuncios dirigidos a audiencias específicas, generando ingresos para la red social.",
    suministro_energia: "Suministran la electricidad y los cables necesarios para mantener encendidos los servidores.",
    fabricantes_dispositivos: "Fabrican las computadoras y celulares que los usuarios usan para navegar en internet.",
    musica_catalogo: "Porque permiten incluir su música en la plataforma para ofrecer un catálogo amplio a los usuarios.",
    mantenimiento_oficina: "Porque limpian y mantienen las oficinas físicas donde trabajan los programadores.",
    cobro_suscripciones: "Porque se encargan de cobrar directamente las tarifas mensuales de suscripción a los clientes."
  },
  questions: [
    {
      id: "socios-1",
      roomId: "socios",
      round: 1,
      correct: "aliados_colaboracion",
      prompt: "¿Qué son los Socios Claves en un modelo de negocio?",
      options: [
        {
          id: "socios-1-a",
          conceptId: "competencia_rivales",
          text: "Son las empresas rivales que ofrecen exactamente lo mismo para quitarte ventas.",
          char: "aurelio",
          whyNot: "Las empresas rivales son la competencia del mercado y no colaboran para ayudar a que tu negocio evolucione."
        },
        {
          id: "socios-1-b",
          conceptId: "herramientas_oficina",
          text: "Son los aparatos tecnológicos y herramientas que se quedan guardados en la oficina.",
          char: "teo",
          whyNot: "Las herramientas y la maquinaria corresponden al bloque de recursos clave y no a las personas u organizaciones aliadas."
        },
        {
          id: "socios-1-c",
          conceptId: "aliados_colaboracion",
          text: "Son las personas, organizaciones o aliados con los que una empresa colabora para poder funcionar y crecer.",
          char: "nora"
        }
      ],
      explanation: "Los socios clave aportan ayuda estratégica, recursos o servicios fundamentales que permiten al negocio entregar su propuesta de valor de forma eficiente.",
      voices: {
        nora: {
          ok: "Correcto. Son los aliados que colaboran para que el negocio funcione. La claridad siempre gana.",
          ko: "Esa no. Los socios son aliados, no rivales ni herramientas. Leé con atención."
        },
        teo: {
          ok: "Cierra. Sin aliados estratégicos, los costos suben y la eficiencia baja. Así cierran las cuentas.",
          ko: "No cierra. Las herramientas son recursos, no socios. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Las grandes alianzas construyen grandes imperios. Esa es la jugada maestra.",
          ko: "Un traspié. La competencia no es tu socia. Aprendé la diferencia."
        }
      }
    },
    {
      id: "socios-2",
      roomId: "socios",
      round: 2,
      correct: "anunciantes_facebook",
      prompt: "¿De qué manera benefician las empresas de publicidad a Facebook como socios clave?",
      options: [
        {
          id: "socios-2-a",
          conceptId: "suministro_energia",
          text: "Suministran la electricidad y los cables necesarios para mantener encendidos los servidores.",
          char: "teo",
          whyNot: "El suministro de energía eléctrica proviene de empresas de servicios públicos, no de las agencias publicitarias."
        },
        {
          id: "socios-2-b",
          conceptId: "fabricantes_dispositivos",
          text: "Fabrican las computadoras y celulares que los usuarios usan para navegar en internet.",
          char: "nora",
          whyNot: "Las empresas tecnológicas y de telecomunicaciones producen los dispositivos, diferenciándose de las empresas de publicidad."
        },
        {
          id: "socios-2-c",
          conceptId: "anunciantes_facebook",
          text: "Utilizan la plataforma para crear anuncios dirigidos a audiencias específicas, generando ingresos para la red social.",
          char: "aurelio"
        }
      ],
      explanation: "Los anunciantes crean campañas efectivas que financian el ecosistema de la red social mientras alcanzan a sus clientes ideales.",
      voices: {
        nora: {
          ok: "Correcto. Los anunciantes financian la plataforma con sus campañas. La claridad siempre gana.",
          ko: "Esa no. Los fabricantes de dispositivos no son los socios publicitarios. Leé con atención."
        },
        teo: {
          ok: "Cierra. La publicidad es el motor de ingresos de la red. Así cierran las cuentas.",
          ko: "No cierra. La electricidad es un servicio básico, no el socio clave de publicidad. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Monetizar la atención del usuario es la clave del negocio digital. Esa es la jugada maestra.",
          ko: "Un traspié. Confundir proveedores de luz con socios estratégicos es un error costoso. Aprendé la diferencia."
        }
      }
    },
    {
      id: "socios-3",
      roomId: "socios",
      round: 3,
      correct: "musica_catalogo",
      prompt: "¿Por qué los sellos discográficos y los artistas son socios clave para una plataforma como Spotify?",
      options: [
        {
          id: "socios-3-a",
          conceptId: "musica_catalogo",
          text: "Porque permiten incluir su música en la plataforma para ofrecer un catálogo amplio a los usuarios.",
          char: "nora"
        },
        {
          id: "socios-3-b",
          conceptId: "mantenimiento_oficina",
          text: "Porque limpian y mantienen las oficinas físicas donde trabajan los programadores.",
          char: "teo",
          whyNot: "Los servicios de mantenimiento u oficina son tareas operativas secundarias y no la razón principal del acuerdo musical."
        },
        {
          id: "socios-3-c",
          conceptId: "cobro_suscripciones",
          text: "Porque se encargan de cobrar directamente las tarifas mensuales de suscripción a los clientes.",
          char: "aurelio",
          whyNot: "El cobro de suscripciones se realiza a través de pasarelas de pago y sistemas financieros, no por medio de los artistas musicalmente."
        }
      ],
      explanation: "Al hacer acuerdos con los artistas y las discográficas, la plataforma puede ofrecer miles de canciones y atraer a millones de oyentes.",
      voices: {
        nora: {
          ok: "Correcto. Sin su música, no hay plataforma que valga la pena. La claridad siempre gana.",
          ko: "Esa no. El cobro lo hacen los sistemas financieros, no los artistas. Leé con atención."
        },
        teo: {
          ok: "Cierra. El catálogo es el activo que atrae a los suscriptores que pagan. Así cierran las cuentas.",
          ko: "No cierra. El mantenimiento de oficinas no es el núcleo del acuerdo con una discográfica. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Controlar el contenido es controlar el mercado. Esa es la jugada maestra.",
          ko: "Un traspié. Los artistas crean el valor, no cobran las suscripciones. Aprendé la diferencia."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"24\" y=\"28\" width=\"12\" height=\"8\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"24\" y=\"28\" width=\"12\" height=\"8\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1\"/><path d=\"M28 32h4M30 30v4\" stroke=\"#1f7a8c\" stroke-width=\"1.5\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"26\" width=\"16\" height=\"10\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1.5\"/><path d=\"M26 30h8M26 32h6\" stroke=\"#1f7a8c\" stroke-width=\"1.5\"/><circle cx=\"36\" cy=\"34\" r=\"3\" fill=\"#e0a526\"/>"
  ]
};
