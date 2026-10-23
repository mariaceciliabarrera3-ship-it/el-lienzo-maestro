export default {
  id: "segmentos",
  wall: [
    "#cfc8b6",
    "#d4e8f0",
    "#a8d5e2",
    "#7bc4d9"
  ],
  intro: "Acá se decide a quién le vendemos. Pensá en un kiosco: no le vende igual a un chico que a un jubilado. Un grupo de personas con necesidades parecidas se llama segmento.",
  concepts: {
    propuesta_previa: "Comprender la propuesta de valor y los beneficios únicos antes de definir a quién va dirigido.",
    validacion_directa: "Salir a hablar directamente con los clientes y observar sus problemas reales en el mundo.",
    enfoque_segmento: "Concentrarse en un solo segmento con alto potencial para acelerar el desarrollo y no dispersar esfuerzos.",
    copiar_competencia: "Copiar el perfil de clientes de la competencia (no destaca la oferta propia).",
    suposicion_interna: "Asumir gustos propios o adivinar sin validar (aumenta el riesgo de fracaso)."
  },
  questions: [
    {
      id: "segmentos-1",
      roomId: "segmentos",
      round: 1,
      correct: "propuesta_previa",
      prompt: "Según la metodología del Business Model Canvas, ¿qué paso se debe realizar antes de definir a losتوجهات العملاء?",
      options: [
        {
          id: "segmentos-1-a",
          conceptId: "propuesta_previa",
          text: "Comprender la propuesta de valor y los beneficios únicos del producto o servicio.",
          char: "nora"
        },
        {
          id: "segmentos-1-b",
          conceptId: "copiar_competencia",
          text: "Copiar exactamente el perfil de clientes que utiliza la competencia.",
          char: "aurelio",
          whyNot: "Imitar a otros impide crear una promesa única y distintiva en el mercado."
        },
        {
          id: "segmentos-1-c",
          conceptId: "suposicion_interna",
          text: "Invertir un presupuesto elevado en campañas publicitarias masivas.",
          char: "teo",
          whyNot: "Gastar sin definir el público objetivo genera un desperdicio de recursos."
        }
      ],
      explanation: "Saber con claridad qué problemas o necesidades resuelve tu solución permite identificar con mayor precisión a qué tipo de personas les aportará un valor real.",
      voices: {
        nora: {
          ok: "Correcto. Saber qué resuelves te permite identificar a quién le aporta valor real.",
          ko: "Esa no. Primero entendé qué ofrecés, después a quién se lo ofrecés."
        },
        teo: {
          ok: "Cierra. Sin propuesta clara, gastar en publicidad es tirar la plata.",
          ko: "No cierra. Definir el público antes que el gasto es la regla de oro."
        },
        aurelio: {
          ok: "Exacto. Conocer tu valor es el primer paso para conquistar tu mercado.",
          ko: "Un traspié. Copiar a la competencia es de cobardes, no de estrategas."
        }
      }
    },
    {
      id: "segmentos-2",
      roomId: "segmentos",
      round: 2,
      correct: "validacion_directa",
      prompt: "¿Cuál es la forma más valiosa de investigar y validar las necesidades de los clientes?",
      options: [
        {
          id: "segmentos-2-a",
          conceptId: "validacion_directa",
          text: "Salir a hablar directamente con los clientes y observar sus problemas reales.",
          char: "teo"
        },
        {
          id: "segmentos-2-b",
          conceptId: "suposicion_interna",
          text: "Asumir que los clientes potenciales tienen exactamente los mismos gustos que el emprendedor.",
          char: "aurelio",
          whyNot: "Proyectar los gustos personales sobre el cliente puede llevar a crear productos que nadie necesita."
        },
        {
          id: "segmentos-2-c",
          conceptId: "copiar_competencia",
          text: "Quedarse en la oficina adivinando el comportamiento del mercado sin consultar a nadie.",
          char: "nora",
          whyNot: "Trabajar únicamente con hipótesis internas sin validarlas aumenta el riesgo de fracaso."
        }
      ],
      explanation: "Interactuar de forma directa con los usuarios potenciales permite comprobar suposiciones en el mundo real y descubrir necesidades no satisfechas.",
      voices: {
        nora: {
          ok: "Correcto. Validar con usuarios reales es la única forma de aprender de verdad.",
          ko: "Esa no. Las hipótesis internas sin validar aumentan el riesgo de fracaso."
        },
        teo: {
          ok: "Cierra. Los datos reales del mercado valen más que mil suposiciones.",
          ko: "No cierra. Adivinar no es una estrategia, es un riesgo innecesario."
        },
        aurelio: {
          ok: "Exacto. El mercado está en la calle, no en tu escritorio.",
          ko: "Un traspié. Creer que todos piensan como vos es el camino al fracaso."
        }
      }
    },
    {
      id: "segmentos-3",
      roomId: "segmentos",
      round: 3,
      correct: "enfoque_segmento",
      prompt: "Al iniciar una idea de negocio, ¿cuál es la principal ventaja de concentrarse en un solo segmento de clientes con alto potencial?",
      options: [
        {
          id: "segmentos-3-a",
          conceptId: "enfoque_segmento",
          text: "Acelerar el desarrollo del negocio y capturar mercado sin dispersar esfuerzos.",
          char: "aurelio"
        },
        {
          id: "segmentos-3-b",
          conceptId: "suposicion_interna",
          text: "Evitar la necesidad de diseñar estrategias de marketing o comunicación.",
          char: "nora",
          whyNot: "Aunque se elija un grupo específico, sigue siendo imprescindible adaptar los mensajes para alcanzarlo."
        },
        {
          id: "segmentos-3-c",
          conceptId: "copiar_competencia",
          text: "Asegurar que las necesidades de los consumidores jamás vayan a cambiar con el tiempo.",
          char: "teo",
          whyNot: "Las preferencias del mercado evolucionan continuamente, la segmentación requiere ajustes constantes."
        }
      ],
      explanation: "Enfocar los recursos en un grupo prioritario permite validar hipótesis rápido, optimizar presupuestos y construir una base sólida para crecer.",
      voices: {
        nora: {
          ok: "Correcto. Enfocar recursos en un grupo prioritario construye una base sólida.",
          ko: "Esa no. Las preferencias del mercado evolucionan, hay que ajustarse siempre."
        },
        teo: {
          ok: "Cierra. Concentrar esfuerzos optimiza el presupuesto y acelera los resultados.",
          ko: "No cierra. Nada en el mercado es estático, la segmentación se ajusta."
        },
        aurelio: {
          ok: "Exacto. El enfoque es la clave para validar rápido y crecer con fuerza.",
          ko: "Un traspié. El marketing siempre es necesario, por más nicho que seas."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><circle cx=\"30\" cy=\"25\" r=\"8\" fill=\"none\" stroke=\"#1f7a8c\" stroke-width=\"2\"/><circle cx=\"30\" cy=\"25\" r=\"3\" fill=\"#1f7a8c\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><circle cx=\"22\" cy=\"28\" r=\"4\" fill=\"#6b7a8f\"/><rect x=\"18\" y=\"32\" width=\"8\" height=\"8\" fill=\"#6b7a8f\"/><circle cx=\"38\" cy=\"28\" r=\"4\" fill=\"#6b7a8f\"/><rect x=\"34\" y=\"32\" width=\"8\" height=\"8\" fill=\"#6b7a8f\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"15\" y=\"18\" width=\"30\" height=\"25\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"26\" r=\"6\" fill=\"#f2cfa6\"/><path d=\"M20 38q10-8 20 0\" fill=\"#1f7a8c\"/><rect x=\"38\" y=\"20\" width=\"4\" height=\"4\" fill=\"#e0a526\"/>"
  ]
};
