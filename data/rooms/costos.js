export default {
  id: "costos",
  wall: [
    "#cfc8b6",
    "#e8d8c8",
    "#d4c0a8",
    "#c0a888"
  ],
  intro: "Acá anotamos todo lo que le cuesta al negocio funcionar. Pensá en un kiosco: el alquiler del local y la luz se pagan igual vendas mucho o poco (costos fijos), pero los caramelos que comprás para revender dependen de cuántos vendas (costos variables).",
  concepts: {
    costos_fijos_definicion: "Son gastos que la empresa debe pagar regularmente, sin importar si vende mucho o poco.",
    ingresos_clientes: "Es todo el dinero que los clientes entregan a la tienda cuando compran un producto.",
    promociones_descuentos: "Son los regalos y descuentos que el dueño decide dar a sus clientes favoritos.",
    costos_fijos_ejemplo: "El pago mensual del alquiler del local comercial.",
    ingresos_caja: "El cobro en la caja registradora cuando un cliente compra un pantalón.",
    costos_variables_tela: "La compra de tela adicional para confeccionar más prendas.",
    costos_variables: "Los costos variables, porque se necesitan más materiales a medida que se produce más.",
    canales_distribucion: "Los canales de distribución, porque los ingredientes transportan el sabor al cliente.",
    costos_fijos_falso: "Los costos fijos, porque la renta de la tienda sube automáticamente si se hornea más."
  },
  questions: [
    {
      id: "costos-1",
      roomId: "costos",
      round: 1,
      correct: "costos_fijos_definicion",
      prompt: "¿Qué son los \"costos fijos\" en un negocio o empresa?",
      options: [
        {
          id: "costos-1-a",
          conceptId: "ingresos_clientes",
          text: "Es todo el dinero que los clientes entregan a la tienda cuando compran un producto.",
          char: "teo",
          whyNot: "El dinero que ingresa por las compras de los clientes constituye el flujo de ingresos, no un costo."
        },
        {
          id: "costos-1-b",
          conceptId: "promociones_descuentos",
          text: "Son los regalos y descuentos que el dueño decide dar a sus clientes favoritos.",
          char: "aurelio",
          whyNot: "Las promociones o descuentos forman parte de estrategias comerciales y no definen la categoría de costos fijos operacionales."
        },
        {
          id: "costos-1-c",
          conceptId: "costos_fijos_definicion",
          text: "Son gastos que la empresa debe pagar regularmente, sin importar si vende mucho o poco.",
          char: "nora"
        }
      ],
      explanation: "Los costos fijos se mantienen constantes independientemente del volumen de producción o ventas realizado por la empresa.",
      voices: {
        nora: {
          ok: "Correcto. Son gastos constantes, vendas mucho o poco. La claridad siempre gana.",
          ko: "Esa no. Los ingresos o descuentos no son costos fijos. Leé con atención."
        },
        teo: {
          ok: "Cierra. Los gastos fijos son la base del punto de equilibrio. Así cierran las cuentas.",
          ko: "No cierra. El dinero que entra es ingreso, no costo. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Conocer tus costos fijos te permite saber cuánto necesitas vender para ganar. Esa es la jugada maestra.",
          ko: "Un traspié. Los descuentos son estrategia, no costos operativos fijos. Aprendé la diferencia."
        }
      }
    },
    {
      id: "costos-2",
      roomId: "costos",
      round: 2,
      correct: "costos_fijos_ejemplo",
      prompt: "¿Cuál de las siguientes opciones es un ejemplo de costo fijo para una tienda de ropa?",
      options: [
        {
          id: "costos-2-a",
          conceptId: "ingresos_caja",
          text: "El cobro en la caja registradora cuando un cliente compra un pantalón.",
          char: "nora",
          whyNot: "El dinero recibido en caja por una venta representa una entrada de ingresos para la tienda, no un gasto."
        },
        {
          id: "costos-2-b",
          conceptId: "costos_variables_tela",
          text: "La compra de tela adicional para confeccionar más prendas.",
          char: "teo",
          whyNot: "El gasto en telas varía según la cantidad de ropa que se planee confeccionar, por lo que es un costo variable."
        },
        {
          id: "costos-2-c",
          conceptId: "costos_fijos_ejemplo",
          text: "El pago mensual del alquiler del local comercial.",
          char: "aurelio"
        }
      ],
      explanation: "La renta del espacio físico es un compromiso de pago periódico de valor constante, independientemente de las ventas logradas.",
      voices: {
        nora: {
          ok: "Correcto. El alquiler se paga igual, vendas o no. La claridad siempre gana.",
          ko: "Esa no. El cobro en caja es un ingreso, no un gasto. Leé con atención."
        },
        teo: {
          ok: "Cierra. El alquiler es un monto fijo mensual, fácil de presupuestar. Así cierran las cuentas.",
          ko: "No cierra. La tela se compra según la producción, eso es variable. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. El techo sobre tu cabeza es tu costo fijo más predecible. Esa es la jugada maestra.",
          ko: "Un traspié. La tela es un costo que sube y baja con la producción. Aprendé la diferencia."
        }
      }
    },
    {
      id: "costos-3",
      roomId: "costos",
      round: 3,
      correct: "costos_variables",
      prompt: "Si una pastelería decide preparar y vender el doble de pasteles este mes, ¿qué tipo de costo aumentará al comprar más harina y huevos?",
      options: [
        {
          id: "costos-3-a",
          conceptId: "canales_distribucion",
          text: "Los canales de distribución, porque los ingredientes transportan el sabor al cliente.",
          char: "aurelio",
          whyNot: "Los ingredientes son insumos o materias primas de producción, mientras que los canales son las vías para hacer llegar el producto final al cliente."
        },
        {
          id: "costos-3-b",
          conceptId: "costos_fijos_falso",
          text: "Los costos fijos, porque la renta de la tienda sube automáticamente si se hornea más.",
          char: "nora",
          whyNot: "El precio del alquiler del local suele ser fijo y no cambia en función de cuántos pasteles se horneen en el mes."
        },
        {
          id: "costos-3-c",
          conceptId: "costos_variables",
          text: "Los costos variables, porque se necesitan más materiales a medida que se produce más.",
          char: "teo"
        }
      ],
      explanation: "Los costos variables dependen directamente de la cantidad de bienes o servicios que la empresa elabora o vende.",
      voices: {
        nora: {
          ok: "Correcto. Más producción requiere más insumos, eso es variable. La claridad siempre gana.",
          ko: "Esa no. El alquiler no sube por hornear más pasteles. Leé con atención."
        },
        teo: {
          ok: "Cierra. Si producís el doble, el gasto en materia prima se duplica. Así cierran las cuentas.",
          ko: "No cierra. Los canales son para entregar, no son el costo de la harina. Revisá los números."
        },
        aurelio: {
          ok: "Exacto. Escalar la producción escala los costos variables, pero el margen se mantiene. Esa es la jugada maestra.",
          ko: "Un traspié. Confundir insumos con canales de entrega es un error de novato. Aprendé la diferencia."
        }
      }
    }
  ],
  decor: [
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#a89b86\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#a89b86\"/>",
    "<rect x=\"20\" y=\"35\" width=\"20\" height=\"2\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"36\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"24\" y=\"28\" width=\"12\" height=\"8\" fill=\"#6b7a8f\" stroke=\"#17212b\" stroke-width=\"1\"/><circle cx=\"27\" cy=\"31\" r=\"1.5\" fill=\"#fff\"/><circle cx=\"31\" cy=\"31\" r=\"1.5\" fill=\"#fff\"/><circle cx=\"35\" cy=\"31\" r=\"1.5\" fill=\"#fff\"/>",
    "<rect x=\"18\" y=\"34\" width=\"24\" height=\"3\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"38\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"22\" y=\"26\" width=\"16\" height=\"10\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1\"/><path d=\"M25 29h10M25 31h8M25 33h10\" stroke=\"#1f7a8c\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"30\" r=\"3\" fill=\"#e0a526\"/>",
    "<rect x=\"16\" y=\"33\" width=\"28\" height=\"4\" fill=\"#8b6b4a\"/><rect x=\"18\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"40\" y=\"37\" width=\"2\" height=\"8\" fill=\"#8b6b4a\"/><rect x=\"20\" y=\"24\" width=\"20\" height=\"12\" fill=\"#fff\" stroke=\"#17212b\" stroke-width=\"1.5\"/><path d=\"M23 28l4 4 6-6\" stroke=\"#2e7d32\" stroke-width=\"2\" fill=\"none\"/><rect x=\"24\" y=\"38\" width=\"4\" height=\"2\" fill=\"#e0a526\"/><rect x=\"32\" y=\"38\" width=\"4\" height=\"2\" fill=\"#e0a526\"/>"
  ]
};
