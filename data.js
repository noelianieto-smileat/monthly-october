/* ============================================================
   CONTENIDO DEL INFORME — edítalo cada mes
   ------------------------------------------------------------
   - Cambia MES y COMPARATIVA
   - Rellena MIMO (mantener / incorporar / mejorar / omitir)
   - Rellena META_KPIS_* y GOOGLE_KPIS (con delta y cls: good | bad | neutral)
   - Rellena META_CONCLUSIONES y GOOGLE_CONCLUSIONES
   ============================================================ */

const MES = "1 – 31 oct 2026";
const COMPARATIVA = "comparado con septiembre";

/* ------------------------------------------------------------
   MIMO — compartido entre Meta y Google.
   ------------------------------------------------------------ */
const MIMO_SUB = "De cara al próximo mes, y en base a los resultados y aprendizajes obtenidos en Meta Ads y Google Ads, se plantean las siguientes líneas de actuación:";

const MIMO = {
  mantener: [
    "<strong>Estructura actual de las campañas:</strong> continuar acompañando a los usuarios durante todas las etapas del recorrido de compra, desde el primer impacto hasta la conversión.",
    "<strong>Campaña KIDS:</strong> seguir impulsando esta línea durante los próximos meses, centrando ahora los esfuerzos en las barritas y, posteriormente, en el lanzamiento del nuevo snack.",
    "<strong>Test de creatividades para suscripción:</strong> continuar explorando nuevos enfoques y formatos creativos. Los resultados actuales están siendo positivos, por lo que seguiremos probando propuestas diferentes y llamativas que consigan captar la atención del usuario.",
    "<strong>Coherencia entre publicidad y web:</strong> mantener una línea estética y comunicativa alineada entre ambos canales, garantizando una experiencia de marca consistente.",
  ],
  incorporar: [
    "<strong>Nuevas audiencias predefinidas:</strong> ampliar las opciones de segmentación con audiencias adicionales a las que ya tenemos activas, para identificar y alcanzar de forma más precisa al público objetivo de nuestras campañas.",
    "<strong>TikTok Ads vinculado a TikTok Shop:</strong> comenzar a trabajar anuncios conectados con TikTok Shop para explorar su potencial como canal de captación y venta. El 16 de noviembre realizaremos una primera prueba para evaluar su funcionamiento.",
    "<strong>Contenidos enfocados en las necesidades de las familias:</strong> reforzar las creatividades y los mensajes que respondan a dudas, inquietudes y necesidades concretas de las familias, aportando valor y conectando con sus motivaciones de compra.",
  ],
  mejorar: [
    "<strong>Alcance y visibilidad:</strong> recuperar progresivamente el volumen de alcance y las visitas al perfil, especialmente en las campañas de TOFU y MOFU, con el objetivo de ampliar la visibilidad de marca y reforzar la captación de nuevos usuarios.",
  ],
  omitir: [
    // Nada que omitir este periodo
  ],
};

/* ------------------------------------------------------------
   META ADS · 3 campañas: BOFU (ventas), MOFU (consideración), TOFU (seguidores)
   ------------------------------------------------------------ */
const META_SUB = "Meta Ads · " + MES + " · España · " + COMPARATIVA;

const META_KPIS_ECOMMERCE = [
  { lab: "Compras", val: "1.977", delta: "+26,25%", cls: "good" },
  { lab: "Coste/compra", val: "8,47 €", delta: "−13,6%", cls: "good" },
  { lab: "Ingresos", val: "82.340,86 €", delta: "+21,6%", cls: "good" },
  { lab: "ROAS", val: "4,92x", delta: "+11,5%", cls: "good" },
  { lab: "Inversión", val: "16.744,34 €", delta: "+9,1%", cls: "neutral" },
  { lab: "Frecuencia", val: "15,6", delta: "+35,6%", cls: "bad" },
];
const META_KPIS_MARCA = [
  { lab: "Inversión total", val: "17.203,41 €", delta: "+3,3%", cls: "neutral" },
  { lab: "Impresiones", val: "4.944.304", delta: "+4,3%", cls: "neutral" },
  { lab: "Alcance (suma de campañas)", val: "393.961", delta: "−28,8%", cls: "bad" },
  { lab: "Clics", val: "40.935", delta: "−6,2%", cls: "bad" },
  { lab: "Visitas a perfil (TOFU)", val: "4.040", delta: "−51,9%", cls: "bad" },
  { lab: "Coste/visita perfil", val: "0,08 €", delta: "+5,5%", cls: "neutral" },
  { lab: "Seguidores conseguidos", val: "1.349", delta: "+26%", cls: "good" },
];
const META_NOTA = "El alcance total es la suma del alcance de cada campaña, sin deduplicar. Los ingresos, el ROAS y los seguidores de septiembre (67.694 €, 4,41x y 1.070) proceden del resumen interno del mes anterior.";

