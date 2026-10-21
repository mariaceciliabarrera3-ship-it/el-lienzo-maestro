export const SCENARIO = {
  "schemaVersion": 2,
  "id": "cafe-movil-base-v4.1",
  "title": "El Lienzo Maestro: La Incubadora",
  "subtitle": "Una historia de barrio para aprender a pensar un negocio",
  "targetDurationMinutes": 25,
  "durationStatus": "META A VALIDAR CON USUARIOS; NO ES UNA MEDICIÓN REAL",
  "blocks": [
    {
      "id": "segments",
      "name": "Segmentos de clientes",
      "short": "¿Para quién?",
      "question": "¿Quién tiene el problema que querés resolver?",
      "lesson": "No alcanza con decir «todo el mundo». Elegí un grupo que puedas describir y observar.",
      "clue": "Pensá en quién necesita la solución, cuándo la necesita y cómo resuelve hoy ese problema.",
      "more": "Un segmento reúne personas u organizaciones con necesidades o comportamientos relevantes en común. Es una hipótesis hasta que la contrastás con personas reales.",
      "prompt": "¿A quién vas a observar primero?"
    },
    {
      "id": "value",
      "name": "Propuesta de valor",
      "short": "¿Qué mejora?",
      "question": "¿Qué problema o deseo atendés de forma concreta?",
      "lesson": "La propuesta de valor explica por qué alguien podría elegirte. No es una lista de características.",
      "clue": "Describí el cambio que la persona espera obtener, no solamente lo que vendés.",
      "more": "Una propuesta útil conecta una necesidad concreta con un resultado reconocible. La evidencia inicial puede ser una conversación, una prueba o una compra; cada una demuestra cosas distintas.",
      "prompt": "¿Qué mejora prometés y cómo lo vas a comprobar?"
    },
    {
      "id": "revenue",
      "name": "Fuentes de ingresos",
      "short": "¿Por qué paga?",
      "question": "¿Qué paga el cliente y cuándo entra el dinero?",
      "lesson": "Una venta no equivale automáticamente a ganancia. Separá precio, ingreso y margen.",
      "clue": "Preguntate cuánto, por qué, cuándo y con qué frecuencia paga alguien.",
      "more": "Puede haber venta unitaria, suscripción, comisión u otros mecanismos. El mecanismo debe ser comprensible para el cliente y compatible con los costos.",
      "prompt": "¿Qué vas a cobrar y qué dato falta medir?"
    },
    {
      "id": "partners",
      "name": "Socios clave",
      "short": "¿Con quién?",
      "question": "¿Qué terceros te ayudan o condicionan?",
      "lesson": "Un socio puede aportar capacidad, acceso, conocimiento o continuidad.",
      "clue": "Identificá qué dependencias tenés y qué pasa si una falla.",
      "more": "No toda compra convierte a un proveedor en socio estratégico. Evaluá dependencia, alternativas, acuerdos y riesgos compartidos.",
      "prompt": "¿Qué dependencia conviene reducir o negociar?"
    },
    {
      "id": "resources",
      "name": "Recursos clave",
      "short": "¿Qué necesitás?",
      "question": "¿Qué recursos son imprescindibles para cumplir la promesa?",
      "lesson": "Los recursos pueden ser físicos, humanos, financieros, intelectuales o digitales.",
      "clue": "Separá lo imprescindible de lo deseable para la primera prueba.",
      "more": "Un recurso es clave cuando su ausencia impide entregar la propuesta de valor. También puede ser alquilado, compartido o aportado por un socio.",
      "prompt": "¿Qué recurso limita tu capacidad hoy?"
    },
    {
      "id": "activities",
      "name": "Actividades clave",
      "short": "¿Qué hacés?",
      "question": "¿Qué acciones deben salir bien de manera repetida?",
      "lesson": "Las actividades son las tareas esenciales que hacen posible la propuesta.",
      "clue": "Nombrá acciones observables, no objetivos vagos como «crecer».",
      "more": "Preparar, vender, entregar, mantener calidad y registrar costos pueden ser actividades. Priorizá las que más afectan la experiencia del cliente.",
      "prompt": "¿Qué tarea no podés dejar librada al azar?"
    },
    {
      "id": "relationships",
      "name": "Relaciones con clientes",
      "short": "¿Cómo vuelve?",
      "question": "¿Qué tipo de trato y seguimiento espera el cliente?",
      "lesson": "La relación describe cómo atraés, atendés y sostenés el vínculo.",
      "clue": "Elegí una forma de atención que puedas mantener con los recursos disponibles.",
      "more": "La relación puede ser personal, automatizada, comunitaria o de autoservicio. Debe encajar con lo que valora el segmento y con tu capacidad real.",
      "prompt": "¿Qué experiencia querés que recuerde?"
    },
    {
      "id": "channels",
      "name": "Canales",
      "short": "¿Cómo llega?",
      "question": "¿Cómo te conoce, compra y recibe la oferta?",
      "lesson": "Un canal conecta el negocio con las personas: información, compra, entrega y atención.",
      "clue": "Seguí el recorrido completo desde que alguien se entera hasta que recibe lo prometido.",
      "more": "Los canales pueden ser directos o intermediados. Un canal atractivo en teoría no prueba que sea accesible o rentable en la práctica.",
      "prompt": "¿Qué canal vas a probar primero?"
    },
    {
      "id": "costs",
      "name": "Estructura de costos",
      "short": "¿Qué cuesta?",
      "question": "¿Qué costos aparecen al entregar la promesa?",
      "lesson": "Contá materiales, tiempo, entregas, comisiones y costos que suelen quedar ocultos.",
      "clue": "Medí antes de recortar: algunos gastos sostienen la calidad o la confianza.",
      "more": "Separá costos fijos y variables cuando tenga sentido. Una estimación inicial sirve para formular preguntas; no sustituye un registro real.",
      "prompt": "¿Qué costo necesitás medir primero?"
    }
  ],
  "openingNotes": [
    {
      "id": "note-01",
      "text": "En días de lluvia, varias oficinas piden café sin salir del edificio.",
      "answer": "segments",
      "explanation": "Describe quién podría necesitar la solución y en qué situación."
    },
    {
      "id": "note-02",
      "text": "Entregamos café recién preparado en la recepción, dentro de una franja acordada.",
      "answer": "value",
      "explanation": "Describe el beneficio que la oferta promete entregar."
    },
    {
      "id": "note-03",
      "text": "Para la primera semana, anotamos cada viaje, insumo y minuto de preparación.",
      "answer": "costs",
      "explanation": "Registra recursos consumidos y permite estimar costos."
    }
  ],
  "rounds": [
    {
      "id": 1,
      "title": "La oficina no te conoce",
      "blockId": "segments",
      "scene": "Café Móvil recibe consultas, pero no sabe qué tipo de oficina necesita más el servicio.",
      "prediction": {
        "question": "¿Qué dato ayudaría más a elegir el primer grupo de clientes?",
        "options": [
          "El color del logo que más gusta",
          "Cuántas personas podrían comprar y en qué horarios",
          "Abrir todas las zonas al mismo tiempo"
        ],
        "correct": 1,
        "feedback": "Empezar por un grupo observable permite contrastar la necesidad y el horario."
      },
      "choices": [
        {
          "text": "Ofrecer a cualquier persona de toda la ciudad",
          "delta": [
            -6,
            5,
            4
          ],
          "note": "Probar con todos los públicos de la ciudad",
          "evidence": "Todavía falta acotar quién necesita el servicio.",
          "consequence": "Un público demasiado amplio dificulta reconocer patrones y elegir dónde probar primero."
        },
        {
          "text": "Entrevistar a tres oficinas cercanas y registrar sus horarios",
          "delta": [
            6,
            -2,
            5
          ],
          "note": "Entrevistar oficinas cercanas y registrar horarios",
          "evidence": "Entrevistas iniciales; todavía no equivalen a demanda pagadora.",
          "consequence": "Las entrevistas acotan un segmento y producen preguntas concretas; aún no demuestran ventas."
        },
        {
          "text": "Elegir solo por intuición y lanzar una promoción",
          "delta": [
            3,
            -5,
            2
          ],
          "note": "Lanzar promoción basada en intuición",
          "evidence": "Hipótesis inicial sin validación documentada.",
          "consequence": "La promoción puede generar atención, pero no aclara quién necesita el servicio ni por qué."
        }
      ],
      "neighborhoodId": "segments",
      "neighborhoodName": "Segmentos de clientes",
      "characters": {
        "donSupuesto": {
          "advice": "¡Apuntemos a todo el mundo! Si el mundo es cliente, no hace falta elegir.",
          "laughWhenFall": "¡El mapa quedó tan grande que necesitamos otro mapa!",
          "grumbleWhenResist": "Bueno, elegir un grupo tiene cierta lógica… qué poco espectacular.",
          "partiallyRight": false
        },
        "nora": {
          "celebrate": "¡Bien! Acotaste a quién escuchar primero. Ahora falta comprobarlo.",
          "comfort": "No pasa nada: esta decisión dejó una pregunta que ahora podés investigar."
        }
      }
    },
    {
      "id": 2,
      "title": "¿Qué prometemos?",
      "blockId": "value",
      "scene": "Las oficinas quieren rapidez, pero también que el pedido llegue como se acordó.",
      "prediction": {
        "question": "¿Qué hace más comprobable una propuesta de valor?",
        "options": [
          "Definir una franja de entrega y registrar cumplimiento",
          "Prometer que será el mejor café de la ciudad",
          "Agregar más opciones sin hablar con clientes"
        ],
        "correct": 0,
        "feedback": "Una promesa concreta se puede contrastar con la experiencia real."
      },
      "choices": [
        {
          "text": "Prometer entrega inmediata siempre",
          "delta": [
            -6,
            5,
            4
          ],
          "note": "Prometer entrega inmediata siempre",
          "evidence": "La capacidad para cumplir esa promesa aún no fue medida.",
          "consequence": "Una promesa absoluta crea expectativas difíciles de sostener y medir."
        },
        {
          "text": "Definir una franja de entrega y medir puntualidad",
          "delta": [
            6,
            -2,
            5
          ],
          "note": "Definir franja y medir puntualidad",
          "evidence": "Registro de hora prometida y hora real por pedido.",
          "consequence": "Una franja y un registro convierten la promesa en algo comprobable."
        },
        {
          "text": "Ampliar el menú antes de validar la oferta",
          "delta": [
            3,
            -5,
            2
          ],
          "note": "Ampliar el menú antes de validar",
          "evidence": "No hay todavía evidencia de que la variedad sea la prioridad.",
          "consequence": "Sumar variedad puede elevar la complejidad antes de saber qué valora el cliente."
        }
      ],
      "neighborhoodId": "value",
      "neighborhoodName": "Propuesta de valor",
      "characters": {
        "donSupuesto": {
          "advice": "Prometamos rapidez infinita; el reloj seguro se adapta.",
          "laughWhenFall": "¡La promesa corre más rápido que la bici!",
          "grumbleWhenResist": "Medir puntualidad le quita misterio a mi promesa.",
          "partiallyRight": true
        },
        "nora": {
          "celebrate": "¡Buena! Una promesa medible permite aprender de lo que ocurre.",
          "comfort": "La promesa puede ajustarse; lo importante es aprender antes de repetirla."
        }
      }
    },
    {
      "id": 3,
      "title": "Primer pedido grande",
      "blockId": "revenue",
      "scene": "Una oficina quiere un pedido semanal, pero no registraste el costo completo por entrega.",
      "prediction": {
        "question": "Antes de aceptar, ¿qué conviene estimar?",
        "options": [
          "Solo el precio de los granos",
          "El número de seguidores de la cuenta",
          "Insumos, envases, tiempo y recorrido"
        ],
        "correct": 2,
        "feedback": "El precio por sí solo no muestra cuánto queda después de cumplir el pedido."
      },
      "choices": [
        {
          "text": "Aceptar el pedido sin calcular el costo completo",
          "delta": [
            4,
            -8,
            3
          ],
          "note": "Aceptar el pedido grande sin costearlo",
          "evidence": "Falta registrar insumos, envases, tiempo y recorrido.",
          "consequence": "Aceptar sin costear puede generar movimiento sin saber si deja margen."
        },
        {
          "text": "Calcular insumos, envases, tiempo y ruta antes de cotizar",
          "delta": [
            -1,
            5,
            8
          ],
          "note": "Calcular costo por pedido antes de cotizar",
          "evidence": "Planilla de insumos, tiempo, envases y distancia.",
          "sets": {
            "costeoHecho": true
          },
          "consequence": "El cálculo previo hace visible qué datos faltan para cotizar con criterio."
        },
        {
          "text": "Rechazar cualquier pedido grande por precaución",
          "delta": [
            5,
            1,
            -2
          ],
          "note": "Rechazar pedidos grandes por precaución",
          "evidence": "La decisión evita el riesgo, pero no genera datos sobre costos.",
          "consequence": "Rechazar evita un riesgo inmediato, pero también evita aprender sobre la oportunidad."
        }
      ],
      "neighborhoodId": "revenue",
      "neighborhoodName": "Fuentes de ingresos",
      "characters": {
        "donSupuesto": {
          "advice": "Si el pedido es grande, el dinero ya está ganado. ¿Qué podría salir mal?",
          "laughWhenFall": "¡Vendimos un montón de… incógnitas!",
          "grumbleWhenResist": "¡Costear antes! Qué manera de arruinar una sorpresa matemática.",
          "partiallyRight": true
        },
        "nora": {
          "celebrate": "¡Eso! Separaste el ingreso del costo de cumplir el pedido.",
          "comfort": "No es un fracaso: ahora sabemos qué costo falta medir."
        }
      }
    },
    {
      "id": 4,
      "title": "La bici no llega",
      "blockId": "partners",
      "scene": "El reparto habitual avisa que no podrá cubrir la franja acordada.",
      "prediction": {
        "question": "¿Qué preparación reduce el impacto de una falla externa?",
        "options": [
          "Confiar en que no volverá a ocurrir",
          "Tener una alternativa acordada y conocer su costo",
          "Prometer lo mismo y avisar después"
        ],
        "correct": 1,
        "feedback": "Una alternativa no elimina el riesgo; ayuda a decidir cómo responder."
      },
      "choices": [
        {
          "text": "Prometer igual y resolver sobre la marcha",
          "delta": [
            7,
            -7,
            1
          ],
          "note": "Resolver el reparto sobre la marcha",
          "evidence": "No hay alternativa acordada ni costo conocido.",
          "consequence": "Resolver sobre la marcha deja al cliente expuesto a cambios y al negocio sin plan B."
        },
        {
          "text": "Negociar una alternativa y un protocolo de aviso",
          "delta": [
            -2,
            5,
            7
          ],
          "note": "Negociar alternativa y protocolo de aviso",
          "evidence": "Acuerdo de contingencia pendiente de probar.",
          "consequence": "Una alternativa y un protocolo mejoran la continuidad; todavía hay que probarlos."
        },
        {
          "text": "Pagar cualquier reemplazo sin revisar el margen",
          "delta": [
            4,
            -3,
            5
          ],
          "note": "Pagar reemplazo sin revisar el margen",
          "evidence": "La continuidad mejora, pero el costo no fue evaluado.",
          "consequence": "Pagar cualquier reemplazo puede sostener la entrega y deteriorar el margen."
        }
      ],
      "neighborhoodId": "partners",
      "neighborhoodName": "Socios clave",
      "characters": {
        "donSupuesto": {
          "advice": "Un proveedor dijo que sí una vez: eso cuenta como plan de contingencia, ¿no?",
          "laughWhenFall": "¡El plan B era cruzar los dedos!",
          "grumbleWhenResist": "Un plan alternativo… admito que suena menos dramático.",
          "partiallyRight": true
        },
        "nora": {
          "celebrate": "¡Buen paso! Pensaste qué hacer si una pieza falla.",
          "comfort": "Un imprevisto no define el negocio; sí conviene preparar una respuesta."
        }
      }
    },
    {
      "id": 5,
      "title": "El café se termina",
      "blockId": "resources",
      "scene": "Una variedad popular se agota justo antes de una franja con varios pedidos.",
      "prediction": {
        "question": "¿Qué dato ayuda a decidir cuánto reponer?",
        "options": [
          "La opinión de una sola persona sin contexto",
          "Comprar la mayor cantidad posible",
          "Demanda observada y plazo del proveedor"
        ],
        "correct": 2,
        "feedback": "La reposición debe considerar demanda y plazo, no solo entusiasmo."
      },
      "choices": [
        {
          "text": "Comprar mucho stock para no volver a quedarse corto",
          "delta": [
            -6,
            4,
            4
          ],
          "note": "Comprar stock alto para evitar faltantes",
          "evidence": "No se conoce aún la rotación ni el riesgo de sobrante.",
          "consequence": "Comprar de más inmoviliza dinero y puede dejar stock sin salida."
        },
        {
          "text": "Registrar ventas, faltantes y plazo de reposición",
          "delta": [
            3,
            -4,
            8
          ],
          "note": "Medir ventas, faltantes y plazo de reposición",
          "evidence": "Registro diario de demanda y demora del proveedor.",
          "consequence": "Registrar ventas y plazos aporta una base para reponer con menos adivinación."
        },
        {
          "text": "Quitar la variedad sin avisar",
          "delta": [
            1,
            6,
            -2
          ],
          "note": "Quitar la variedad sin avisar",
          "evidence": "Reduce complejidad, pero puede incumplir expectativas.",
          "consequence": "Retirar una variedad simplifica el trabajo, pero puede frustrar una expectativa."
        }
      ],
      "neighborhoodId": "resources",
      "neighborhoodName": "Recursos clave",
      "characters": {
        "donSupuesto": {
          "advice": "Comprá de sobra. El depósito también puede ser una caja de sorpresas.",
          "laughWhenFall": "¡El depósito ya pide su propio alquiler!",
          "grumbleWhenResist": "Datos de ventas. Yo prefería una montaña de granos.",
          "partiallyRight": false
        },
        "nora": {
          "celebrate": "¡Excelente pregunta! Los registros ayudan a decidir cuánto reponer.",
          "comfort": "El faltante mostró qué dato conviene registrar la próxima vez."
        }
      }
    },
    {
      "id": 6,
      "title": "La hora punta",
      "blockId": "activities",
      "scene": "Se acumulan pedidos en una misma franja y la preparación empieza a demorarse.",
      "prediction": {
        "question": "¿Qué conviene medir antes de ampliar los pedidos?",
        "options": [
          "Cuántos pedidos puede preparar y entregar la operación",
          "Solo el número de mensajes recibidos",
          "Cuántas ideas nuevas se pueden agregar"
        ],
        "correct": 0,
        "feedback": "La capacidad real ayuda a prometer algo que el equipo pueda cumplir."
      },
      "choices": [
        {
          "text": "Aceptar todos los pedidos sin límite",
          "delta": [
            -7,
            6,
            2
          ],
          "note": "Aceptar pedidos sin límite",
          "evidence": "La capacidad por franja no está medida.",
          "consequence": "Aceptar todo puede desbordar la operación y erosionar la confianza."
        },
        {
          "text": "Limitar pedidos por franja y medir capacidad",
          "delta": [
            4,
            -2,
            8
          ],
          "note": "Limitar pedidos por franja y medir capacidad",
          "evidence": "Registro de tiempos, pedidos aceptados y entregas cumplidas.",
          "sets": {
            "capacidadMedida": true
          },
          "consequence": "Un límite por franja permite comparar capacidad prometida con capacidad real."
        },
        {
          "text": "Cancelar una franja sin avisar a los clientes",
          "delta": [
            3,
            -7,
            1
          ],
          "note": "Cancelar una franja sin aviso",
          "evidence": "Alivia carga inmediata pero daña la relación.",
          "consequence": "Cancelar sin aviso alivia la carga, pero traslada el costo al cliente."
        }
      ],
      "neighborhoodId": "activities",
      "neighborhoodName": "Actividades clave",
      "characters": {
        "donSupuesto": {
          "advice": "Aceptemos todo; los minutos se estiran cuando hay entusiasmo.",
          "laughWhenFall": "¡La agenda se anotó en una maratón!",
          "grumbleWhenResist": "Poner un límite… ¡la agenda no podrá presumir de agotamiento!",
          "partiallyRight": true
        },
        "nora": {
          "celebrate": "¡Bien visto! La capacidad también forma parte de la promesa.",
          "comfort": "La carga real dio una señal para organizar mejor las franjas."
        }
      }
    },
    {
      "id": 7,
      "title": "¿Cómo hacemos que vuelvan?",
      "blockId": "relationships",
      "scene": "Algunas oficinas repiten; otras no volvieron después de su primera compra.",
      "prediction": {
        "question": "¿Qué permite aprender por qué vuelven o no vuelven?",
        "options": [
          "Suponer que todos buscan lo mismo",
          "Cambiar toda la oferta al azar",
          "Pedir comentarios breves y revisar pedidos repetidos"
        ],
        "correct": 2,
        "feedback": "La repetición es una señal; preguntar y observar ayuda a entenderla."
      },
      "choices": [
        {
          "text": "Dar descuentos a todo el mundo sin medir el efecto",
          "delta": [
            -5,
            -2,
            4
          ],
          "note": "Descontar a todos sin medir el efecto",
          "evidence": "No se conoce el costo ni el efecto del descuento.",
          "consequence": "Descontar indiscriminadamente reduce ingresos sin revelar qué impulsa la repetición."
        },
        {
          "text": "Preguntar por la experiencia y registrar repetición",
          "delta": [
            4,
            -1,
            4
          ],
          "note": "Preguntar y registrar pedidos repetidos",
          "evidence": "Comentarios breves y registro de recurrencia.",
          "consequence": "Preguntar y registrar recurrencia ayuda a distinguir una anécdota de un patrón."
        },
        {
          "text": "Cambiar el servicio entero por una queja aislada",
          "delta": [
            2,
            7,
            -4
          ],
          "note": "Cambiar todo por una sola queja",
          "evidence": "La queja merece atención, pero no representa necesariamente a todos.",
          "consequence": "Cambiar todo por una queja puede corregir un caso y perjudicar a otros."
        }
      ],
      "neighborhoodId": "relationships",
      "neighborhoodName": "Relaciones con clientes",
      "characters": {
        "donSupuesto": {
          "advice": "Un descuento para todos: ¡así nadie se siente excluido del descuento!",
          "laughWhenFall": "¡Descuento, descuento… y el margen de vacaciones!",
          "grumbleWhenResist": "Preguntar antes de cambiar todo. Qué fastidio, la gente tiene matices.",
          "partiallyRight": true
        },
        "nora": {
          "celebrate": "¡Eso ayuda! Escuchar y registrar vale más que adivinar por qué vuelven.",
          "comfort": "Una queja importa, pero podemos contrastarla con más experiencias."
        }
      }
    },
    {
      "id": 8,
      "title": "El pedido llega a la puerta",
      "blockId": "channels",
      "scene": "Las oficinas interesadas no saben cómo pedir ni dónde recibir el café. El canal debe ser sencillo para ellas y sostenible para Café Móvil.",
      "prediction": {
        "question": "¿Qué conviene probar primero para que el pedido llegue sin confusiones?",
        "options": [
          "Elegir un canal accesible y registrar pedidos completados",
          "Abrir muchos canales a la vez",
          "Esperar que cada cliente invente su propio método"
        ],
        "correct": 0,
        "feedback": "Un canal se evalúa por el recorrido real: conocer, pedir, recibir y resolver dudas."
      },
      "choices": [
        {
          "text": "Abrir todos los canales de inmediato",
          "delta": [
            -3,
            -5,
            3
          ],
          "note": "Abrir múltiples canales sin priorizar",
          "evidence": "Hipótesis de alcance; aún no se midió el esfuerzo de atender cada canal.",
          "consequence": "Multiplicar canales sin priorizar puede dispersar la atención y perder pedidos."
        },
        {
          "text": "Probar un canal principal con un registro claro de pedido y entrega",
          "delta": [
            5,
            -4,
            1
          ],
          "note": "Probar un canal principal de pedido y entrega",
          "evidence": "Registro de canal, pedidos recibidos, entregados y consultas sin resolver.",
          "consequence": "Un canal principal medido permite detectar fallas del recorrido y aprender antes de expandir."
        },
        {
          "text": "Depender solo de recomendaciones informales",
          "delta": [
            2,
            4,
            1
          ],
          "note": "Depender de recomendaciones informales",
          "evidence": "Puede atraer consultas, pero todavía no hay un proceso repetible de pedido.",
          "consequence": "Las recomendaciones aportan confianza, pero no garantizan un proceso repetible."
        }
      ],
      "neighborhoodId": "channels",
      "neighborhoodName": "Canales",
      "characters": {
        "donSupuesto": {
          "advice": "Abramos todos los canales. ¿Quién necesita encontrar los mensajes después?",
          "laughWhenFall": "¡El pedido se escondió entre los canales!",
          "grumbleWhenResist": "Un canal claro. Ahora mis mensajes perdidos tendrán que buscar otro trabajo.",
          "partiallyRight": true
        },
        "nora": {
          "celebrate": "¡Bien! Un recorrido de pedido claro se puede observar y mejorar.",
          "comfort": "Si se perdió un pedido, podemos reconstruir en qué paso ocurrió."
        }
      }
    },
    {
      "id": 9,
      "title": "Balance del primer ciclo",
      "blockId": "costs",
      "scene": "Después de varias semanas, hay datos nuevos y decisiones que conviene revisar antes de crecer.",
      "prediction": {
        "question": "¿Qué permite decidir con más fundamento el siguiente paso?",
        "options": [
          "Expandirse para no perder impulso",
          "Revisar evidencia, capacidad y costos en conjunto",
          "Recortar cualquier gasto por igual"
        ],
        "correct": 1,
        "feedback": "Una decisión de siguiente etapa necesita mirar la propuesta, la capacidad y el costo juntos."
      },
      "choices": [
        {
          "text": "Expandir la zona antes de medir capacidad",
          "delta": [
            -3,
            -8,
            4
          ],
          "note": "Expandir antes de medir capacidad",
          "evidence": "La expansión aún no está respaldada por datos de capacidad.",
          "penaltyIf": {
            "flag": "capacidadMedida",
            "is": false,
            "delta": [
              -4,
              -4,
              -2
            ],
            "reason": "La expansión aumenta el alcance, pero todavía falta comprobar la capacidad para cumplir la promesa."
          },
          "consequence": "Expandirse sin medir capacidad puede convertir el crecimiento en incumplimientos."
        },
        {
          "text": "Revisar el Canvas y probar una mejora en pequeño",
          "delta": [
            3,
            -2,
            8
          ],
          "note": "Revisar Canvas y probar una mejora pequeña",
          "evidence": "Plan de prueba con hipótesis, evidencia y fecha de revisión.",
          "consequence": "Revisar el Canvas y probar una mejora pequeña genera evidencia para el siguiente ciclo."
        },
        {
          "text": "Recortar gastos sin medir qué sostienen",
          "delta": [
            -6,
            7,
            -1
          ],
          "note": "Recortar gastos sin medir su función",
          "evidence": "Puede mejorar caja a corto plazo y debilitar la propuesta.",
          "penaltyIf": {
            "flag": "costeoHecho",
            "is": false,
            "delta": [
              -2,
              1,
              -2
            ],
            "reason": "El recorte puede aliviar la caja, pero sin costeo previo no sabés si quitaste algo esencial."
          },
          "consequence": "Recortar sin saber qué sostiene cada gasto puede dañar calidad o confianza."
        }
      ],
      "neighborhoodId": "costs",
      "neighborhoodName": "Estructura de costos",
      "characters": {
        "donSupuesto": {
          "advice": "Recortemos parejo: la tijera no tiene favoritos.",
          "laughWhenFall": "¡Recortamos hasta la etiqueta de “frágil”!",
          "grumbleWhenResist": "Medir antes de cortar. La tijera tendrá que esperar su turno.",
          "partiallyRight": false
        },
        "nora": {
          "celebrate": "¡Buen cierre! Una mejora pequeña puede generar evidencia útil.",
          "comfort": "Revisar una decisión no borra el esfuerzo; lo convierte en aprendizaje."
        }
      }
    }
  ],
  "board": {
    "type": "circular",
    "movement": "die selects one special-space result in the next segment; decision order remains fixed",
    "startLabel": "Inicio / ingresos y costos del ciclo",
    "segments": [
      {
        "fromNeighborhood": "Inicio",
        "toNeighborhood": "segments",
        "spaces": [
          {
            "id": "1-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "1-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "1-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "1-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "segments",
        "toNeighborhood": "value",
        "spaces": [
          {
            "id": "2-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "2-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "2-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "2-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "value",
        "toNeighborhood": "revenue",
        "spaces": [
          {
            "id": "3-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "3-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "3-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "3-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "revenue",
        "toNeighborhood": "partners",
        "spaces": [
          {
            "id": "4-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "4-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "4-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "4-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "partners",
        "toNeighborhood": "resources",
        "spaces": [
          {
            "id": "5-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "5-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "5-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "5-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "resources",
        "toNeighborhood": "activities",
        "spaces": [
          {
            "id": "6-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "6-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "6-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "6-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "activities",
        "toNeighborhood": "relationships",
        "spaces": [
          {
            "id": "7-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "7-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "7-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "7-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "relationships",
        "toNeighborhood": "channels",
        "spaces": [
          {
            "id": "8-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "8-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "8-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "8-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      },
      {
        "fromNeighborhood": "channels",
        "toNeighborhood": "costs",
        "spaces": [
          {
            "id": "9-tito",
            "type": "tito",
            "weight": 2
          },
          {
            "id": "9-note",
            "type": "note",
            "weight": 1
          },
          {
            "id": "9-nora",
            "type": "nora",
            "weight": 1
          },
          {
            "id": "9-niebla",
            "type": "fog",
            "weight": 1
          }
        ],
        "spaceCount": 5
      }
    ],
    "repeatRule": "Una casilla de mazo ya agotado se sustituye por Nora; no se vuelve a sacar carta agotada hasta barajar el descarte.",
    "limits": {
      "titoMaxPerGame": 2,
      "indicatorDeltaPerEvent": 3,
      "indicatorFloor": 0,
      "indicatorCeiling": 100,
      "skipDecisions": false,
      "forceFinish": false
    }
  },
  "decks": {
    "relampago": [
      {
            "id": "nota-01",
            "title": "El pedido repetido",
            "text": "Tres oficinas pequeñas hacen pedidos cada lunes; el equipo decide empezar ofreciendo el servicio a ese grupo.",
            "answerBlockId": "segments",
            "explanation": "El grupo inicial se define por un patrón compartido de necesidad y frecuencia; describe a quién se atenderá primero."
      },
      {
            "id": "nota-02",
            "title": "La promesa de entrega",
            "text": "La oferta promete entregar el almuerzo en menos de veinte minutos desde que se confirma el pedido.",
            "answerBlockId": "value",
            "explanation": "La frase describe el resultado concreto que la oferta promete al cliente."
      },
      {
            "id": "nota-03",
            "title": "Cobro por entrega",
            "text": "Cada pedido se cobra por unidad entregada y el dinero se recibe al finalizar cada entrega.",
            "answerBlockId": "revenue",
            "explanation": "Se especifica el mecanismo de cobro y el momento en que ingresa el dinero."
      },
      {
            "id": "nota-04",
            "title": "El proveedor de envases",
            "text": "Un comercio local suministrará los recipientes necesarios para preparar los pedidos.",
            "answerBlockId": "partners",
            "explanation": "La situación describe una organización externa que aporta suministro al negocio."
      },
      {
            "id": "nota-05",
            "title": "La bicicleta disponible",
            "text": "El emprendimiento cuenta con una bicicleta de carga que utiliza para repartir los pedidos.",
            "answerBlockId": "resources",
            "explanation": "La bicicleta es un activo disponible que permite operar el servicio."
      },
      {
            "id": "nota-06",
            "title": "Preparación por tandas",
            "text": "Cada mañana el equipo agrupa los pedidos, prepara las bolsas y verifica que no falte ningún producto.",
            "answerBlockId": "activities",
            "explanation": "Se enumeran tareas recurrentes que el equipo debe ejecutar para operar."
      },
      {
            "id": "nota-07",
            "title": "Seguimiento del reclamo",
            "text": "Después de resolver un reclamo, una persona escribe al cliente para confirmar que la solución funcionó.",
            "answerBlockId": "relationships",
            "explanation": "La acción describe cómo se mantiene y cuida la relación con el cliente después de una incidencia."
      },
      {
            "id": "nota-08",
            "title": "Pedidos por mensajería",
            "text": "Los clientes pueden hacer sus pedidos mediante el canal de mensajería que el negocio atiende a diario.",
            "answerBlockId": "channels",
            "explanation": "Se identifica la vía concreta por la que el cliente conoce o solicita el servicio."
      },
      {
            "id": "nota-09",
            "title": "Costo de mantenimiento",
            "text": "El negocio registra el importe mensual que paga por mantener la bicicleta en condiciones de uso.",
            "answerBlockId": "costs",
            "explanation": "Se trata de un gasto necesario para sostener la operación."
      },
      {
            "id": "nota-10",
            "title": "Preferencia observada",
            "text": "En entrevistas, un grupo de oficinas explica que necesita recibir el almuerzo antes de su pausa breve.",
            "answerBlockId": "segments",
            "explanation": "La información delimita un grupo a partir de una necesidad y contexto de uso compartidos."
      },
      {
            "id": "nota-11",
            "title": "Envase retornable",
            "text": "La oferta permite devolver el recipiente y recibir el pedido siguiente en un envase limpio.",
            "answerBlockId": "value",
            "explanation": "La característica se presenta como un beneficio concreto para el cliente: reutilización y continuidad del servicio."
      },
      {
            "id": "nota-12",
            "title": "Plan mensual",
            "text": "Algunas oficinas acuerdan pagar una suma fija al comienzo de cada mes por un número definido de entregas.",
            "answerBlockId": "revenue",
            "explanation": "La situación define un modelo de ingreso mediante pago periódico por un paquete de entregas."
      }
],
    "niebla": [
      {
            "id": "niebla-01",
            "title": "¿Cómo probarías esta hipótesis?",
            "hypothesis": "Las oficinas cercanas pedirán almuerzos al menos dos veces por semana.",
            "noraHint": "Podrías conversar con oficinas de distintos tamaños y registrar pedidos reales o compromisos concretos durante una semana."
      },
      {
            "id": "niebla-02",
            "title": "¿Cómo probarías esta hipótesis?",
            "hypothesis": "Entregar en menos de veinte minutos es una mejora importante para los clientes.",
            "noraHint": "Compará tiempos reales de entrega y preguntá a los clientes qué diferencia hace ese tiempo en su jornada."
      },
      {
            "id": "niebla-03",
            "title": "¿Cómo probarías esta hipótesis?",
            "hypothesis": "Un plan mensual hará que los ingresos sean más previsibles.",
            "noraHint": "Ofrecé una prueba pequeña del plan y compará pagos confirmados, renovaciones y cancelaciones con pedidos sueltos."
      },
      {
            "id": "niebla-04",
            "title": "¿Cómo probarías esta hipótesis?",
            "hypothesis": "Un proveedor alternativo podrá entregar los envases cuando el habitual no tenga stock.",
            "noraHint": "Consultá disponibilidad, plazo y precio con el proveedor alternativo y verificá una entrega de prueba."
      },
      {
            "id": "niebla-05",
            "title": "¿Cómo probarías esta hipótesis?",
            "hypothesis": "Los clientes volverán a pedir si reciben un mensaje de seguimiento después de la entrega.",
            "noraHint": "Probá el seguimiento con un grupo pequeño y compará la tasa de repetición con un grupo similar sin ese mensaje."
      }
],
    "tito": [
      {
        "id": "tito-1",
        "title": "Cambio de clima",
        "text": "La lluvia obliga a proteger los envases.",
        "effect": {
          "delta": [
            0,
            -2,
            1
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-2",
        "title": "Pedido compartido",
        "text": "Dos oficinas preguntan por una entrega conjunta.",
        "effect": {
          "delta": [
            2,
            1,
            1
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-3",
        "title": "Bici pinchada",
        "text": "El reparto se demora; toca avisar.",
        "effect": {
          "delta": [
            -2,
            -1,
            1
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-4",
        "title": "Vecina recomendadora",
        "text": "Una clienta recomienda el servicio en otra oficina.",
        "effect": {
          "delta": [
            2,
            1,
            0
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-5",
        "title": "Precio del insumo",
        "text": "Un insumo sube levemente esta semana.",
        "effect": {
          "delta": [
            0,
            -2,
            0
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-6",
        "title": "Fila en recepción",
        "text": "La recepción pide ordenar mejor las entregas.",
        "effect": {
          "delta": [
            -1,
            0,
            2
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-7",
        "title": "Mensaje duplicado",
        "text": "Llegó dos veces el mismo pedido; revisá el registro.",
        "effect": {
          "delta": [
            0,
            -1,
            2
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-8",
        "title": "Proveedor cumplidor",
        "text": "El proveedor confirma el horario acordado.",
        "effect": {
          "delta": [
            1,
            0,
            1
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-9",
        "title": "Oficina cerrada",
        "text": "Una entrega debe reprogramarse con aviso.",
        "effect": {
          "delta": [
            -1,
            -1,
            1
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-10",
        "title": "Termo prestado",
        "text": "Un comercio vecino presta un termo para una prueba.",
        "effect": {
          "delta": [
            1,
            1,
            0
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-11",
        "title": "Demanda irregular",
        "text": "Hoy hay menos pedidos de lo esperado.",
        "effect": {
          "delta": [
            0,
            -2,
            1
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      },
      {
        "id": "tito-12",
        "title": "Comentario útil",
        "text": "Una clienta explica qué parte del servicio valora.",
        "effect": {
          "delta": [
            1,
            0,
            2
          ]
        },
        "limit": "Aplicar una sola vez; delta por indicador entre -3 y +3; nunca omite ni bloquea una decisión."
      }
    ],
    "nora": [
      {
        "id": "nora-1",
        "title": "Pregunta de Nora",
        "text": "¿Qué dato podrías observar esta semana para distinguir una suposición de una señal?",
        "effect": {
          "learning": 1
        }
      },
      {
        "id": "nora-2",
        "title": "Pista de Nora",
        "text": "Seguí el recorrido del cliente desde que conoce la oferta hasta que la recibe.",
        "effect": {
          "learning": 1
        }
      },
      {
        "id": "nora-3",
        "title": "Pausa amable",
        "text": "Nombrá una duda y una forma pequeña de comprobarla.",
        "effect": {
          "learning": 1
        }
      },
      {
        "id": "nora-4",
        "title": "Mirada de barrio",
        "text": "¿A quién podrías preguntarle sin prometerle nada todavía?",
        "effect": {
          "learning": 1
        }
      }
,
      {
              "id": "nora-5",
              "title": "Un paso posible",
              "text": "No hace falta resolver todo hoy. Elegí una acción pequeña que puedas observar.",
              "warmPhrase": "Un paso pequeño también cuenta; lo importante es que te dé información.",
              "effect": {
                      "learning": 1
              }
      },
      {
              "id": "nora-6",
              "title": "Duda útil",
              "text": "¿Qué parte de tu idea todavía necesita una respuesta del mundo real?",
              "warmPhrase": "Tener una duda no te atrasa: puede ayudarte a elegir qué comprobar primero.",
              "effect": {
                      "learning": 1
              }
      },
      {
              "id": "nora-7",
              "title": "Escuchar sin adivinar",
              "text": "¿Qué podrías preguntarle a una persona para conocer su experiencia sin sugerirle la respuesta?",
              "warmPhrase": "Escuchar con curiosidad deja espacio para una respuesta que no esperabas.",
              "effect": {
                      "learning": 1
              }
      },
      {
              "id": "nora-8",
              "title": "Aprender del ensayo",
              "text": "Si la prueba no sale como esperabas, ¿qué dato conservarías para el siguiente intento?",
              "warmPhrase": "Un resultado distinto del esperado también puede servirte para decidir mejor.",
              "effect": {
                      "learning": 1
              }
      },
      {
              "id": "nora-9",
              "title": "Reconocer el avance",
              "text": "Nombrá algo que ahora entendés mejor que al comienzo de la partida.",
              "warmPhrase": "Podés reconocer lo que aprendiste sin exigir que todo esté terminado.",
              "effect": {
                      "learning": 1
              }
      }
    ]
  },
  "characterDefinitions": {
    "nora": {
      "role": "guía de aprendizaje",
      "tone": "cálido, pregunta antes de juzgar"
    },
    "donSupuesto": {
      "role": "antagonista cómico de los atajos",
      "tone": "se burla del plan, nunca de la persona; a veces acierta parcialmente"
    },
    "tito": {
      "role": "mensajero neutral de imprevistos",
      "tone": "eventos acotados, sin bloquear decisiones"
    }
  },
  "tabletop": {
    "players": {
      "min": 1,
      "max": 4,
      "mode": "individual o equipos"
    },
    "components": [
      "tablero circular imprimible",
      "1 ficha por persona/equipo",
      "un dado de seis caras",
      "mazo de 12 eventos de Tito",
      "mazo de cartas de Nora",
      "27 cartas de decisión (3 por barrio)",
      "hoja Canvas por equipo",
      "lápiz y papel para puntaje"
    ],
    "setup": [
      "Colocar los nueve barrios en el orden de las rondas.",
      "Separar y barajar los mazos de Tito y Nora.",
      "Cada equipo inicia con Confianza 5, Caja 5 y Aprendizaje 0 (escala 0–10).",
      "Elegir modo dinámico o manual; el modo manual conserva el orden fijo."
    ],
    "turn": [
      "Mover la ficha por el tramo entre barrios según el dado; el resultado selecciona una casilla especial, no cambia el barrio de decisión.",
      "Resolver la casilla: Tito, nota relámpago, pista de Nora o Niebla.",
      "Antes de revelar la explicación, cada equipo registra su predicción.",
      "Elegir una de las tres decisiones y anotar la consecuencia indicada.",
      "Completar una nota y una evidencia en el bloque del Canvas."
    ],
    "score": {
      "scale": "0–10 por indicador; sumar deltas impresos y limitar cada indicador entre 0 y 10",
      "rank": "Unicornio: total >= 26 y cada indicador >= 7; Rumbo claro: total >= 24; En marcha: total >= 20; si no, Primeras pedaleadas",
      "warning": "Equilibrio de mesa distinto al digital; requiere validación separada."
    }
  },
  "validation": {
    "blockOrder": [
      "segments",
      "value",
      "revenue",
      "partners",
      "resources",
      "activities",
      "relationships",
      "channels",
      "costs"
    ],
    "predictionCorrectPositions": [
      1,
      0,
      2,
      1,
      2,
      0,
      2,
      0,
      1
    ]
  },
  "classicBlockOrder": [
    "segments",
    "value",
    "channels",
    "relationships",
    "revenue",
    "resources",
    "activities",
    "partners",
    "costs"
  ]
};
