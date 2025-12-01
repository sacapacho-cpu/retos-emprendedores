import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PresentacionRetos = () => {
  const [slideActual, setSlideActual] = useState(0);

  const slides = [
    // Portada
    {
      tipo: 'portada',
      contenido: {
        titulo: 'Fase 5 - Apropiación de la legislación empresarial',
        subtitulo: 'Retos u Obstáculos del Emprendedor en Colombia',
        autores: [
          'David Amortegui Bonilla',
          'Sergio Andrés Capacho Laiseca',
          'Nancy Liliana Cuy Pinzón',
          'Karold Viviana Ávila Chavarro'
        ],
        grupo: 'Grupo a: 111001_170',
        tutor: 'Edgar Enrique Sierra Montenegro',
        institucion: 'Universidad Nacional Abierta y a Distancia UNAD',
        escuela: 'Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios ECACEN',
        curso: 'Curso: Legislación Empresarial',
        fecha: 'Diciembre 2025'
      }
    },
    // Introducción
    {
      tipo: 'contenido',
      titulo: 'Introducción',
      contenido: 'Colombia presenta un ecosistema emprendedor dinámico, ocupando el segundo lugar mundial en tasa de crecimiento de emprendimientos. Sin embargo, los emprendedores enfrentan múltiples barreras en materia laboral, comercial y tributaria que afectan la sostenibilidad de sus negocios. La tasa de supervivencia a cinco años es apenas del 33.5%, evidenciando los desafíos estructurales que deben superarse.'
    },
    // Reto 1
    {
      tipo: 'reto',
      numero: 1,
      categoria: 'Financiero',
      titulo: 'Acceso Limitado a Financiamiento',
      descripcion: 'Obtener capital inicial es el mayor desafío para emprendedores. Las entidades bancarias exigen historial crediticio sólido, garantías y puntajes altos que muchos emprendedores no poseen.',
      impacto: 'Limita el crecimiento y obliga a buscar alternativas como inversores ángeles, crowdfunding o capital familiar, que no siempre están disponibles.'
    },
    // Reto 2
    {
      tipo: 'reto',
      numero: 2,
      categoria: 'Laboral',
      titulo: 'Reforma Laboral 2025 (Ley 2466)',
      descripcion: 'La nueva reforma establece el contrato indefinido como modalidad preferente, limita contratos a término fijo a 4 años, aumenta recargos nocturnos y de festivos del 75% al 100%, y modifica la jornada nocturna de 10pm a 7pm.',
      impacto: 'Incrementa costos laborales significativamente para pequeñas empresas y requiere ajustes en políticas de contratación y nómina.'
    },
    // Reto 3
    {
      tipo: 'reto',
      numero: 3,
      categoria: 'Tributaria',
      titulo: 'Complejidad del Sistema Tributario',
      descripcion: 'Los emprendedores deben navegar múltiples impuestos: Renta (35% para jurídicas), IVA (19%), ICA (variable por municipio), retención en la fuente, parafiscales. El Régimen Simple unifica algunos, pero requiere ingresos menores a $148 millones anuales.',
      impacto: 'El 82% de emprendimientos que fracasan lo hacen por problemas de administración financiera y tributaria. Sanciones mínimas de $471,000 en 2025.'
    },
    // Reto 4
    {
      tipo: 'reto',
      numero: 4,
      categoria: 'Comercial',
      titulo: 'Trámites Burocráticos Complejos',
      descripcion: 'Registro mercantil, licencias, permisos de funcionamiento, actualización del RUT, facturación electrónica, renovación anual de matrícula (enero-marzo). El Decreto 045 de 2024 modificó tarifas basadas en "activos ordinarios", concepto no definido claramente.',
      impacto: 'Genera inseguridad jurídica, aumenta costos administrativos y tiempo de formalización. El 88.4% de micronegocios permanecen informales.'
    },
    // Reto 5
    {
      tipo: 'reto',
      numero: 5,
      categoria: 'Laboral',
      titulo: 'Informalidad Laboral',
      descripcion: 'El 55.8% de trabajadores en Colombia están en la economía informal. Para microempresas, esta cifra alcanza el 84.8%. La informalidad genera competencia desleal y dificulta la sostenibilidad de negocios formales.',
      impacto: 'Los emprendimientos formales enfrentan desventajas competitivas frente a informales que no asumen costos laborales, tributarios ni de seguridad social.'
    },
    // Reto 6
    {
      tipo: 'reto',
      numero: 6,
      categoria: 'Comercial',
      titulo: 'Costos de Formalización y Renovación',
      descripcion: 'Matrícula mercantil: $48,000-$154,000 según capital. Renovación anual obligatoria. Registro de libros, RUT, inscripción DIAN, certificados. Costos indirectos de asesoría legal y contable.',
      impacto: 'Representa barrera de entrada significativa para microempresarios con recursos limitados, incentivando la informalidad.'
    },
    // Reto 7
    {
      tipo: 'reto',
      numero: 7,
      categoria: 'Educativo',
      titulo: 'Falta de Formación Empresarial',
      descripcion: 'Pocas universidades ofrecen formación práctica en emprendimiento. Deficiencias en educación financiera, gestión empresarial, marketing digital y conocimiento de la legislación aplicable.',
      impacto: 'Los emprendedores inician negocios sin herramientas adecuadas de planificación, administración y cumplimiento legal, aumentando probabilidad de fracaso.'
    },
    // Reto 8
    {
      tipo: 'reto',
      numero: 8,
      categoria: 'Económico',
      titulo: 'Inestabilidad Económica e Inflación',
      descripcion: 'Fluctuaciones en tipo de cambio, tasas de interés elevadas, inflación que encarece insumos y afecta poder adquisitivo. La UVT 2025 es de $49,799 (incremento 5.81% respecto a 2024).',
      impacto: 'Dificulta planificación financiera a mediano y largo plazo. Reduce márgenes de utilidad y capacidad de inversión.'
    },
    // Reto 9
    {
      tipo: 'reto',
      numero: 9,
      categoria: 'Tributaria',
      titulo: 'Sanciones y Cumplimiento Tributario',
      descripcion: 'Declaración extemporánea: 5% del impuesto por mes de retraso. Sanción mínima 2025: $471,000 (10 UVT). Errores en facturación electrónica, RUT desactualizado, retenciones incorrectas generan multas.',
      impacto: 'Presión constante sobre emprendedores que deben cumplir calendarios tributarios estrictos sin capacidad administrativa para hacerlo correctamente.'
    },
    // Reto 10
    {
      tipo: 'reto',
      numero: 10,
      categoria: 'Regulatorio',
      titulo: 'Dispersión Normativa',
      descripcion: 'Coexistencia de múltiples leyes y decretos sobre emprendimiento (Ley 2069 de 2020, Ley 2466 de 2025, decretos municipales). Cambios frecuentes en regulaciones laborales, tributarias y comerciales.',
      impacto: 'Inseguridad jurídica. Dificultad para mantenerse actualizado. Necesidad constante de asesoría especializada que incrementa costos operativos.'
    },
    // Reto 11
    {
      tipo: 'reto',
      numero: 11,
      categoria: 'Comercial',
      titulo: 'Alta Competencia y Mercados Saturados',
      descripcion: 'Sectores económicos saturados exigen diferenciación constante. Competencia de empresas locales e internacionales. Necesidad de innovación y adopción tecnológica para destacar.',
      impacto: 'Presión por inversión en marketing, tecnología y desarrollo de productos únicos, recursos limitados para microempresarios.'
    },
    // Reto 12
    {
      tipo: 'reto',
      numero: 12,
      categoria: 'Laboral',
      titulo: 'Gestión del Talento Humano',
      descripcion: 'Dificultad para atraer y retener talento calificado. Costos de prestaciones sociales, parafiscales (SENA, ICBF, Cajas de Compensación). Cumplimiento de nuevas normativas de la Ley 2466.',
      impacto: 'Pequeñas empresas no pueden competir con salarios y beneficios de grandes corporaciones. Alto riesgo de rotación y pérdida de conocimiento.'
    },
    // Conclusiones
    {
      tipo: 'conclusiones',
      titulo: 'Conclusiones',
      puntos: [
        'Los emprendedores en Colombia enfrentan un ecosistema complejo con barreras significativas en lo laboral, comercial y tributario que limitan la sostenibilidad empresarial.',
        'La Reforma Laboral 2025 (Ley 2466) representa un desafío adicional al incrementar costos operativos, especialmente para microempresas que operan con márgenes reducidos.',
        'El sistema tributario colombiano, aunque ofrece el Régimen Simple, sigue siendo complejo y genera alta carga administrativa con sanciones severas por incumplimiento.',
        'La informalidad (88.4% de micronegocios) evidencia que los costos y complejidad de la formalización superan los beneficios percibidos por muchos emprendedores.',
        'La falta de formación empresarial específica deja a los emprendedores sin herramientas para navegar exitosamente el marco legal y regulatorio colombiano.',
        'A pesar de los obstáculos, Colombia muestra oportunidades con programas de apoyo (iNNpulsa, Fondo Emprender, Bancóldex) que deben ser más accesibles y difundidos.',
        'Es urgente simplificar trámites, unificar normativas dispersas y reducir cargas tributarias iniciales para fomentar la formalización y supervivencia empresarial.',
        'El éxito emprendedor requiere no solo una idea innovadora, sino también conocimiento profundo del marco legal, planificación financiera rigurosa y resiliencia ante los desafíos regulatorios del país.'
      ]
    },
    // Bibliografía
    {
      tipo: 'bibliografia',
      titulo: 'Bibliografía',
      referencias: [
        'Blog Coomeva. (2025). Retos de emprender en Colombia y cómo superarlos con éxito. Recuperado de https://blog.coomeva.com.co',
        'Bold. (2025). Impuestos en Colombia 2025 para pymes y emprendedores. Recuperado de https://bold.co/academia',
        'Deel. (2025). Reforma laboral Colombia: Ley 2466. Recuperado de https://www.deel.com/es/blog',
        'EY Colombia. (2025). Reforma Laboral 2025: cambios clave y obligaciones para las empresas. Recuperado de https://www.ey.com/es_co',
        'Infobae. (2025). Obstáculos que deben enfrentar las empresas para funcionar en Colombia. Recuperado de https://www.infobae.com/colombia',
        'Ley 2069 de 2020. Ley de Emprendimiento. Función Pública Colombia.',
        'Ley 2466 de 2025. Reforma laboral para el trabajo digno y decente en Colombia.',
        'Libre Gestión. (2025). Reforma laboral 2025 (Ley 2466). Recuperado de https://web.libregestion.com',
        'Ministerio de Comercio, Industria y Turismo. Ley de Emprendimiento - ABC. Recuperado de https://www.mincit.gov.co',
        'Tusdatos. (2025). Cultura empresarial en Colombia: retos actuales y oportunidades. Recuperado de https://www.tusdatos.co'
      ]
    }
  ];

  const siguienteSlide = () => {
    setSlideActual((prev) => (prev + 1) % slides.length);
  };

  const anteriorSlide = () => {
    setSlideActual((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const irASlide = (index) => {
    setSlideActual(index);
  };

  const renderSlide = (slide) => {
    switch (slide.tipo) {
      case 'portada':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-12">
            <div className="text-center space-y-6 max-w-4xl">
              <h1 className="text-5xl font-bold mb-4">{slide.contenido.titulo}</h1>
              <h2 className="text-3xl font-semibold text-blue-200 mb-8">{slide.contenido.subtitulo}</h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <p className="text-xl font-semibold mb-3">Presentado por:</p>
                {slide.contenido.autores.map((autor, idx) => (
                  <p key={idx} className="text-lg">{autor}</p>
                ))}
              </div>

              <p className="text-xl font-semibold">{slide.contenido.grupo}</p>
              
              <div className="mt-6">
                <p className="text-lg">Presentado a</p>
                <p className="text-xl font-semibold">{slide.contenido.tutor}</p>
              </div>

              <div className="mt-8 space-y-2">
                <p className="text-lg">{slide.contenido.institucion}</p>
                <p className="text-base">{slide.contenido.escuela}</p>
                <p className="text-base">{slide.contenido.curso}</p>
                <p className="text-lg font-semibold mt-4">{slide.contenido.fecha}</p>
              </div>
            </div>
          </div>
        );

      case 'contenido':
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-blue-50 p-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{slide.titulo}</h2>
            <div className="flex-1 flex items-center">
              <p className="text-2xl text-gray-700 leading-relaxed">{slide.contenido}</p>
            </div>
          </div>
        );

      case 'reto':
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-blue-50 p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                {slide.numero}
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase">{slide.categoria}</span>
                <h2 className="text-3xl font-bold text-gray-900">{slide.titulo}</h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Descripción:</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{slide.descripcion}</p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-3">Impacto:</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{slide.impacto}</p>
              </div>
            </div>
          </div>
        );

      case 'conclusiones':
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-green-50 p-12">
            <h2 className="text-4xl font-bold text-green-900 mb-8">{slide.titulo}</h2>
            <div className="grid gap-4 overflow-y-auto">
              {slide.puntos.map((punto, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
                  <div className="flex gap-3">
                    <span className="text-green-600 font-bold text-xl">{idx + 1}.</span>
                    <p className="text-lg text-gray-700 leading-relaxed">{punto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bibliografia':
        return (
          <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-purple-50 p-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-8">{slide.titulo}</h2>
            <div className="grid gap-3 overflow-y-auto">
              {slide.referencias.map((ref, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
                  <p className="text-base text-gray-700">{ref}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      {/* Área de presentación */}
      <div className="flex-1 relative">
        {renderSlide(slides[slideActual])}
        
        {/* Botones de navegación */}
        <button
          onClick={anteriorSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          onClick={siguienteSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Barra inferior con indicadores */}
      <div className="bg-gray-800 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm">
              Slide {slideActual + 1} de {slides.length}
            </span>
            <span className="text-white text-sm">
              {slides[slideActual].titulo || slides[slideActual].tipo}
            </span>
          </div>
          
          {/* Indicadores de slides */}
          <div className="flex gap-2 overflow-x-auto">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => irASlide(idx)}
                className={`flex-shrink-0 h-2 rounded-full transition-all ${
                  idx === slideActual
                    ? 'w-8 bg-blue-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentacionRetos;
