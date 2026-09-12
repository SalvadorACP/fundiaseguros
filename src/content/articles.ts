export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { headings: string[]; rows: string[][] };
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  intro: string;
  sections: ArticleSection[];
  cta: string;
  quotePath?: string;
  sources?: { title: string; href: string }[];
};

// Adaptado de “Fundia Seguros - Blogs”. Las cifras y promesas sin respaldo
// se sustituyen por explicaciones sujetas a las condiciones del producto.
export const articles: Article[] = [
  {
    slug: "cuanto-cuesta-seguro-gastos-medicos-mayores-mexico",
    category: "Salud",
    title: "¿Cuánto cuesta un seguro de gastos médicos mayores en México?",
    excerpt: "Edad, deducible, hospitales y coberturas: conoce qué influye en tu cotización y cómo comparar opciones.",
    intro: "El costo de un seguro médico depende de la persona que se asegura y de la protección que elige. Antes de comparar precios, conviene entender qué gastos asumirías tú y cuáles podría cubrir la aseguradora.",
    quotePath: "/cotizar/gastos-medicos",
    cta: "Conoce las opciones para tu salud",
    sections: [
      { title: "Qué es un seguro de gastos médicos mayores", paragraphs: ["Un seguro de gastos médicos mayores puede ayudarte a cubrir hospitalizaciones, cirugías, estudios y tratamientos derivados de un accidente o enfermedad cubiertos. Su alcance depende de la póliza: no todos los servicios, hospitales o padecimientos están incluidos.", "La elección de hospitales y médicos, los periodos de espera, las exclusiones y la forma de pago o reembolso son tan importantes como la prima. Conocerlos desde el inicio permite contratar con expectativas claras y planear la parte del gasto que seguirá a tu cargo."] },
      { title: "Por qué no existe un precio único", paragraphs: ["Una cotización considera la edad, lugar de residencia, antecedentes de salud y características del plan. Dos personas de la misma edad pueden recibir propuestas diferentes por la red hospitalaria, el deducible, el coaseguro o las coberturas adicionales elegidas.", "Por eso, un precio visto en internet sirve de poco si no viene acompañado de esas condiciones. Para comparar, pide propuestas con criterios equivalentes y revisa el costo anual total, incluidos posibles recargos por pago fraccionado."] },
      { title: "Los factores que vale la pena revisar", paragraphs: ["La edad y el historial médico influyen en la evaluación del riesgo. Los antecedentes deben declararse con precisión: la aceptación, las exclusiones o las condiciones adicionales dependen de la evaluación de la aseguradora.", "La suma asegurada establece el límite de responsabilidad previsto en el contrato. Revisa cómo se aplica: por padecimiento, evento u otra modalidad definida en la póliza. Una cifra elevada no sustituye la revisión de sublímites y exclusiones."], bullets: ["Red hospitalaria y zona de atención: verifica los hospitales que te interesan.", "Deducible: cantidad que participa el asegurado según el evento y las condiciones contratadas.", "Coaseguro: porcentaje del gasto cubierto a cargo del asegurado; revisa si tiene un tope.", "Coberturas adicionales: maternidad, viajes o accidentes pueden tener condiciones y periodos de espera propios."] },
      { title: "Cómo equilibrar costo y protección", paragraphs: ["Elegir un deducible mayor puede reducir la prima, pero exige contar con recursos para cubrirlo al utilizar el seguro. La decisión debe considerar tu presupuesto cotidiano y el dinero que podrías disponer ante un imprevisto.", "Pregunta también cómo funciona un siniestro: cuándo procede el pago directo, qué documentación se necesita y cómo se solicita un reembolso. Tener una prima accesible no es suficiente si no entiendes cómo usar tu cobertura."] },
      { title: "Qué preguntar si ya tienes una póliza", paragraphs: ["Antes de cambiar de aseguradora, revisa antigüedad, padecimientos cubiertos y continuidad de la protección. Una nueva propuesta puede implicar una evaluación médica y condiciones distintas. No canceles una póliza sin conocer el resultado y la fecha de inicio de la alternativa.", "En Fundia Seguros podemos conversar contigo sobre tu situación, revisar tus prioridades y orientarte en las opciones disponibles. La cotización personalizada es el siguiente paso para conocer un precio que corresponda a tu perfil."] },
    ],
  },
  {
    slug: "seguro-de-vida-vitalicio-vs-temporal-mexico",
    category: "Vida",
    title: "Seguro de vida vitalicio vs. temporal: ¿cuál te conviene?",
    excerpt: "Dos formas de proteger a tu familia. Compara duración, presupuesto y objetivos antes de elegir.",
    intro: "Un seguro de vida busca dar respaldo económico a las personas que eliges como beneficiarias ante un fallecimiento cubierto. La pregunta inicial es qué necesitas proteger, durante cuánto tiempo y con qué presupuesto.",
    quotePath: "/cotizar/vida",
    cta: "Diseña la protección de tu familia",
    sections: [
      { title: "Para qué sirve la protección de vida", paragraphs: ["La suma asegurada puede ayudar a cubrir deudas, educación, gastos familiares o la transición económica después de una pérdida. Para estimarla, considera las obligaciones actuales, los años durante los que tu familia necesitaría apoyo y los recursos con los que ya cuenta.", "También es importante mantener actualizados a los beneficiarios y revisar cómo se tramita una reclamación. La protección depende de que el contrato esté vigente y de que se cumplan sus condiciones."] },
      { title: "Cómo funciona un seguro temporal", paragraphs: ["El seguro temporal protege durante un plazo definido. Hay alternativas de 10, 15, 20 o 30 años, según el producto y las condiciones de contratación. Puede ser adecuado para responsabilidades que tienen una duración identificable, como una hipoteca o la educación de los hijos.", "En una cobertura temporal de protección pura, si el plazo termina sin un fallecimiento cubierto, normalmente no hay devolución de primas. No debe generalizarse a todos los productos: revisa si el plan incluye beneficios adicionales, renovaciones o valores específicos."] },
      { title: "Cómo funciona un seguro vitalicio", paragraphs: ["Un seguro vitalicio está diseñado para ofrecer protección de largo plazo conforme al contrato y al cumplimiento de los pagos. Algunos planes generan valores garantizados o de rescate; otros beneficios dependen del producto seleccionado.", "Es necesario distinguir entre la suma que recibirían los beneficiarios, el valor disponible si cancelas y las proyecciones no garantizadas. No son lo mismo, y retirar recursos o suspender pagos puede modificar la protección."] },
      { title: "Las diferencias que debes comparar", paragraphs: ["Compara propuestas con la misma suma asegurada, perfil y moneda para entender mejor el costo. Una prima menor o un componente de ahorro no determina por sí solo qué opción es adecuada."], table: { headings: ["Aspecto", "Temporal", "Vitalicio"], rows: [["Horizonte", "Plazo definido en el contrato", "Protección de largo plazo según el plan"], ["Objetivo habitual", "Responsabilidades con fecha de término", "Protección duradera y planeación patrimonial"], ["Valores de rescate", "No habituales en protección pura", "Pueden existir según el producto"], ["Qué revisar", "Vencimiento, renovación y exclusiones", "Pagos, valores garantizados y efectos de cancelar"]] } },
      { title: "Elegir a partir de tu situación", paragraphs: ["Un temporal puede ser útil si buscas una suma de protección importante durante la etapa de mayores obligaciones. Un vitalicio puede encajar si tu objetivo requiere un horizonte más largo y puedes sostener sus compromisos de pago.", "También es posible combinar coberturas, siempre que el presupuesto lo permita y cada una cumpla una función clara. No es necesario contratar dos planes para estar bien protegido: primero identifica la necesidad y después evalúa las alternativas.", "En Fundia Seguros te ayudamos a poner sobre la mesa tus prioridades y a entender la propuesta antes de decidir. Una revisión periódica permite ajustar la protección cuando cambian tu familia, tus deudas o tus objetivos."] },
    ],
  },
  {
    slug: "ppr-vs-afore-cual-conviene-retiro-mexico",
    category: "Retiro",
    title: "PPR y Afore: cómo pueden complementar tu retiro",
    excerpt: "Entiende las diferencias, la permanencia y las preguntas que debes hacer al planear tu ahorro de largo plazo.",
    intro: "Planear el retiro empieza por conocer lo que ya tienes y estimar lo que necesitarás. Una Afore y un Plan Personal de Retiro pueden formar parte de esa estrategia, pero tienen características que conviene revisar por separado.",
    cta: "Conversemos sobre tu retiro",
    sources: [{ title: "CONSAR · Calculadora de retiro", href: "https://www.consar.gob.mx/gobmx/Aplicativo/calculadora/imss/CalculadoraIMSS.aspx" }, { title: "SAT · Artículo 151, aportaciones para el retiro", href: "https://wwwmat.sat.gob.mx/articulo/82615/articulo-151" }],
    sections: [
      { title: "Empieza por conocer tu Afore", paragraphs: ["Revisa tu saldo, aportaciones, semanas cotizadas y datos personales. Tu pensión estimada depende de tu régimen y trayectoria: no hay un porcentaje de reemplazo que describa por igual a todos los trabajadores.", "Las calculadoras de CONSAR permiten explorar escenarios con supuestos específicos. Sus resultados son orientativos y pueden cambiar si varían el salario, la continuidad de las aportaciones, los rendimientos o la edad de retiro. El ahorro voluntario también puede contribuir a tu objetivo."] },
      { title: "Qué es un Plan Personal de Retiro", paragraphs: ["Un PPR es una cuenta o canal de inversión destinado al ahorro para el retiro que cumple requisitos específicos. Puede ser administrado por distintos tipos de instituciones autorizadas; no es exclusivo de las aseguradoras.", "Cuando se ofrece a través de un seguro, es importante separar el componente de protección, los costos y el ahorro. No todos los PPR incluyen seguro de vida ni todos los seguros con ahorro tienen el mismo tratamiento fiscal."] },
      { title: "Beneficios fiscales y permanencia", paragraphs: ["El artículo 151 contempla deducciones por aportaciones para el retiro bajo límites y requisitos. Su aprovechamiento depende de la situación fiscal de la persona, la modalidad contratada y el cumplimiento de las condiciones de permanencia.", "Antes de contratar, solicita la identificación del régimen aplicable, las constancias que recibirás y las consecuencias de retirar recursos anticipadamente. Un beneficio fiscal no equivale a disponibilidad inmediata ni elimina posibles costos de cancelación."] },
      { title: "Compara antes de comprometer tu ahorro", paragraphs: ["Una estrategia sostenible debe permitirte cumplir aportaciones sin comprometer gastos esenciales. Conviene contar con liquidez para imprevistos fuera de los instrumentos que requieren permanencia."], bullets: ["Objetivo: cuánto ingreso deseas complementar y a partir de qué edad.", "Costos: comisiones, cargos, protección y efectos de suspender aportaciones.", "Riesgo: qué valores están garantizados y cuáles son proyecciones.", "Liquidez: cuándo puedes disponer del dinero y bajo qué condiciones.", "Fiscalidad: requisitos aplicables a tu producto y situación personal."] },
      { title: "Dos herramientas dentro de un mismo plan", paragraphs: ["La decisión no necesita plantearse como una competencia entre Afore y PPR. Puedes valorar el ahorro voluntario y otras alternativas de largo plazo con base en costos, objetivos y flexibilidad. Ningún contrato debe presentarse como ajeno a la regulación o a futuros cambios normativos.", "La Afore tampoco desaparece por cambiar de empleo. Antes de agregar un nuevo instrumento, organiza tus cuentas existentes y revisa que la propuesta realmente complemente lo que ya tienes.", "En Fundia Seguros podemos ayudarte a ordenar las preguntas y revisar alternativas de protección y retiro. Para determinar el efecto fiscal concreto, acompaña la decisión con tu contador o asesor fiscal."] },
    ],
  },
  {
    slug: "asesor-de-seguros-en-mazatlan",
    category: "Asesoría",
    title: "Asesor de seguros en Mazatlán: qué preguntar antes de contratar",
    excerpt: "Cinco preguntas para elegir una asesoría cercana, entender tu póliza y saber quién te acompaña.",
    intro: "Comparar primas es solo una parte de elegir un seguro. La claridad de la asesoría, las condiciones del contrato y el acompañamiento después de contratar merecen la misma atención.",
    cta: "Habla con nuestro equipo",
    sections: [
      { title: "Qué puedes esperar de una asesoría", paragraphs: ["Una buena conversación empieza por tus necesidades: qué deseas proteger, quién depende de ti, qué presupuesto puedes sostener y cuáles son tus preocupaciones. A partir de ahí se pueden explicar alternativas y sus diferencias.", "El asesor debe ayudarte a distinguir coberturas, exclusiones y obligaciones. También conviene definir qué apoyo recibirás durante una renovación o un siniestro, sin confundir el acompañamiento del despacho con las decisiones que corresponden a la aseguradora."] },
      { title: "1. ¿Cómo puedo verificar tu autorización?", paragraphs: ["Pide los datos de la persona que intermedia la contratación y consulta su autorización en los canales oficiales de la CNSF. Verifica la vigencia y que los datos correspondan con quien te atiende.", "Además de la identificación del asesor, conoce cuál es la institución que emitirá la póliza. La marca comercial del despacho y la aseguradora cumplen funciones diferentes dentro del servicio."] },
      { title: "2. ¿Con qué aseguradoras trabajas?", paragraphs: ["Pregunta qué productos puede ofrecer el asesor y por qué recomienda una alternativa para tu caso. Trabajar con varias instituciones no garantiza por sí solo la mejor opción; lo relevante es que puedas comprender la recomendación.", "En Fundia Seguros trabajamos con opciones de GNP y Quálitas. Revisamos el tipo de protección que buscas para orientarte entre los productos disponibles, sus condiciones y el proceso de atención."] },
      { title: "3. ¿Qué sucede cuando necesito usar mi seguro?", paragraphs: ["Solicita una explicación de los canales de reporte, documentación y pasos a seguir. En gastos médicos, por ejemplo, vale la pena preguntar por pago directo y reembolso; en auto, por el reporte de un accidente y la asistencia.", "Guarda los teléfonos de la aseguradora junto con el contacto de tu asesor. Saber a quién llamar reduce la incertidumbre y ayuda a seguir el procedimiento previsto en la póliza."] },
      { title: "4. ¿Qué cubre y qué queda fuera?", paragraphs: ["Pide ejemplos de uso que sean relevantes para tu vida cotidiana. Revisa sumas, deducibles, coaseguros, periodos de espera y exclusiones, además de las obligaciones de declarar información y pagar puntualmente.", "Una explicación clara debe permitirte reconocer tanto los beneficios como los límites. Si algo no se entiende, es válido pedir una aclaración por escrito antes de firmar."] },
      { title: "5. ¿Cómo cambia mi protección si cambia mi vida?", paragraphs: ["Un cambio de domicilio, trabajo, uso del vehículo o composición familiar puede requerir actualizar información o revisar coberturas. En pólizas colectivas, pregunta qué sucede al terminar la relación con la empresa.", "Una póliza individual también tiene condiciones territoriales y de renovación. Revisa cada caso, especialmente si planeas mudarte o necesitas atención fuera de tu zona habitual."] },
      { title: "Conoce a Fundia Seguros", paragraphs: ["Nuestro despacho se consolidó en 2023 a partir de la trayectoria de José Gilberto Ayala Rosales. Desde Mazatlán, combinamos atención cercana y seguimiento digital para conversar con personas en distintas partes de México.", "Nos enfocamos en explicar alternativas de seguros médicos, vida, auto y estrategias de retiro con un lenguaje comprensible. Puedes visitarnos en Laguna Plaza & Business Center o iniciar una conversación por WhatsApp para conocer cómo podemos ayudarte."] },
    ],
  },
  {
    slug: "seguros-para-empresas-personas-morales-mexico",
    category: "Empresas",
    title: "Seguros para empresas: una guía para proteger personas y patrimonio",
    excerpt: "Gastos médicos, flotillas y persona clave: identifica qué necesita tu negocio y cómo ordenar sus prioridades.",
    intro: "Cada empresa tiene riesgos distintos. Diseñar su protección requiere entender cómo opera, quiénes sostienen la actividad y qué eventos podrían afectar su continuidad.",
    cta: "Revisa la protección de tu empresa",
    sections: [
      { title: "Una estrategia basada en la operación", paragraphs: ["Una flotilla de reparto, un consultorio y un despacho profesional no necesitan el mismo esquema. El punto de partida es identificar personas, activos y responsabilidades, además de las coberturas que ya existen.", "El presupuesto debe contrastarse con el impacto de un imprevisto y la capacidad de absorberlo. También es útil revisar contratos con clientes y proveedores para conocer obligaciones específicas, sin asumir que un paquete genérico resuelve todos los riesgos."] },
      { title: "Gastos médicos para el equipo", paragraphs: ["Un esquema de gastos médicos puede formar parte de las prestaciones de la empresa. La elegibilidad, el tamaño del grupo, los hospitales y las reglas de contratación dependen de la propuesta y de la aseguradora.", "Revisa cómo se realizan las altas y bajas, qué sucede con las familias y cómo se comunica el uso de la póliza a los colaboradores. El tratamiento fiscal de las primas requiere revisar los requisitos aplicables con el área contable; no debe considerarse automático."] },
      { title: "Vehículos y flotillas", paragraphs: ["Identifica el uso real de cada unidad, sus rutas, conductores y características. Un vehículo destinado a reparto o trabajo no debe cotizarse como particular si eso no corresponde a su actividad.", "Compara responsabilidad civil, daños materiales, robo, asistencia y deducibles. Las mercancías o responsabilidades asociadas al servicio pueden requerir protección distinta de la póliza del vehículo. En Fundia Seguros podemos orientarte sobre opciones de Quálitas según las necesidades de la operación."] },
      { title: "Qué significa proteger a una persona clave", paragraphs: ["Una persona clave es alguien cuya ausencia podría afectar de manera importante a la empresa. Un esquema de vida o invalidez puede buscar recursos para afrontar esa situación, según las condiciones contratadas.", "Es necesario definir quién contrata, quién está asegurado, quién recibe el beneficio y qué objetivo cumple la cobertura. No debe confundirse con un seguro personal para la familia ni asumirse que incluye ahorro o es deducible en todos los casos.", "La estructura contractual y fiscal necesita revisión especializada. Antes de contratar, solicita una explicación de requisitos, beneficiarios, pagos y consecuencias de cancelar o modificar el plan."] },
      { title: "Retiro para dueños y socios", paragraphs: ["Separar objetivos personales del flujo del negocio puede ayudar a planear el futuro. La empresa y sus socios tienen necesidades diferentes, por lo que sus contratos y recursos deben analizarse con claridad.", "Un plan de retiro puede ser parte de esa conversación, junto con otras alternativas. Compara permanencia, costos, riesgos y liquidez, considerando que el presupuesto personal debe sostener las aportaciones incluso cuando la actividad del negocio varíe."] },
      { title: "Cómo ordenar la revisión", paragraphs: ["La secuencia adecuada depende de los riesgos del negocio. Una revisión inicial puede organizarse con estas preguntas:"], bullets: ["¿Qué personas o funciones serían difíciles de sustituir?", "¿Qué pérdida material interrumpiría la operación?", "¿Qué responsabilidades existen frente a empleados, clientes y terceros?", "¿Qué cubren las pólizas actuales y cuándo se renuevan?", "¿Quién reportará y dará seguimiento a un siniestro?" ] },
      { title: "El siguiente paso", paragraphs: ["Reúne un resumen de la actividad de la empresa, las unidades o bienes relevantes y las pólizas que ya tienes. Con esa información es más fácil detectar duplicidades, vacíos y prioridades.", "Nuestro equipo puede acompañarte a revisar alternativas y comprender su alcance. La meta es que cada cobertura responda a una necesidad identificada y que sepas cómo utilizarla cuando haga falta."] },
    ],
  },
];

export function getReadingMinutes(article: Article) {
  const text = [article.intro, ...article.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? []), ...(section.table?.rows.flat() ?? [])])].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}