const META_CONCLUSIONES = [
  { titulo: "Mes desigual por fases", texto: "BOFU mejora con claridad, mientras que TOFU y MOFU pierden volumen. Con una inversión total similar (+3,3%), las impresiones crecen un 4,3% pero el alcance cae y los clics bajan un 6,2%: más impactos sobre una audiencia menor." },
  { titulo: "BOFU, mejor conversión", texto: "1.977 compras (+26,25%) con un coste por compra de 8,47 € (9,80 € en septiembre) e ingresos de 82.341 € (+21,6%). La mejora viene de convertir mejor cada clic (5,5% de compras por clic frente al 4,9% de septiembre) y no de un tráfico más barato. El ticket medio baja ligeramente, de unos 43,2 € a 41,6 €." },
  { titulo: "Frecuencia de BOFU a vigilar", texto: "llega a 15,6 impactos por usuario (+35,6%) con un alcance un 17,4% menor. Estamos convirtiendo muy bien sobre la audiencia ya construida, por lo que conviene seguir alimentando la parte alta del funnel para que estos resultados se mantengan." },
  { titulo: "MOFU, caída por presupuesto", texto: "la inversión baja de 703 € a 152 € y las compras de 84 a 19. Por euro invertido el rendimiento es similar al de septiembre, el CTR mejora (+23%) y el ROAS es de 5,51x. Se recomienda revisar los anuncios a nivel individual y recuperar inversión de forma progresiva." },
  { titulo: "TOFU, volumen más bajo con eficiencia estable", texto: "4.040 visitas al perfil (−51,9%) con una inversión un 49,3% menor, tras reducir 165 € en podcast y 130 € en educacionales. El coste por visita se mantiene (0,08 €) y la frecuencia queda por debajo de 2, sin saturar a la audiencia. Los nuevos posts con Juan Llorca han tenido menos tirón que los primeros de la temporada; los educacionales de alimentación complementaria (primeros alimentos y transición desde los 6 meses) superan las 2.000 visitas al perfil entre ambos." },
  { titulo: "Seguidores en positivo", texto: "las campañas consiguen 1.349 seguidores (+26%), de los que 919 llegan desde TOFU a 0,33 € por seguidor." },
];

/* ------------------------------------------------------------
   GOOGLE ADS · total de cuenta
   ------------------------------------------------------------ */
const GOOGLE_SUB = "Google Ads · 1 – 31 oct 2026 · España · comparado con el periodo anterior (31 ago – 30 sep)";

const GOOGLE_KPIS = [
  { lab: "Inversión", val: "4.028,77 €", delta: "−18,4%", cls: "neutral" },
  { lab: "Impresiones", val: "757.560", delta: "−22,0%", cls: "bad" },
  { lab: "Clics", val: "18.504", delta: "−19,1%", cls: "bad" },
  { lab: "CTR", val: "2,44%", delta: "+0,08 pp", cls: "good" },
  { lab: "Conversiones", val: "2.015,59", delta: "−9,8%", cls: "bad" },
  { lab: "CPA", val: "2,00 €", delta: "−9,6%", cls: "good" },
  { lab: "Valor conv.", val: "101.112,75 €", delta: "−9,4%", cls: "bad" },
  { lab: "ROAS", val: "25,1x", delta: "+11,1%", cls: "good" },
];
const GOOGLE_NOTA = "Datos del total de la cuenta, que incluye campañas fuera del filtro de campañas activas (2.109,61 € de coste y 11.597,40 € de valor de conversión en octubre). Google y Meta atribuyen conversiones de forma independiente, por lo que sus ingresos no se pueden sumar.";

// Fuente interna por campaña (no se muestra tabla en el reporte)
const GOOGLE_CAMPANAS = [
  { nombre: "Search · Brand", coste: "456,30 €", conversiones: "1.089,17", valorConv: "57.976,01 €", cpa: "0,42 €" },
  { nombre: "PMáx · Productos", coste: "212,56 €", conversiones: "628,47", valorConv: "28.241,50 €", cpa: "0,34 €" },
  { nombre: "Search · Suscripción", coste: "639,52 €", conversiones: "34,68", valorConv: "1.370,42 €", cpa: "18,44 €" },
  { nombre: "PMáx · Suscripción", coste: "237,95 €", conversiones: "29,36", valorConv: "1.337,98 €", cpa: "8,10 €" },
  { nombre: "Demand Gen · Suscripción", coste: "304,93 €", conversiones: "12,81", valorConv: "589,44 €", cpa: "23,81 €" },
  { nombre: "Display · RMKT Dinámico", coste: "67,90 €", conversiones: "0", valorConv: "0 €", cpa: "—" },
];

const GOOGLE_CONCLUSIONES = [
  { titulo: "Rendimiento global", texto: "la cuenta reduce la inversión un 18,4% (4.029 €) y mantiene el valor de conversión en 101.113 € (−9,4%), con un CPA de 2,00 € y un ROAS de 25,1x frente a 22,6x en septiembre." },
  { titulo: "Search · Brand", texto: "1.089 conversiones a 0,42 € y 57.976 € de valor (−8,4%). Impresiones (−21,7%) y clics (−22,1%) caen en línea con el menor alcance en Meta, lo que apunta a menos notoriedad en la parte alta. Sigue limitada por presupuesto, por lo que se plantea probar más inversión." },
  { titulo: "PMáx · Productos, mejor resultado del mes", texto: "las conversiones suben un 147% (628) y el valor un 152% (28.242 €) con un CPA de 0,34 €, frente a 0,94 € en septiembre. Con estos niveles de rentabilidad conviene revisar las acciones de conversión que cuentan como principales." },
  { titulo: "Suscripción, foco de revisión", texto: "sumando Search, PMáx y Demand Gen, las conversiones pasan de 439 a 77 y el valor de 18.261 € a 3.298 €. PMáx · Suscripción gasta solo 238 € con un presupuesto de 70 €/día y Search · Suscripción dispara su CPA a 18,44 € (5,66 € en septiembre), con un ROAS por debajo del objetivo del 250%." },
  { titulo: "Display · RMKT Dinámico", texto: "sin conversiones en octubre y con frecuencia de 7,1; se identifica como candidata a pausar o reestructurar." },
  { titulo: "Demand Gen · Suscripción", texto: "mejora ligeramente (CPA de 23,81 €, ROAS de 1,93x) pero sigue en niveles bajos. La campaña muestra un aviso de Merchant Center desvinculado, que conviene verificar." },
];
