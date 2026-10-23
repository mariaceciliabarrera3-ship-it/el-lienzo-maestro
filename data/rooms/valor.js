export default {
  id: "valor",
  wall: [
    "#cfc8b6",
    "#fbecca",
    "#f7d78c",
    "#f2c14e"
  ],
  intro: "Acá se define qué ofrece tu negocio que lo hace único. Pensá en una cafetería: su propuesta no es solo vender café, sino ofrecer un espacio cómodo para trabajar o reunirse. Es la promesa de beneficios que recibe el cliente.",
  concepts: {
    propuesta: "La promesa única de beneficios y soluciones distintivas que recibe el cliente al elegir un producto o servicio.",
    diferenciacion: "Destacar lo que hace único al negocio frente a sus competidores para captar preferencia.",
    necesidades: "Centrar la propuesta en resolver problemas reales y deseos específicos de un segmento de clientes.",
    imitacion: "Copiar los productos de la competencia (no crea propuesta única).",
    promesa: "El mensaje claro y distintivo de qué beneficios recibe el cliente al elegir la empresa."
  },
  questions: [
    {
      id: "valor-1",
      roomId: "valor",
      round: 1,
      correct: "propuesta",
      prompt: "¿Qué es la propuesta de valor en un modelo de negocio?",
      options: [
        {
          id: "valor-1-a",
          conceptId: "propuesta",
          text: "La promesa única que comunica los beneficios y el valor que recibirán los clientes.",
          char: "nora"
        },
        {
          id: "valor-1-b",
          conceptId: "diferenciacion",
          text: "Destacar lo que hace único al negocio frente a sus competidores.",
          char: "teo",
          whyNot: "Esa es la diferenciación, un resultado de la propuesta, no su definición."
        },
        {
          id: "valor-1-c",
          conceptId: "necesidades",
          text: "Centrar la propuesta en resolver problemas reales de un segmento de clientes.",
          char: "aurelio",
          whyNot: "Eso es cómo se diseña la propuesta, pero no es su definición."
        }
      ],
      explanation: "La propuesta de valor es la promesa única de beneficios y soluciones distintivas que recibe el cliente al elegir un producto o servicio.",
      voices: {
        nora: {
          ok: "Correcto. La propuesta de valor es la promesa de beneficios únicos para el cliente.",
          ko: "Esa no. Leé la explicación: la propuesta es la promesa de beneficios únicos."
        },
        teo: {
          ok: "Cierra. Es la promesa de valor que recibe el cliente, medible y clara.",
          ko: "No cierra. Recordá: es la promesa de valor, no otra cosa."
        },
        aurelio: {
          ok: "Exacto. Es la promesa que distingue tu oferta y atrae a los clientes.",
          ko: "Un traspié. Aprendé: la propuesta es la promesa que distingue tu oferta."
        }
      }
    },
    {
      id: "valor-2",
      roomId: "valor",
      round: 2,
      correct: "necesidades",
      prompt: "Al definir la propuesta de valor, ¿en qué debe centrarse principalmente la empresa para resolver problemas reales?",
      options: [
        {
          id: "valor-2-a",
          conceptId: "necesidades",
          text: "En las necesidades y deseos específicos de un segmento de clientes.",
          char: "teo"
        },
        {
          id: "valor-2-b",
          conceptId: "imitacion",
          text: "En copiar exactamente los mismos productos que vende la competencia.",
          char: "aurelio",
          whyNot: "Imitar a la competencia impide crear una propuesta única y distintiva."
        },
        {
          id: "valor-2-c",
          conceptId: "diferenciacion",
          text: "En destacar lo que hace único al negocio frente a sus competidores.",
          char: "nora",
          whyNot: "La diferenciación es un resultado, no el enfoque principal para resolver problemas reales."
        }
      ],
      explanation: "Poner al cliente en el centro permite entender sus problemas reales y diseñar una solución que sea verdaderamente útil para él.",
      voices: {
        nora: {
          ok: "Correcto. Poner al cliente en el centro es la base de toda propuesta sólida.",
          ko: "Esa no. Leé la explicación: el foco debe ser el cliente, no la competencia."
        },
        teo: {
          ok: "Cierra. Sin entender al cliente, los números no cierran.",
          ko: "No cierra. Sin cliente, no hay negocio que cuente."
        },
        aurelio: {
          ok: "Exacto. Quien conoce a su cliente, domina el mercado.",
          ko: "Un traspié. Aprendé: el cliente es el centro, no la competencia."
        }
      }
    },
    {
      id: "valor-3",
      roomId: "valor",
      round: 3,
      correct: "diferenciacion",
      prompt: "¿Por qué es importante que la propuesta de valor ayude a la diferenciación del negocio?",
      options: [
        {
          id: "valor-3-a",
          conceptId: "diferenciacion",
          text: "Porque permite destacar lo que hace único al negocio frente a sus competidores.",
          char: "aurelio"
        },
        {
          id: "valor-3-b",
          conceptId: "promesa",
          text: "Porque hace innecesario el uso de canales para entregar el producto.",
          char: "nora",
          whyNot: "Sin canales no se puede entregar la propuesta, por más diferenciada que sea."
        },
        {
          id: "valor-3-c",
          conceptId: "imitacion",
          text: "Porque sirve para cambiar todos los días la imagen comercial de la empresa.",
          char: "teo",
          whyNot: "La propuesta busca estabilidad y claridad, no cambios constantes e impredecibles."
        }
      ],
      explanation: "Destacar las características únicas y especiales de la oferta permite captar la atención del público y generar preferencia por la marca.",
      voices: {
        nora: {
          ok: "Correcto. Diferenciarse es destacar lo único que ofrece tu negocio.",
          ko: "Esa no. Leé la explicación: diferenciarse es destacar lo único, no cambiar."
        },
        teo: {
          ok: "Cierra. La diferenciación te saca de la guerra de precios.",
          ko: "No cierra. La diferenciación da estabilidad, no cambios constantes."
        },
        aurelio: {
          ok: "Exacto. Ser único es la mejor estrategia para ganar preferencia.",
          ko: "Un traspié. Aprendé: ser único es clave, no cambiar cada día."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"28\" y=\"30\" width=\"4\" height=\"5\" fill=\"#d8dfe5\" opacity=\"0.6\"/>",
    "<rect x=\"18\" y=\"33\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"36\" width=\"2\" height=\"9\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"36\" width=\"2\" height=\"9\" fill=\"#8b6b4a\"/><rect x=\"27\" y=\"28\" width=\"6\" height=\"5\" fill=\"#e0a526\" opacity=\"0.7\"/><rect x=\"28\" y=\"27\" width=\"4\" height=\"1\" fill=\"#e0a526\"/>",
    "<rect x=\"16\" y=\"32\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"36\" width=\"2\" height=\"9\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"36\" width=\"2\" height=\"9\" fill=\"#8b6b4a\"/><rect x=\"17\" y=\"31\" width=\"26\" height=\"2\" fill=\"#b3261e\" opacity=\"0.5\"/><rect x=\"26\" y=\"26\" width=\"8\" height=\"6\" fill=\"#c8a165\"/><rect x=\"27\" y=\"25\" width=\"6\" height=\"1\" fill=\"#c8a165\"/>",
    "<rect x=\"14\" y=\"31\" width=\"32\" height=\"5\" fill=\"#8b6b4a\"/><rect x=\"16\" y=\"36\" width=\"2\" height=\"9\" fill=\"#8b6b4a\"/><rect x=\"42\" y=\"36\" width=\"2\" height=\"9\" fill=\"#8b6b4a\"/><rect x=\"15\" y=\"30\" width=\"30\" height=\"2\" fill=\"#fff\" opacity=\"0.8\"/><rect x=\"25\" y=\"24\" width=\"10\" height=\"7\" fill=\"#dfe8ee\" opacity=\"0.9\"/><rect x=\"26\" y=\"23\" width=\"8\" height=\"1\" fill=\"#dfe8ee\"/><rect x=\"29\" y=\"22\" width=\"2\" height=\"1\" fill=\"#dfe8ee\"/>"
  ]
};
