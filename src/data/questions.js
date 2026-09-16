// All 102 questions extracted from "SET PREGUNTA FINAL (ESTUDIAR ESTO).pdf"
// Correct answers identified from yellow highlights in the PDF

const questions = [
  // ============================================================
  // TEMA 1: Regulación Agente de Ventas (10 preguntas)
  // ============================================================
  {
    id: 1,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "Respecto al cargo de Agente de Ventas ¿cuál de las siguientes alternativas es FALSA?",
    options: [
      "Es una persona natural.",
      "Debe estar habilitada por una Institución de Salud Previsional.",
      "No puede intervenir en la terminación de los contratos de salud previsional.",
      "Puede intervenir en la negociación de un contrato de salud previsional."
    ],
    correctIndex: 2
  },
  {
    id: 2,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "Son requisitos para la incorporación al Registro de Agentes de Ventas:\nI. Ser mayor de edad\nII. Acreditar que se cuenta con los conocimientos suficientes sobre el sistema de Instituciones de Salud Previsional\nIII. Contar con licencia de Educación Media o equivalente.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "Solo III",
      "I y II",
      "I, II y III"
    ],
    correctIndex: 3
  },
  {
    id: 3,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "Macarena es una Agente de Ventas que desempeña funciones para la Isapre A y quiere cambiarse a la Isapre B, para ejercer las mismas funciones. ¿Qué alternativa indica lo que debe hacer Macarena para ejercer ese rol en la Isapre B, de acuerdo con la normativa vigente?\n\nMacarena debe",
    options: [
      "Presentar sus resultados en la capacitación realizada en la Isapre A.",
      "Acreditar su experiencia y rendir solo la evaluación de conocimientos.",
      "Realizar la capacitación y posterior evaluación de conocimientos.",
      "Macarena no necesita hacer nada para ejercer como Agente en la Isapre B."
    ],
    correctIndex: 2
  },
  {
    id: 4,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "Pedro ejerció como Agente de Ventas y hoy está interesado en volver a ejercer esa función. ¿Qué alternativa indica lo que debe hacer Pedro para volver a ejercer como Agente de Ventas, según la normativa vigente?\n\nPedro debe",
    options: [
      "Presentar sus resultados en la capacitación realizada cuando ejerció previamente ese rol.",
      "Acreditar su experiencia para poder rendir solo la evaluación de conocimientos.",
      "Realizar la capacitación y posterior evaluación de conocimientos.",
      "Pedro ya se encuentra habilitado para volver a ejercer como Agente de Ventas."
    ],
    correctIndex: 2
  },
  {
    id: 5,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "¿Cuál es el plazo que tiene la Isapre para inscribir a los agentes en el Registro de Agentes de Ventas, según la normativa?",
    options: [
      "Primera semana de cada mes.",
      "Cinco primeros días hábiles de cada mes.",
      "Primera quincena del mes.",
      "No hay un plazo para la inscripción."
    ],
    correctIndex: 1
  },
  {
    id: 6,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "¿Cuál de las siguientes alternativas NO CORRESPONDE a las funciones que debe desempeñar la Superintendencia de Salud en lo relativo a los Agentes de Ventas?",
    options: [
      "Llevar un control periódico y directo de las capacitaciones y evaluaciones que se implementan para los Agentes de Ventas.",
      "Velar por el correcto comportamiento de los Agentes de Ventas en sus funciones.",
      "Controlar periódicamente las capacitaciones y instancias de evaluación que se implementan para los Agentes de Ventas.",
      "Realizar visitas con el fin de inspeccionar el funcionamiento de la fuerza de ventas."
    ],
    correctIndex: 1
  },
  {
    id: 7,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "De acuerdo a la normativa vigente, el rendimiento mínimo con el cual se puede aprobar el curso para ser inscrito en el Registro de Agente de Ventas es de:",
    options: [
      "60% de respuestas correctas",
      "80% de respuestas correctas",
      "70% de respuestas correctas",
      "65% de respuestas correctas"
    ],
    correctIndex: 2
  },
  {
    id: 8,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "Según la normativa vigente (Circular 230), ¿cuándo un postulante a Agente de Ventas está autorizado para ejercer funciones de venta?",
    options: [
      "Una vez que haya concluido el curso y rendido la evaluación final.",
      "Una vez que se haya enviado sus antecedentes a la Superintendencia.",
      "Una vez recibido el certificado que acredite la aprobación del curso y cursado su incorporación al Registro de Agente de Ventas.",
      "Una vez que la Superintendencia haya aprobado sus antecedentes y se haya cursado su incorporación al Registro de Agente de Ventas."
    ],
    correctIndex: 3
  },
  {
    id: 9,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "Corresponden a deberes de la Isapre, con respecto a los Agentes de Ventas:",
    options: [
      "Controlar directamente en forma periódica el cumplimiento de las obligaciones de capacitación.",
      "Realizar visitas inspectivas para evaluar el funcionamiento de fuerza de ventas.",
      "Velar por el correcto comportamiento de los Agentes de Ventas en sus funciones.",
      "En el caso de que un Agente repruebe la evaluación, entregar un reforzamiento de los contenidos deficitarios según los resultados de la misma."
    ],
    correctIndex: 2
  },
  {
    id: 10,
    tema: 1,
    temaTitle: "Regulación Agente de Ventas",
    question: "La entrega maliciosa de información errónea al afiliado o a la Isapre por parte de un Agente de Ventas, provocando por ello un perjuicio en el correcto otorgamiento de los beneficios del contrato, corresponde, de acuerdo con la normativa vigente, a un incumplimiento del tipo:",
    options: [
      "Leve",
      "Grave",
      "Gravísimo",
      "Ninguna de las anteriores es correcta"
    ],
    correctIndex: 2
  },

  // ============================================================
  // TEMA 2: Declaración de Salud / Suscripción de contrato (10 preguntas)
  // ============================================================
  {
    id: 11,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Con respecto a las enfermedades preexistentes de los afiliados:\nLas enfermedades preexistentes\nI. Deben estar originadas antes del nacimiento.\nII. Pueden ser ignoradas por el afiliado.\nIII. Deben haber sido diagnosticadas médicamente.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo III.",
      "I y II.",
      "I y III."
    ],
    correctIndex: 1
  },
  {
    id: 12,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Respecto a la cobertura a prestaciones relacionadas con patologías preexistentes no declaradas, la Isapre:",
    options: [
      "Debe dar cobertura a esas prestaciones.",
      "Tiene prohibido dar cobertura a esas prestaciones.",
      "Está facultada para negar la cobertura a esas prestaciones.",
      "Debe dar una cobertura diferenciada a esas prestaciones."
    ],
    correctIndex: 2
  },
  {
    id: 13,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Con respecto a la identidad de género, la Circular 336 de 2019, establece que",
    options: [
      "Debe ser declarada en la DPS (Declaración de Salud).",
      "Debe ser exigida por la Isapre.",
      "Es una patología, pero no debe ser declarada en la DPS.",
      "No es una patología, por lo que no debe ser declarada en la DPS."
    ],
    correctIndex: 3
  },
  {
    id: 14,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Con respecto a la normativa establecida en Circular n° 279, que regula las ventas con huella digital.\nLas ventas con huella digital",
    options: [
      "Requieren solo autorización de palabra del futuro afiliado.",
      "Requieren el envío de un correo certificado con la huella digital del afiliado.",
      "Requieren el envío de un correo electrónico de autorización del afiliado.",
      "No poseen ningún requerimiento especial."
    ],
    correctIndex: 2
  },
  {
    id: 15,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "De acuerdo a la normativa vigente, son necesarios para formalizar la afiliación a la Isapre:\nI. Verificación de situación financiera según informe comercial.\nII. Entregar antecedentes para verificar la renta de la persona trabajadora dependiente.\nIII. Entregar una copia de la carta de desafiliación debidamente cursada (en el caso de personas afiliadas previamente a Isapre)\n\nEs (son) verdaderas:",
    options: [
      "I, II y III",
      "I y II",
      "II y III",
      "Solo II"
    ],
    correctIndex: 2
  },
  {
    id: 16,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Corresponden a obligaciones de la Isapre, en caso de que un afiliado se encuentre en situación de cesantía:\nI. Ofrecer por lo menos al cotizante el plan de menor precio.\nII. Informar al afiliado el saldo disponible en su cuenta de excedentes.\nIII. Contactar al afiliado para convenir modificaciones en el plan a partir de su situación.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "Solo II",
      "I y II",
      "I, II y III"
    ],
    correctIndex: 2
  },
  {
    id: 17,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "\"En la(s) _______________________ se consignarán de manera fidedigna aquellas enfermedades, patologías o condiciones de salud que hayan sido conocidas por el afiliado y diagnosticadas médicamente con anterioridad a la suscripción del contrato o de la incorporación del beneficiario\"\n\n¿Cuál es la alternativa que debería ir en el espacio para que el párrafo fuera correcto?",
    options: [
      "Suscripción de Contrato de Salud.",
      "Condiciones Generales del Contrato de Salud",
      "Declaración de Salud.",
      "Cartilla"
    ],
    correctIndex: 2
  },
  {
    id: 18,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Las preexistencias no declaradas facultan a la Isapre para:\nI. Denunciar lo sucedido a la Superintendencia de Salud.\nII. Poner término al contrato con el afiliado.\nIII. Excluir de cobertura al afiliado.\n\nEs (son) correcta(s):",
    options: [
      "Sólo I",
      "I, II y III",
      "Solo III",
      "II y III"
    ],
    correctIndex: 3
  },
  {
    id: 19,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Según la normativa que establece la Circular n° 279, en vigencia desde julio de 2017:",
    options: [
      "La Declaración de Salud se realizará solo vía correo electrónico.",
      "Puede realizarse el proceso de suscripción vía correo electrónico, previa autorización presencial del afiliado.",
      "La Isapre deberá enviar una copia de la Declaración de Salud, toda vez que sea solicitado por el afiliado.",
      "En caso de rechazo de la Declaración de Salud, la Isapre deberá devolverla al afiliado, junto con los antecedentes adicionales solicitados."
    ],
    correctIndex: 3
  },
  {
    id: 20,
    tema: 2,
    temaTitle: "Declaración de Salud y Suscripción de Contrato",
    question: "Según la normativa vigente, son documentos válidos para verificar la identidad del potencial cotizante en el caso de personas de nacionalidad chilena:\nI. Una fotocopia de su Cédula de Identidad\nII. Una fotocopia de su Licencia de Conducir\nIII. Un certificado de Nacimiento\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "I y II",
      "I y III",
      "I, II y III"
    ],
    correctIndex: 1
  },

  // ============================================================
  // TEMA 3: Causales de término de contrato (10 preguntas)
  // ============================================================
  {
    id: 21,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "¿Cuál de las siguientes causales NO PUEDE invocar la Isapre para poner fin al Contrato de Salud?",
    options: [
      "Incumplimiento de las obligaciones del cotizante consignadas en el Contrato.",
      "No pago de cotizaciones por parte de los cotizantes voluntarios e independientes.",
      "La obtención indebida de beneficios por parte del afiliado.",
      "La omisión de una preexistencia, en donde se demuestre justa causa de error."
    ],
    correctIndex: 3
  },
  {
    id: 22,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "Si un cotizante omite del contrato a algún familiar beneficiario (carga legal o conviviente civil), con el fin de perjudicar a la Isapre:",
    options: [
      "La Isapre puede modificar el contrato de salud.",
      "La Isapre puede poner fin al contrato de salud.",
      "La Isapre puede condicionar algunas prestaciones al cotizante.",
      "La Isapre debe notificar a la Superintendencia."
    ],
    correctIndex: 1
  },
  {
    id: 23,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "Una Isapre toma conocimiento de un hecho constitutivo de término de contrato. ¿Qué indica la normativa vigente respecto a esta situación?",
    options: [
      "La Isapre cuenta con 60 días para poner término al contrato.",
      "La Isapre cuenta con 90 días para poner término al contrato.",
      "El contrato se da por terminado una vez la Isapre tome conocimiento de este hecho.",
      "Ninguna de las opciones anteriores es correcta."
    ],
    correctIndex: 1
  },
  {
    id: 24,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "Respecto a las causales que puede invocar el afiliado para poner fin al contrato, es correcto afirmar que:\nI. El contrato puede terminarse por acuerdo mutuo entre las partes.\nII. El incumplimiento de las obligaciones de la Isapre no amerita el término del contrato.\nIII. El cotizante tiene la facultad legal de ponerle término al contrato por desahucio.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "Solo II",
      "I y III",
      "II y III"
    ],
    correctIndex: 2
  },
  {
    id: 25,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "Son causales de terminación del contrato de Salud:\nI. Insatisfacción del afiliado respecto al servicio recibido.\nII. El fallecimiento del titular del plan.\nIII. Incumplimiento de las obligaciones de la Isapre, declarada por la autoridad competente.\n\nEs (son) verdadera(s):",
    options: [
      "I y II.",
      "Solo II.",
      "Solo III.",
      "I, II y III."
    ],
    correctIndex: 2
  },
  {
    id: 26,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "En el caso de que un afiliado detecte una situación de incumplimiento de las obligaciones de la Isapre y desee ponerle término al contrato:",
    options: [
      "El afiliado debe notificar y documentar esta situación a la Isapre para poder solicitar el término del contrato.",
      "El afiliado debe dar cuenta a la Isapre y a la Superintendencia del incumplimiento, lo cual bastará para dar término al contrato.",
      "El incumplimiento del contrato debe ser declarado por la Justicia Ordinaria o por la Superintendencia de Salud.",
      "El incumplimiento de las obligaciones de la Isapre no corresponde a una causal de término de contrato."
    ],
    correctIndex: 2
  },
  {
    id: 27,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "Una Isapre descubre que un cotizante falseó información personal con el fin de obtener un beneficio. ¿Qué acciones está facultada a tomar la Isapre ante esta situación?",
    options: [
      "Sancionar económicamente al cotizante.",
      "Condicionar algunos beneficios del cotizante.",
      "Poner fin al contrato con el cotizante.",
      "Solo puede notificar a la Superintendencia de la falta cometida."
    ],
    correctIndex: 2
  },
  {
    id: 28,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "Alberto está afiliado a una Isapre y queda cesante. Su saldo de excedentes es insuficiente para cubrir las cotizaciones ante este cambio en su situación económica. Considerando esto, Alberto decide solicitar su desafiliación de la Isapre.\n\nFrente a este caso, la Isapre:",
    options: [
      "Está obligada a evaluar la solicitud del afiliado.",
      "Tiene la facultad de negar la solicitud del afiliado.",
      "Está obligada a autorizar la solicitud del afiliado.",
      "Ninguna de las anteriores es correcta."
    ],
    correctIndex: 2
  },
  {
    id: 29,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "De acuerdo a la normativa, en los contratos se deberá establecer que la Isapre pondrá término al contrato por muerte del afiliado en los siguientes casos:\nI. Si el titular no tiene beneficiarios(as).\nII. Si la muerte se produce antes de transcurrido el primer año de vigencia de los beneficios contractuales.\nIII. Automáticamente, siempre que tengan derecho al beneficio dispuesto en el artículo 203 del DFL N°1.\n\n¿Cuál(es) de las aseveraciones expuestas arriba es (son) correcta(s)?",
    options: [
      "Solo I.",
      "I y II.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 1
  },
  {
    id: 30,
    tema: 3,
    temaTitle: "Causales de Término de Contrato",
    question: "De acuerdo a lo que se estipula en la Circular 347, referida a la suscripción de contratos de salud previsional, las isapres están obligadas a poner a disposición de sus clientes:",
    options: [
      "Un canal único para cursar la afiliación y la desafiliación.",
      "Un canal telefónico que permita cursar la afiliación y desafiliación.",
      "Un sistema electrónico que permita cursar la afiliación y desafiliación.",
      "Un canal exclusivamente presencial para cursar la afiliación y desafiliación."
    ],
    correctIndex: 2
  },

  // ============================================================
  // TEMA 4: Obligaciones del cotizante y de la Isapre (11 preguntas)
  // ============================================================
  {
    id: 31,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Respecto a las obligaciones del afiliado en las Condiciones Generales del contrato. ¿Cuál de las siguientes alternativas es verdadera?",
    options: [
      "Solo se enfocan en la documentación que debe proporcionar el afiliado.",
      "Algunas de ellas se refieren a la entrega de información completa y verdadera por parte del afiliado.",
      "No contienen ninguna referencia al cumplimiento de exámenes y procedimientos ordenados por la Contraloría Médica de la Isapre.",
      "Indican que el afiliado decide cuándo informar a la Isapre sobre el término de la calidad de beneficiario."
    ],
    correctIndex: 1
  },
  {
    id: 32,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Respecto a las obligaciones del afiliado en las Condiciones Generales del Contrato:\nI. Se refieren, entre otras cosas, al deber del afiliado de informar sobre eventuales robos o pérdidas de credencial y/o cédula de identidad de cualquiera de los beneficiarios del Contrato.\nII. No se pronuncian respecto a la documentación que debe adjuntar el afiliado al solicitar un beneficio.\nIII. Señalan como un deber del afiliado el colaborar con la Isapre en el cumplimiento de las metas de cobertura del Examen de Medicina Preventiva.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo III.",
      "I y II.",
      "I y III."
    ],
    correctIndex: 3
  },
  {
    id: 33,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Con respecto a la Suscripción Electrónica de los Contratos de Salud Previsional (SECSP):\nI. Cada Isapre tiene un SECSP propio.\nII. Las Isapres están obligadas a implementar este modelo.\nIII. Las Isapres deben permitir el acceso a la Superintendencia de Salud a fiscalizar el SECSP.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "Solo III",
      "I y II",
      "I, II y III"
    ],
    correctIndex: 3
  },
  {
    id: 34,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Rafael, cotizante de la Isapre, cambió de domicilio. ¿Qué obligaciones tiene la Isapre ante esta situación?",
    options: [
      "Contactar a Rafael para obtener información sobre su nuevo domicilio.",
      "Disponer de distintas instancias de comunicación para que Rafael informe de su cambio de domicilio.",
      "Enviar una carta certificada a Rafael para que informe de su nuevo domicilio.",
      "Excluir cualquier medio tecnológico como opción para que Rafael pueda dar aviso del cambio de domicilio."
    ],
    correctIndex: 1
  },
  {
    id: 35,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Respecto a las obligaciones de la Isapre en las Condiciones Generales del Contrato, es correcto afirmar que\nI. Indican, entre otras cosas, una serie de datos que las isapres deben mantener siempre a disposición de sus beneficiarios y el público en general.\nII. Dejan a criterio de cada Isapre a través de qué empresa de correos se envía la correspondencia certificada cuando así lo dispone la ley.\nIII. Señalan como un deber de las Isapres contar con un único canal de comunicación para que el afiliado informe de eventuales cambios de domicilio.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "II y III.",
      "I, II y III."
    ],
    correctIndex: 0
  },
  {
    id: 36,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "¿Cuál de las siguientes alternativas NO ES una obligación del afiliado de acuerdo al Contrato de Salud?",
    options: [
      "Cumplir con los exámenes, controles, peritajes a interconsultas que la Contraloría Médica de la Isapre le ordene realizar.",
      "Realizarse el Examen de Medicina Preventiva según las especificaciones (tiempo, lugar) que disponga la Isapre.",
      "Informar sobre el término de la calidad de beneficiario del Contrato de Salud de cualquiera de los componentes del mismo.",
      "Adjuntar la documentación que se requiera al solicitar un beneficio."
    ],
    correctIndex: 1
  },
  {
    id: 37,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "De acuerdo a lo que indican las Condiciones Generales del Contrato de Salud, los exámenes, controles, peritajes e interconsultas que la Contraloría Médica de la Isapre solicite al afiliado:\nI. Corresponden a una obligación del afiliado con la Isapre.\nII. Serán financiados parcialmente por el afiliado.\nIII. Deberán notificarse por escrito al afiliado, justificando su realización.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 0
  },
  {
    id: 38,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "De acuerdo a lo que se indica en las Condiciones Generales del Contrato de Salud, respecto a los beneficiarios del Contrato\nI. Es obligación del afiliado informar sobre el término de la calidad de beneficiario de cualquiera de los componentes del Contrato de Salud.\nII. Es obligación de la Isapre recopilar información que acredite la condición de familiar beneficiario de los hijos mayores de 18 años, sin solicitarlo al afiliado.\nIII. El afiliado debe acreditar ante la Isapre, en el mes de marzo de cada año, la condición de familiar beneficiario de los hijos de más de 18 años.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo III.",
      "I y II.",
      "I y III."
    ],
    correctIndex: 3
  },
  {
    id: 39,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "De acuerdo a lo que se indica en las Condiciones Generales del Contrato de Salud, respecto a un eventual cambio de domicilio del beneficiario:\nI. Es deber del beneficiario informar a la Isapre acerca de cambios de domicilio.\nII. La información acerca de cambios de domicilio debe ser proporcionada solo por escrito.\nIII. La Isapre deberá proporcionar al afiliado un documento en el que conste que informó debidamente del cambio.\n\nEs (son) verdadera(s):",
    options: [
      "I y II",
      "I y III",
      "Solo I",
      "I, II y III"
    ],
    correctIndex: 1
  },
  {
    id: 40,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "De acuerdo a lo que se indica en las Condiciones Generales del Contrato de Salud, respecto a la información que las Isapres deben mantener a disposición de sus beneficiarios y el público en general:\nI. Esta información incluye la nómina de los Agentes de Ventas de la Isapre, por ciudades.\nII. La Isapre debe informar una selección de sus planes de salud, indicando sus precios base, tabla de factores, prestaciones y beneficios, en un listado.\nIII. La información debe incluir un listado con la individualización de sus representantes legales.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "I y II",
      "I y III",
      "I, II y III"
    ],
    correctIndex: 2
  },
  {
    id: 41,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Respecto a las obligaciones de la Isapre que se indican en las Condiciones Generales del Contrato de Salud, es FALSO afirmar que:",
    options: [
      "Estas obligaciones excluyen de responsabilidad a la Isapre respecto de informar al afiliado de todas aquellas notificaciones de F.U.N. que no se hayan podido efectuar al empleador, y asigna a este último la responsabilidad de informarlo.",
      "Estas obligaciones disponen que, para el envío de correspondencia certificada cuando así lo indica la ley, este debe hacerse a través de la Empresa de Correos de Chile.",
      "Estas señalan que es deber de la Isapre tener a disposición del afiliado distintas instancias para informar acerca de eventuales cambios de domicilio o de empleador.",
      "Las Isapres deben mantener a disposición de sus beneficiarios y público en general información referida a la fecha de registro de la Isapre en la Superintendencia, situación financiera de la misma, entre otros datos."
    ],
    correctIndex: 0
  },
  {
    id: 42,
    tema: 4,
    temaTitle: "Obligaciones del Cotizante y la Isapre",
    question: "Respecto a las obligaciones del afiliado que se incluyen en las Condiciones Generales del Contrato:\nI. Estas incluyen el deber de declarar y pagar, en forma íntegra y oportuna, por el empleador o la entidad encargada para los efectos, el precio del Plan de Salud Complementario pactado.\nII. Señalan que es responsabilidad del afiliado comunicar a la Isapre hechos como la cesantía, cambio, adición o eliminación de empleador, entre otros.\nIII. Indican el deber del afiliado de declarar información veraz cuando la Isapre lo requiera en la Declaración de Salud (tanto suya como de sus beneficiarios).\n\nEs (son) verdadera(s):",
    options: [
      "Solo II.",
      "Solo III.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 3
  },

  // ============================================================
  // TEMA 5: Declaración de Salud (10 preguntas)
  // ============================================================
  {
    id: 43,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Respecto a la declaración de salud, es FALSO afirmar que",
    options: [
      "Forma parte del contrato como un formulario independiente.",
      "Establece las condiciones particulares pactadas con cada beneficiario.",
      "La falta de esta declaración invalidará automáticamente el contrato.",
      "En ella se consignan de manera fidedigna las preexistencias del afiliado."
    ],
    correctIndex: 2
  },
  {
    id: 44,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Respecto al Agente de Ventas que recibe una Declaración de Salud, es correcto afirmar que\nI. El Agente de Ventas debe entregar el formulario Comprobante para el beneficiario.\nII. Durante el proceso de llenado de la Declaración de Salud por parte del potencial cotizante, el Agente de Ventas solicitará datos personales de la persona.\nIII. El Agente de Ventas es el principal encargado de definir la aceptación del potencial afiliado en la Isapre.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "Solo II",
      "I y II",
      "I, II y III"
    ],
    correctIndex: 2
  },
  {
    id: 45,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Respecto a la Declaración de Salud, es correcto afirmar que:\nI. Es un formulario anexo al contrato que no influye en las condiciones particulares pactadas con el beneficiario.\nII. Incluye información y documentación fidedigna sobre las preexistencias del afiliado.\nIII. Es un documento que contiene las obligaciones que adquiere la Isapre con el afiliado.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 1
  },
  {
    id: 46,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "\"Forma parte del contrato y es independiente de otros instrumentos que lo constituyen\"\n\nLo anterior se refiere a:",
    options: [
      "El registro de Agente de Ventas.",
      "La Declaración de Salud.",
      "Los beneficios del Contrato de Salud.",
      "El Plan de Salud Complementario."
    ],
    correctIndex: 1
  },
  {
    id: 47,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Con respecto a la eventualidad de que el Contrato NO vaya acompañado de la Declaración de Salud del afiliado, es correcto afirmar que\nI. Automáticamente se invalida el contrato.\nII. Se presume que la Isapre renuncia a la posibilidad de restringir la cobertura.\nIII. La Isapre pierde su posibilidad de poner término al contrato por la omisión de una preexistencia.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "II y III.",
      "Solo III."
    ],
    correctIndex: 2
  },
  {
    id: 48,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "\"Solo en este documento se podrán establecer las condiciones particulares pactadas con cada beneficiario al momento de su incorporación a la Isapre\"\n\nLo anterior se refiere a…",
    options: [
      "El Contrato de Salud",
      "La Declaración de Preexistencias",
      "La Declaración de Salud.",
      "El Formulario Único de Notificación (F.U.N.)"
    ],
    correctIndex: 2
  },
  {
    id: 49,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Son derechos del afiliado con respecto a la Declaración de Salud (DPS):\nI. Recibir una copia de su DPS llenada y firmada.\nII. Recibir de vuelta la DPS y los antecedentes solicitados en caso de ser rechazada\nIII. Solicitar llenar una nueva DPS en caso de ser rechazada la primera.\n\nEs (son) verdadera(s):",
    options: [
      "Solo III",
      "Solo II",
      "I y II",
      "I, II y III"
    ],
    correctIndex: 2
  },
  {
    id: 50,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Alejandra es hija del titular afiliado a la Isapre, por lo que es beneficiaria. No obstante, Alejandra empezó a trabajar, adquiriendo así la calidad jurídica de cotizante.\n\nCon respecto a esta situación, es correcto afirmar que:",
    options: [
      "Alejandra, al cotizar, queda automáticamente fuera de la Isapre.",
      "La Isapre debe ofrecerle un plan que se ajuste al monto de cotización de Alejandra.",
      "La Isapre está facultada para exigirle a Alejandra una nueva Declaración de Salud.",
      "Alejandra puede seguir siendo una carga legal de su padre, si así lo estima."
    ],
    correctIndex: 1
  },
  {
    id: 51,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Gabriel empezó a trabajar formalmente y es beneficiario de un plan, del cual su padre es titular.\n\nCon respecto a esta situación, es FALSO afirmar que:",
    options: [
      "Gabriel adquiere la calidad jurídica de cotizante",
      "Gabriel automáticamente será titular de un plan de salud acorde a sus necesidades.",
      "Gabriel podrá dejar la Isapre, si prefiere no adquirir ningún plan.",
      "Gabriel puede permanecer en la Isapre, tomando un plan de salud según su cotización."
    ],
    correctIndex: 1
  },
  {
    id: 52,
    tema: 5,
    temaTitle: "Declaración de Salud",
    question: "Gabriela está completando una Declaración de Salud (DPS). En ella, se le solicita llenar información sobre su identidad de género.\n\nCon respecto a esta situación, ¿cuál de las alternativas es VERDADERA?",
    options: [
      "Es deber de la Isapre solicitar este dato en la DPS y Gabriela debe declararlo ahí.",
      "Es deber de la Isapre ofrecer toda la diversidad de opciones posibles respecto a la identidad de género del afiliado en la DPS.",
      "Esta información no podrá ser exigida en la DPS, pues no se trata de una enfermedad, patología ni condición de salud.",
      "La información debe registrarse en la Declaración, resguardando al beneficiario de la confidencialidad de la información declarada ahí."
    ],
    correctIndex: 2
  },

  // ============================================================
  // TEMA 6: Condiciones generales del contrato (10 preguntas)
  // ============================================================
  {
    id: 53,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "Respecto a las Condiciones Generales del Contrato de Salud:\nI. Varían dependiendo de la Institución de Salud Previsional.\nII. Regulan la relación entre la Isapre y sus afiliados.\nIII. Han sido aprobadas por la Superintendencia de Salud.\n\nEs (son) correcta(s):",
    options: [
      "Solo I.",
      "Solo III.",
      "I y II.",
      "II y III."
    ],
    correctIndex: 3
  },
  {
    id: 54,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "De acuerdo con las Condiciones Generales del Contrato de Salud, los beneficiarios del Contrato tendrán derecho a\nI. El otorgamiento del examen de medicina preventiva.\nII. Contar con un médico de cabecera otorgado por la Isapre.\nIII. El pago de subsidios por incapacidad laboral (cuando proceda).\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "II y III.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 2
  },
  {
    id: 55,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "Respecto a las Condiciones Generales del Contrato de Salud, es FALSO afirmar que",
    options: [
      "Son aprobadas por la Superintendencia de Salud.",
      "Su principal función es regular la relación Isapre – afiliados.",
      "Varían según la Isapre y según las características de cada contrato.",
      "Están a disposición del afiliado en la página web de la Isapre."
    ],
    correctIndex: 2
  },
  {
    id: 56,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "¿Cuál de las siguientes alternativas NO CORRESPONDE a los derechos que tienen los beneficiarios del Contrato de Salud?",
    options: [
      "Pago de subsidios por incapacidad laboral (cuando corresponda).",
      "Otorgamiento del examen de medicina preventiva.",
      "La cobertura total a la primera consulta médica con un especialista.",
      "Protección de la mujer durante el embarazo y hasta el sexto mes de nacimiento del hijo."
    ],
    correctIndex: 2
  },
  {
    id: 57,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "\"Es aquella persona que el cotizante en la respectiva Caja de Compensación Familiar transformó en Causante de Asignación Familiar\".\n\nLa definición anterior se refiere a:",
    options: [
      "Carga Médica.",
      "Familiar Beneficiario.",
      "Grupo Familiar.",
      "Afiliado."
    ],
    correctIndex: 1
  },
  {
    id: 58,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "Los beneficios mínimos obligatorios que, según la ley, la Isapre otorgará a sus afiliados y beneficiarios establecen una cobertura mínima del Plan de Salud Complementario.\n\n¿Cuál es el porcentaje (%) de esta cobertura mínima?",
    options: [
      "50%",
      "30%",
      "25%",
      "20%"
    ],
    correctIndex: 2
  },
  {
    id: 59,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "\"Es toda condición clínica que implique riesgo de muerte o de secuela funcional grave\"\n\nLa anterior corresponde a la definición de",
    options: [
      "Enfermedad catastrófica",
      "Accidente grave",
      "Urgencia o Emergencia vital",
      "Atención de urgencia"
    ],
    correctIndex: 2
  },
  {
    id: 60,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "Con respecto a la atención de urgencia o emergencia vital:\nI. La legislación vigente faculta a las instituciones de salud a exigir cheques o documentos en garantía en estos casos.\nII. Debe realizarse en cualquiera de las instituciones de salud que disponga cada Isapre.\nIII. La condición de riesgo de muerte o de secuela funcional grave de estas atenciones las debe certificar un médico cirujano de la unidad de urgencia en que la persona sea atendida.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "Solo III.",
      "I y III."
    ],
    correctIndex: 2
  },
  {
    id: 61,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "\"Cuando existe una diferencia positiva producida entre la cotización mínima legal (considerando el tope legal) y la cotización pactada (incluyendo plan, GES y productos adicionales), diremos que esta diferencia corresponde a _____________\"\n\n¿Qué alternativa es la correcta para completar el párrafo anterior?",
    options: [
      "El deducible de la Cobertura Adicional para Enfermedades Catastróficas (CAEC)",
      "El excedente de cotización.",
      "Los Porcentajes de cobertura de bonificación.",
      "Los reajustes del Arancel de Prestaciones"
    ],
    correctIndex: 1
  },
  {
    id: 62,
    tema: 6,
    temaTitle: "Condiciones Generales del Contrato",
    question: "De acuerdo a lo que indica la normativa, ¿quién será el encargado de certificar la condición de riesgo de muerte o de secuela funcional grave en casos de atenciones de urgencia?",
    options: [
      "Un médico designado por la Isapre.",
      "La Isapre, a partir de los antecedentes entregados.",
      "Un médico cirujano de la unidad de urgencia donde sea atendida la persona.",
      "El encargado de la unidad de urgencia (pública o privada) en donde sea atendida la persona."
    ],
    correctIndex: 2
  },

  // ============================================================
  // TEMA 7: Planes de salud (10 preguntas)
  // ============================================================
  {
    id: 63,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "Respecto a los planes de salud, es correcto afirmar que:\nI. Deben explicitarse los montos máximos de cobertura establecidos para una o varias prestaciones.\nII. Deben estipular claramente la forma en que se modifica el precio del plan complementario de salud por distintos factores.\nIII. Establece las condiciones en que se incorporarán nuevos beneficiarios.\n\nEs (son) verdadera(s):",
    options: [
      "Solo II.",
      "II y III.",
      "I y II.",
      "I, II y III."
    ],
    correctIndex: 3
  },
  {
    id: 64,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "\"Corresponde a la unidad en que se encuentra expresado el Arancel. Puede ser en pesos ($) o en Unidades de Fomento (UF)\".\n\nEsta definición corresponde a:",
    options: [
      "Precio del Plan.",
      "Porcentajes de cobertura de bonificación.",
      "Identificación Única del Arancel.",
      "Modalidad del Arancel."
    ],
    correctIndex: 3
  },
  {
    id: 65,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "\"Corresponden a los planes en la que la elección del prestador de salud será determinada por el afiliado o beneficiario\"\n\nLo anterior corresponde a los Planes de Salud Complementarios",
    options: [
      "Preferentes.",
      "Cerrados.",
      "De libre elección.",
      "Opcionales."
    ],
    correctIndex: 2
  },
  {
    id: 66,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "En estos planes de salud, procede cobertura solamente en los prestadores establecidos en el plan, sin oportunidad de acceder a la libre elección (con excepciones que puede establecer la Superintendencia).\n\nEl plan de salud complementario al que se refiere el párrafo anterior es",
    options: [
      "De libre elección.",
      "Preferente.",
      "Cerrado.",
      "Especial."
    ],
    correctIndex: 2
  },
  {
    id: 67,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "El siguiente fragmento caracteriza una modalidad de plan de salud complementario:\n\nEs \"aquel cuya estructura combina la atención bajo la modalidad de libre elección y el financiamiento de beneficios a través de determinados prestadores previamente individualizados en el plan\"\n\n¿A qué modalidad de Plan de Salud Complementario se refiere el fragmento?",
    options: [
      "Cerrado.",
      "Preferente.",
      "De libre elección.",
      "Mixto."
    ],
    correctIndex: 1
  },
  {
    id: 68,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "Angélica está buscando un plan de salud que se adapte a sus necesidades. Informándose al respecto, encuentra el folleto de una Isapre que informa de ciertos beneficios que se obtienen con \"prestadores en convenio con la Isapre\". El folleto no detalla cuáles son esos prestadores en convenio.\n\nCon relación a esto, ¿qué señala la normativa vigente?",
    options: [
      "La normativa obliga a detallar expresiones de ese tipo, si es que así lo requiere el potencial afiliado.",
      "La normativa prohíbe a las Isapres comercializar planes que contengan referencias como esa u otras similares, sin individualizar a los prestadores.",
      "La normativa solo se refiere a la obligación de entregar información veraz respecto a los prestadores en convenio, sin detallar respecto al modo de comunicarla.",
      "Ninguna de las anteriores es correcta."
    ],
    correctIndex: 1
  },
  {
    id: 69,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "Con respecto a las acreditaciones y certificaciones que tengan los prestadores individualizados en los planes cerrados y preferentes, la normativa vigente señala que:",
    options: [
      "Es deseable (aunque no obligatorio) que las Isapres lo informen.",
      "Deben ser informadas a solicitud del (la) interesado(a).",
      "Es un deber de las Isapres informar esto al comercializar sus planes.",
      "Solo el Ministerio de Salud y el Instituto de Salud Pública pueden otorgar estas acreditaciones y certificaciones."
    ],
    correctIndex: 2
  },
  {
    id: 70,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "Carlos contrató con un Plan de Salud Complementario con su Isapre. Cuando Carlos requiere una atención de salud, él debe elegir de entre determinados prestadores que le indica la Isapre.\n\nEs más probable que Carlos haya contratado un Plan:",
    options: [
      "Preferente.",
      "De libre elección.",
      "General.",
      "Cerrado."
    ],
    correctIndex: 3
  },
  {
    id: 71,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "Angélica cuenta con un Plan de Salud Complementario en su Isapre. Cuando ella o su familia necesita una atención de salud, su Plan le ofrece ciertos prestadores o, también, la posibilidad de tener cobertura con prestadores que no están especificados en el Plan.\n\nA partir de esta información, se puede afirmar que Angélica cuenta con un Plan de Salud",
    options: [
      "Preferente.",
      "De libre elección.",
      "Cerrado.",
      "Mixto."
    ],
    correctIndex: 0
  },
  {
    id: 72,
    tema: 7,
    temaTitle: "Planes de Salud",
    question: "En caso de que se terminen o modifiquen los convenios con los prestadores indicados en los Planes de Salud Complementarios, la normativa vigente señala que\nI. Esto debe informarse debidamente al afiliado, junto con la(s) eventual(es) modificaciones en el monto que le corresponde copagar por las atenciones.\nII. Estos cambios no pueden afectar el monto que le corresponde copagar a los beneficiarios por las atenciones recibidas del prestador.\nIII. Las modificaciones pueden realizarse al cumplimiento de la anualidad, siguiendo el mecanismo de \"adecuación especial\".\n\nEs (son) verdadera(s):",
    options: [
      "Solo I",
      "Solo II",
      "Solo III",
      "II y III"
    ],
    correctIndex: 0
  },

  // ============================================================
  // TEMA 8: Cobertura, arancel y sus componentes (10 preguntas)
  // ============================================================
  {
    id: 73,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "Con respecto a la figura del médico de cabecera, es correcto afirmar que:\nI. Él decide el otorgamiento y de las prestaciones y beneficios pactados.\nII. Todos los planes contemplan la figura de un médico de cabecera.\nIII. El contratante del plan tiene el derecho a solicitar el reemplazo de este médico.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "I y II.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 2
  },
  {
    id: 74,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "Respecto al plan de salud complementario grupal, es correcto afirmar que:\nI. Debe marcarse como tal en el casillero correspondiente del F.U.N.\nII. La Isapre NUNCA podrá acordar modificaciones al plan grupal con los cotizantes.\nIII. Buscan entregar a los beneficiarios más beneficios de los que tendrían con un plan individual.\n\nEs (son) verdadera(s):",
    options: [
      "Solo II.",
      "I y III.",
      "II y III.",
      "I, II y III."
    ],
    correctIndex: 1
  },
  {
    id: 75,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "Con respecto a los representantes o mandatarios comunes consignados en la contratación del plan de salud grupal:\nI. Igualmente es necesaria la suscripción individual de las eventuales modificaciones del plan.\nII. Puede estar facultado para negociar las modificaciones a dicho plan de salud grupal.\nIII. Dicha representación o mandato podrá caer en quien detente algún cargo o calidad en la empresa.\n\nEs (son) FALSA(S):",
    options: [
      "Solo I.",
      "Solo II.",
      "II y III.",
      "Solo III."
    ],
    correctIndex: 0
  },
  {
    id: 76,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "La normativa vigente indica que el Arancel o nómina de prestaciones valorizadas de la Isapre debe incluir:\nI. El código de prestación\nII. El nombre (o glosa).\nIII. El valor de la prestación\n\nEs (son) verdadera(s):",
    options: [
      "I y II.",
      "I y III.",
      "II y III.",
      "I, II y III."
    ],
    correctIndex: 3
  },
  {
    id: 77,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "\"Es un catálogo valorizado que es utilizado para calcular la cobertura de las prestaciones\"\n\nLo anterior se refiere a",
    options: [
      "El Catálogo de Planes de salud.",
      "El Arancel de Prestaciones.",
      "La Cartilla.",
      "La Identificación Única del Arancel."
    ],
    correctIndex: 1
  },
  {
    id: 78,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "¿Qué nombre recibe el indicador del Arancel de Prestaciones de Salud que se aplica para determinar los topes de bonificación?",
    options: [
      "Código de Pertenencia.",
      "Valor de Prestación.",
      "Identificación Única del Arancel.",
      "Código de Prestación."
    ],
    correctIndex: 2
  },
  {
    id: 79,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "Con respecto a la cláusula de reajustabilidad del Arancel de Prestaciones asociado al Plan Complementario:\nI. El Plan de Salud debe indicar claramente la cláusula de reajustabilidad.\nII. El afiliado deberá recibir por carta certificada la información sobre esta cláusula.\nIII. Las condiciones del reajuste las establece la Superintendencia de Salud.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo III.",
      "II y III.",
      "I y III."
    ],
    correctIndex: 0
  },
  {
    id: 80,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "¿Qué información es posible encontrar en el campo \"Modalidad del Arancel\" del Arancel de Prestaciones de Salud?",
    options: [
      "El código que identifica a la prestación de salud señalada en el arancel vigente.",
      "La unidad en que se encuentra expresado el arancel que se informa.",
      "Al grupo de la prestación adicional o propia informada en el Arancel.",
      "La denominación otorgada al arancel que se informa, para identificarlo de forma única."
    ],
    correctIndex: 1
  },
  {
    id: 81,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "Con respecto a los topes, el Plan de salud debe informar\nI. El tope general por beneficiario.\nII. El tope de bonificación.\nIII. El monto máximo de bonificación para determinadas prestaciones.\n\nEs (son) correcta(s):",
    options: [
      "I y II.",
      "II y III.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 3
  },
  {
    id: 82,
    tema: 8,
    temaTitle: "Cobertura, Arancel y Componentes",
    question: "\"En el plan se deben indicar los topes máximos aplicables a las distintas agrupaciones de prestaciones\"\n\n¿A cuál de los topes que deben informarse en el Plan de Salud se refiere el fragmento anterior?",
    options: [
      "Monto máximo de bonificación para determinadas prestaciones.",
      "Tope de bonificación.",
      "Tope general por beneficiario.",
      "Topes de cobertura."
    ],
    correctIndex: 1
  },

  // ============================================================
  // TEMA 9: Preexistencias, restricciones, topes (10 preguntas)
  // ============================================================
  {
    id: 83,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "\"Corresponden a los montos máximos que financiará la Isapre\"\n\nLa definición anterior corresponde a los:",
    options: [
      "Reajustes del Arancel de Prestaciones.",
      "Coberturas de las Prestaciones.",
      "Topes de bonificación de los planes.",
      "Aranceles de Prestaciones."
    ],
    correctIndex: 2
  },
  {
    id: 84,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "Respecto a los topes de cobertura:",
    options: [
      "Se expresan solo en pesos ($).",
      "El plan debe especificar los montos máximos de bonificación para determinadas prestaciones.",
      "No es necesario indicarlos en el Plan de Salud suscrito por el beneficiario.",
      "Se expresan siempre en Unidades de Fomento (UF)."
    ],
    correctIndex: 1
  },
  {
    id: 85,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "Respecto a las obligaciones que la Isapre deberá cumplir con relación a la Selección de Prestaciones Valorizadas:\nI. La Isapre debe proporcionar, a requerimiento de sus afiliados, la Selección de Prestaciones Valorizadas correspondiente a los planes adscritos.\nII. La evidencia de la entrega de la Selección de Prestaciones Valorizadas es la firma del interesado.\nIII. En los cambios de plan, la Isapre no deberá entregar a los afiliados la Selección de Prestaciones Valorizadas.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "I y II.",
      "I, II y III."
    ],
    correctIndex: 2
  },
  {
    id: 86,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "\"Corresponde a la denominación dada por la Isapre al arancel asociado al plan de salud complementario\".\n\nEsta definición corresponde a:",
    options: [
      "Precio del Plan.",
      "Porcentajes de cobertura de bonificación.",
      "Identificación Única del Arancel.",
      "Modalidad del Arancel."
    ],
    correctIndex: 2
  },
  {
    id: 87,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "Con respecto a los montos máximos de bonificación (topes) de las prestaciones que se informan en la Selección de Prestaciones Valorizadas, también conocida como \"cartilla\", ¿cuál de las siguientes alternativas es FALSA?",
    options: [
      "Los topes de las prestaciones informadas en la \"cartilla\" deberán estar expresados en pesos.",
      "La normativa vigente deja al arbitrio de cada Isapre qué valores se ocuparán para el proceso de valorización de los topes.",
      "Para el cálculo del tope se usarán los valores de las prestaciones según aranceles vigentes al 1 de mayo de cada año.",
      "La cartilla informa los topes de una selección de prestaciones médicas que han sido seleccionadas por la Superintendencia."
    ],
    correctIndex: 1
  },
  {
    id: 88,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "¿Qué información debe indicarse en el Plan de Salud con relación a los topes?\nI. El tope general por beneficiario (si lo hubiese).\nII. Los topes máximos de bonificación aplicables a las distintas agrupaciones de prestaciones.\nIII. Los topes para algunas prestaciones específicas.\n\nEs (son) correcta(s):",
    options: [
      "Solo III.",
      "I y III.",
      "I y II.",
      "I, II y III."
    ],
    correctIndex: 3
  },
  {
    id: 89,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "\"Para los efectos de la ley, se entenderá que son _____________ aquellas enfermedades, patologías o condiciones de salud originadas con posterioridad al nacimiento que hayan sido conocidas por el afiliado y diagnosticadas médicamente con anterioridad a la suscripción del contrato o a la incorporación del beneficiario\"\n\n¿Cuál es la palabra que debería ir en el espacio en blanco?",
    options: [
      "Crónicas.",
      "Catastróficas.",
      "Preexistentes.",
      "Congénitas."
    ],
    correctIndex: 2
  },
  {
    id: 90,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "Con respecto a las preexistencias, ¿cuál de las siguientes alternativas es FALSA?",
    options: [
      "La Isapre tiene la facultad de negar cobertura a prestaciones asociadas a preexistencias no declaradas.",
      "Una preexistencia no declarada puede tener cobertura en el caso de que se acredite justa causa de error.",
      "Si la Isapre comprueba que el afiliado ocultó información para resultar beneficiado respecto a sus preexistencias, podrá poner término al contrato.",
      "La preexistencia puede ser diagnosticada médicamente con posterioridad a la suscripción del contrato."
    ],
    correctIndex: 3
  },
  {
    id: 91,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "La circular IF/N° 354 de la Superintendencia de Salud, del 18 de junio de 2020, establece que no serán patologías preexistentes aquellas ___________________.\n\n¿Qué frase es la que falta para completar este enunciado correctamente?",
    options: [
      "Que no estén declaradas.",
      "Originadas en accidentes en el trabajo.",
      "Originadas antes del nacimiento.",
      "Que no estén debidamente certificadas."
    ],
    correctIndex: 2
  },
  {
    id: 92,
    tema: 9,
    temaTitle: "Preexistencias, Restricciones y Topes",
    question: "En caso de fallecimiento del cotizante:\nI. Los beneficiarios vigentes deberán completar una nueva Declaración de Salud.\nII. Los nuevos beneficiarios pasarán a ser titulares.\nIII. No podrán pactarse restricciones de cobertura adicionales.\n\nEs (son) verdaderas:",
    options: [
      "Solo I",
      "II y III",
      "I y III",
      "I, II y III"
    ],
    correctIndex: 1
  },

  // ============================================================
  // TEMA 10: CAEC, GES, GES-CAEC (11 preguntas)
  // ============================================================
  {
    id: 93,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "Con respecto al beneficio CAEC:\nI. Tiene por finalidad reducir el costo de la cobertura que otorga el Plan Complementario de Salud.\nII. Junto con este beneficio, la Isapre debe poner a disposición de los beneficiarios la denominada Red CAEC.\nIII. En general, el CAEC no aumenta la cobertura de las prestaciones ambulatorias (aunque hay excepciones).\n\nEs (son) correcta(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "II y III.",
      "I y III."
    ],
    correctIndex: 2
  },
  {
    id: 94,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "\"Es la diferencia que se produce entre el valor cobrado por las prestaciones cubiertas por el plan de salud complementario y la bonificación efectiva que otorga dicho plan\"\n\nLa definición anterior corresponde a:",
    options: [
      "Deducible.",
      "Copago.",
      "Cobertura adicional para enfermedades catastróficas.",
      "Red CAEC."
    ],
    correctIndex: 1
  },
  {
    id: 95,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "Con respecto a las atenciones de urgencia en un prestador ajeno a la Red CAEC, es correcto afirmar que\nI. La Isapre deberá derivar al paciente a un prestador de la Red CAEC.\nII. El beneficiario o su representante deberá solicitar a la Isapre el ingreso a la Red CAEC.\nIII. La Isapre NO TIENE un plazo específico para derivar al paciente a un prestador de la Red CAEC.\n\nEs (son) correcta(s):",
    options: [
      "Solo I.",
      "Solo III.",
      "II y III.",
      "I y II."
    ],
    correctIndex: 3
  },
  {
    id: 96,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "De acuerdo con la Circular IF/n°343, a partir del 1 de abril de 2020 ¿cuál es la tabla que debe usarse para la comercialización de planes de salud?",
    options: [
      "La tabla única de factores.",
      "Depende del plan que se contrate.",
      "La tabla diferenciada para planes de salud.",
      "La tabla propia de cada Isapre, validada por Minsal."
    ],
    correctIndex: 0
  },
  {
    id: 97,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "Héctor debió hospitalizarse de urgencia en un prestador ajeno a la Red CAEC. ¿Qué condiciones se debiesen reunir para el otorgamiento del beneficio CAEC a este paciente?\nI. La solicitud del beneficiario (o su representante) a la Isapre de ingresar a la Red CAEC.\nII. La autorización del traslado por parte de un médico designado por la Isapre.\nIII. La derivación del paciente a un prestador de la Red CAEC, por parte de la Isapre.\n\nEs (son) correcta(s):",
    options: [
      "Solo II.",
      "Solo III.",
      "I y II.",
      "I y III."
    ],
    correctIndex: 3
  },
  {
    id: 98,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "¿Cuál de los siguientes requisitos son necesarios, según la normativa vigente, para la cobertura al tratamiento quirúrgico de la Obesidad Mórbida?\nI. El beneficiario debe tener una vigencia superior a los 6 meses en la Isapre.\nII. La certificación, exclusivamente de un especialista en nutrición, de que el paciente realizó, sin éxito, un tratamiento para su enfermedad.\nIII. El paciente / beneficiario deberá registrar un Índice de Masa Corporal (IMC) igual superior a 40.\n\nEs (son) correcta(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "Solo III.",
      "I y II."
    ],
    correctIndex: 2
  },
  {
    id: 99,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "Respecto a las Garantías Explícitas en Salud (GES):\nI. Corresponden a derechos de los beneficiarios.\nII. Pueden ser diferentes para una misma prestación, según distintas variables.\nIII. Las prestaciones asociadas al GES se señalan explícitamente en decretos del Minsal.\n\nEs (son) verdadera(s):",
    options: [
      "Solo I.",
      "Solo II.",
      "I y III.",
      "I, II y III."
    ],
    correctIndex: 3
  },
  {
    id: 100,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "\"Todo diagnóstico, enfermedad o patología que represente para el beneficiario copagos superiores al deducible\"\n\nLo anterior corresponde a la definición de:",
    options: [
      "Enfermedad crónica.",
      "Enfermedad preexistente.",
      "Enfermedad catastrófica.",
      "Enfermedad cubierta por el plan."
    ],
    correctIndex: 2
  },
  {
    id: 101,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "Con respecto a la normativa asociada a las Garantías Explícitas en Salud (GES):",
    options: [
      "La establece un Decreto Supremo del Ministerio de Salud con vigencia permanente y carácter inmodificable.",
      "La establece un documento interno de la Isapre, y está sujeto a modificaciones según disponga el Minsal.",
      "La establece un Decreto Supremo del Ministerio de Salud, con vigencia de tres años prorrogables.",
      "La establece un instructivo emanado desde la Superintendencia de Salud, y tiene una vigencia de dos años."
    ],
    correctIndex: 2
  },
  {
    id: 102,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "Las garantías GES referidas al \"otorgamiento de las prestaciones por un prestador acreditado o certificado\" se asocian a las Garantías asociadas a:",
    options: [
      "Acceso.",
      "Oportunidad.",
      "Libertad.",
      "Calidad."
    ],
    correctIndex: 3
  },
  {
    id: 103,
    tema: 10,
    temaTitle: "CAEC, GES y Normativa",
    question: "La mención a un plazo máximo de las prestaciones de salud garantizadas en las GES, se relaciona con la Garantía Explícita de:",
    options: [
      "Acceso.",
      "Calidad.",
      "Protección de salud.",
      "Oportunidad."
    ],
    correctIndex: 3
  }
];

export default questions;
