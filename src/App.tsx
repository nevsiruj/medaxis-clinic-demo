import { useState } from 'react'
import './App.css'

type ViewKey =
  | 'dashboard'
  | 'patients'
  | 'appointments'
  | 'doctors'
  | 'studies'
  | 'odontology'
  | 'reports'

type NavigationItem = {
  key: ViewKey
  label: string
  eyebrow: string
}

type Kpi = {
  label: string
  value: string
  delta: string
}

type Appointment = {
  time: string
  patient: string
  doctor: string
  specialty: string
  status: string
}

type Patient = {
  name: string
  age: number
  plan: string
  lastVisit: string
  nextStep: string
}

type Doctor = {
  name: string
  specialty: string
  branch: string
  slots: string
}

type Study = {
  name: string
  queue: string
  sample: string
  report: string
}

type Highlight = {
  value: string
  label: string
}

type PointCard = {
  title: string
  copy: string
}

type Testimonial = {
  quote: string
  name: string
  role: string
}

const navigation: NavigationItem[] = [
  { key: 'dashboard', label: 'Panel', eyebrow: 'Resumen' },
  { key: 'patients', label: 'Pacientes', eyebrow: 'Base clinica' },
  { key: 'appointments', label: 'Agenda', eyebrow: 'Turnos' },
  { key: 'doctors', label: 'Medicos', eyebrow: 'Equipo' },
  { key: 'studies', label: 'Estudios', eyebrow: 'Imagen y lab' },
  { key: 'odontology', label: 'Odonto', eyebrow: 'Especialidad' },
  { key: 'reports', label: 'Reportes', eyebrow: 'Gestion' },
]

const kpis: Kpi[] = [
  { label: 'Turnos de hoy', value: '42', delta: '+8% vs ayer' },
  { label: 'Pacientes activos', value: '1,284', delta: '+122 este mes' },
  { label: 'Cobertura de agenda', value: '87%', delta: '4 huecos libres' },
  { label: 'Tiempo de espera', value: '11 min', delta: '-3 min' },
]

const highlights: Highlight[] = [
  { value: 'USD 50', label: 'Salida rapida' },
  { value: 'React + TS', label: 'Stack mas comercial' },
  { value: '7 modulos', label: 'Demo visible' },
  { value: '1 link', label: 'Lista para mostrar' },
]

const problemCards: PointCard[] = [
  {
    title: 'Muchos demos no inspiran confianza',
    copy: 'Se ven viejos, cargados o demasiado tecnicos para venderlos rapido.',
  },
  {
    title: 'El comprador no quiere leer arquitectura',
    copy: 'Quiere entender en dos minutos que recibe, para quien sirve y por que vale la pena.',
  },
  {
    title: 'En salud no alcanza con verse lindo',
    copy: 'Necesita verse ordenado, serio, claro y con sensacion de producto real.',
  },
]

const solutionCards: PointCard[] = [
  {
    title: 'Landing de autoridad',
    copy: 'Hero claro, prueba social, entregables concretos y CTA fuerte desde arriba.',
  },
  {
    title: 'Panel interno creible',
    copy: 'Agenda, pacientes, estudios y reportes con jerarquia y aire de software actual.',
  },
  {
    title: 'Posicionamiento correcto',
    copy: 'No se vende como ERP hospitalario; se vende como base moderna adaptable.',
  },
]

const moduleCards: PointCard[] = [
  {
    title: 'Recepcion y agenda',
    copy: 'Turnos, estados, sala de espera y seguimiento desde una sola vista.',
  },
  {
    title: 'Pacientes y medicos',
    copy: 'Base clinica, especialidades, disponibilidad y proximo paso del caso.',
  },
  {
    title: 'Imagen, laboratorio y odonto',
    copy: 'Verticales vendibles para ampliar el ticket sin rehacer todo.',
  },
  {
    title: 'Reportes y lectura ejecutiva',
    copy: 'Indicadores listos para vender gestion, no solo pantallas.',
  },
]

const deliverables: PointCard[] = [
  {
    title: 'Demo online',
    copy: 'Una URL lista para mostrar en grupos, inbox o WhatsApp.',
  },
  {
    title: 'Codigo fuente editable',
    copy: 'Proyecto React con estructura simple para adaptar rapido.',
  },
  {
    title: 'Base para SaaS o reventa',
    copy: 'Sirve tanto para venta directa como para personalizacion a terceros.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'Lo que mas ayuda a cerrar no es solo el codigo, sino que el cliente ya entiende el producto apenas abre la demo.',
    name: 'Marina R.',
    role: 'Implementadora freelance',
  },
  {
    quote:
      'La presentacion hace que se sienta mucho mas vendible que un admin generico o una plantilla vieja.',
    name: 'Carlos F.',
    role: 'Revendedor de software',
  },
  {
    quote:
      'Para consultorio chico o adaptacion vertical, la base ya da una sensacion profesional sin prometer de mas.',
    name: 'Lucia N.',
    role: 'Consultora operativa',
  },
]

const appointments: Appointment[] = [
  {
    time: '08:30',
    patient: 'Claudia Becerra',
    doctor: 'Dra. Paula Sosa',
    specialty: 'Clinica general',
    status: 'Confirmado',
  },
  {
    time: '09:10',
    patient: 'Matias Vera',
    doctor: 'Dr. Diego Campos',
    specialty: 'Traumatologia',
    status: 'En sala',
  },
  {
    time: '10:00',
    patient: 'Ana Ponce',
    doctor: 'Dra. Lucia Neri',
    specialty: 'Odontologia',
    status: 'Pendiente de pago',
  },
  {
    time: '10:40',
    patient: 'Camila Roldan',
    doctor: 'Dra. Paula Sosa',
    specialty: 'Control clinico',
    status: 'Recordatorio enviado',
  },
]

const patients: Patient[] = [
  {
    name: 'Fernando Juarez',
    age: 54,
    plan: 'Particular',
    lastVisit: '14 Mar 2026',
    nextStep: 'Control cardiologico',
  },
  {
    name: 'Luciana Coria',
    age: 29,
    plan: 'OSDE 210',
    lastVisit: '16 Mar 2026',
    nextStep: 'Ecografia abdominal',
  },
  {
    name: 'Daniela Acosta',
    age: 37,
    plan: 'Swiss Medical',
    lastVisit: '11 Mar 2026',
    nextStep: 'Laboratorio anual',
  },
]

const doctors: Doctor[] = [
  {
    name: 'Dra. Paula Sosa',
    specialty: 'Clinica general',
    branch: 'Sede Centro',
    slots: '17 libres',
  },
  {
    name: 'Dr. Diego Campos',
    specialty: 'Traumatologia',
    branch: 'Sede Norte',
    slots: '8 libres',
  },
  {
    name: 'Dra. Lucia Neri',
    specialty: 'Odontologia',
    branch: 'Sede Centro',
    slots: '12 libres',
  },
]

const studies: Study[] = [
  {
    name: 'Ecografia abdominal',
    queue: '06 en espera',
    sample: 'Imagen JPG/PDF',
    report: 'Plantilla automatica',
  },
  {
    name: 'Laboratorio clinico',
    queue: '14 ordenes',
    sample: 'Carga por lote',
    report: 'Resultados exportables',
  },
  {
    name: 'Radiologia',
    queue: '03 en validacion',
    sample: 'Adjunto por estudio',
    report: 'Lectura estructurada',
  },
]

const reportRows = [
  { label: 'Facturacion proyectada', value: 'USD 6,240' },
  { label: 'Pacientes sin seguimiento', value: '19' },
  { label: 'Ausentismo semanal', value: '6.8%' },
  { label: 'Especialidad mas pedida', value: 'Clinica general' },
]

function App() {
  const [isInside, setIsInside] = useState(false)
  const [activeView, setActiveView] = useState<ViewKey>('dashboard')

  return (
    <div className="app-shell">
      {!isInside ? (
        <section className="marketing-shell">
          <header className="marketing-topbar">
            <div className="brand-inline">
              <div className="brand-mark">M</div>
              <div>
                <strong>MedAxis</strong>
                <span>Clinical Suite</span>
              </div>
            </div>

            <nav className="mini-nav" aria-label="Secciones del landing">
              <a href="#modulos">Modulos</a>
              <a href="#prueba-social">Prueba social</a>
              <a href="#entrega">Entrega</a>
            </nav>

            <button type="button" className="ghost-button small-button" onClick={() => setIsInside(true)}>
              Ver demo
            </button>
          </header>

          <section className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Sistema clinico listo para publicar</span>
              <h1>Una demo que se ve como producto real y se vende mejor</h1>
              <p className="hero-lead">
                MedAxis es una base comercial para consultorio, clinica chica o
                revendedor. Stack moderno, narrativa clara y demo online lista
                para compartir en grupos, inbox o WhatsApp.
              </p>

              <div className="hero-actions">
                <button type="button" className="primary-button" onClick={() => setIsInside(true)}>
                  Abrir demo interactiva
                </button>
                <div className="ghost-chip">Codigo fuente editable + demo online + oferta a USD 50</div>
              </div>

              <div className="highlight-strip">
                {highlights.map((item) => (
                  <article key={item.label} className="highlight-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="offer-card">
              <div className="login-topline">
                <span className="status-dot"></span>
                Demo web lista para mostrar
              </div>
              <h2>Acceso comercial inmediato</h2>
              <p>
                La venta entra mejor cuando la presentacion es simple: que es,
                para quien sirve, que entrega y como se ve por dentro.
              </p>

              <label>
                Usuario demo
                <input value="ADMINDEMO" readOnly />
              </label>
              <label>
                Password demo
                <input value="MEDAXIS2026" readOnly />
              </label>

              <button type="button" className="primary-button" onClick={() => setIsInside(true)}>
                Ingresar ahora
              </button>

              <div className="offer-grid">
                <div>
                  <strong>Stack</strong>
                  <span>React + TypeScript</span>
                </div>
                <div>
                  <strong>Precio</strong>
                  <span>USD 50</span>
                </div>
                <div>
                  <strong>Entrega</strong>
                  <span>Demo online + proyecto editable</span>
                </div>
                <div>
                  <strong>Uso</strong>
                  <span>Venta directa o reventa</span>
                </div>
              </div>
            </aside>
          </section>

          <section className="section-band section-split">
            <div className="section-copy">
              <span className="eyebrow">Problema</span>
              <h2>Si el producto se ve tecnico o viejo, baja la conversion</h2>
              <p>
                En Facebook no gana el que tiene mas arquitectura. Gana el que
                logra que el comprador entienda rapido el valor y sienta que el
                software ya esta mas cerca de negocio que de experimento.
              </p>
            </div>

            <div className="card-grid three-grid">
              {problemCards.map((card) => (
                <article key={card.title} className="info-card">
                  <strong>{card.title}</strong>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-band">
            <div className="section-copy">
              <span className="eyebrow">Solucion</span>
              <h2>Presentacion de autoridad, look actual y posicionamiento correcto</h2>
              <p>
                Esta version se apoya en el patron recomendado por la skill:
                hero, confianza, prueba social, solucion visible y CTA antes de
                pedir demasiado esfuerzo al comprador.
              </p>
            </div>

            <div className="card-grid three-grid">
              {solutionCards.map((card) => (
                <article key={card.title} className="info-card soft-card">
                  <strong>{card.title}</strong>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="modulos" className="section-band showcase-band">
            <div className="section-copy">
              <span className="eyebrow">Modulos visibles</span>
              <h2>Una demo que enseña lo justo para vender, sin prometer de mas</h2>
            </div>

            <div className="card-grid four-grid">
              {moduleCards.map((card) => (
                <article key={card.title} className="info-card">
                  <strong>{card.title}</strong>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="prueba-social" className="section-band testimonial-band">
            <div className="section-copy narrow-copy">
              <span className="eyebrow">Prueba social</span>
              <h2>Comentarios que reflejan como conviene venderlo</h2>
            </div>

            <div className="card-grid three-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <p>"{item.quote}"</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </section>

          <section id="entrega" className="section-band section-split closing-band">
            <div className="section-copy">
              <span className="eyebrow">Entrega</span>
              <h2>Lo que recibe el comprador</h2>
              <p>
                La promesa queda limpia: demo online, codigo fuente y base
                moderna para adaptacion o reventa. Eso hace mas facil justificar
                el precio y cerrar rapido.
              </p>
            </div>

            <div className="card-grid three-grid">
              {deliverables.map((card) => (
                <article key={card.title} className="info-card inverted-card">
                  <strong>{card.title}</strong>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bottom-cta">
            <div>
              <span className="eyebrow">CTA final</span>
              <h2>Mostralo primero. Cerralo despues.</h2>
              <p>
                Si la persona quiere comprar, la demo ya esta lista para abrirse
                en vivo y mostrar el producto desde una URL.
              </p>
            </div>

            <div className="bottom-cta-actions">
              <button type="button" className="primary-button" onClick={() => setIsInside(true)}>
                Ver demo ahora
              </button>
              <div className="cta-note">Oferta sugerida para salida rapida: USD 50 codigo fuente</div>
            </div>
          </section>
        </section>
      ) : (
        <section className="workspace-shell">
          <aside className="sidebar">
            <div className="brand-lockup">
              <div className="brand-icon">M</div>
              <div>
                <strong>MedAxis</strong>
                <span>Clinical workspace</span>
              </div>
            </div>

            <nav className="nav-list" aria-label="Principal">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={item.key === activeView ? 'nav-item active' : 'nav-item'}
                  onClick={() => setActiveView(item.key)}
                >
                  <small>{item.eyebrow}</small>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="sidebar-note">
              <span>Modo demo</span>
              <p>
                Vista segura para vender el producto, mostrar modulos y volver al
                landing cuando quieras.
              </p>
            </div>
          </aside>

          <main className="workspace-main">
            <section className="workspace-hero">
              <div>
                <span className="eyebrow">Panel operacional</span>
                <h2>Vista interna lista para convencer rapido</h2>
                <p>
                  Esta demo enseña agenda, pacientes, medicos, estudios y
                  reportes con una interfaz mas actual, clara y comercial.
                </p>
              </div>

              <div className="workspace-hero-meta">
                <div>
                  <strong>Precio sugerido</strong>
                  <span>USD 50</span>
                </div>
                <div>
                  <strong>Formato</strong>
                  <span>Codigo editable</span>
                </div>
                <div>
                  <strong>Uso</strong>
                  <span>Demo o base SaaS</span>
                </div>
              </div>
            </section>

            <header className="topbar">
              <div>
                <div className="eyebrow">Panel comercial</div>
                <h2>Operacion clinica en una sola vista</h2>
              </div>

              <div className="topbar-actions">
                <button type="button" className="ghost-button" onClick={() => setIsInside(false)}>
                  Volver al landing
                </button>
                <button type="button" className="primary-button">
                  Exportar demo
                </button>
              </div>
            </header>

            {activeView === 'dashboard' && (
              <>
                <section className="kpi-grid">
                  {kpis.map((item) => (
                    <article key={item.label} className="kpi-card">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                      <small>{item.delta}</small>
                    </article>
                  ))}
                </section>

                <section className="panel-grid">
                  <article className="panel-card wide">
                    <div className="panel-header">
                      <div>
                        <span className="eyebrow">Agenda de hoy</span>
                        <h3>Turnos y estados</h3>
                      </div>
                      <span className="tag">Tiempo real</span>
                    </div>

                    <div className="table-list">
                      {appointments.map((appointment) => (
                        <div key={`${appointment.patient}-${appointment.time}`} className="row-item">
                          <div>
                            <strong>{appointment.time}</strong>
                            <span>{appointment.patient}</span>
                          </div>
                          <div>
                            <strong>{appointment.doctor}</strong>
                            <span>{appointment.specialty}</span>
                          </div>
                          <span className="status-pill">{appointment.status}</span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="panel-card">
                    <div className="panel-header">
                      <div>
                        <span className="eyebrow">Entrega</span>
                        <h3>Lo que recibe el comprador</h3>
                      </div>
                    </div>

                    <ul className="check-list">
                      <li>Landing comercial y panel interno en una sola demo</li>
                      <li>Agenda con estados y control de atencion</li>
                      <li>Base de pacientes y modulo de especialidades</li>
                      <li>Reportes ejecutivos con look mas premium</li>
                    </ul>
                  </article>
                </section>
              </>
            )}

            {activeView === 'patients' && (
              <section className="panel-card">
                <div className="panel-header">
                  <div>
                    <span className="eyebrow">Base clinica</span>
                    <h3>Pacientes activos</h3>
                  </div>
                  <span className="tag">Carga manual o masiva</span>
                </div>

                <div className="stack-list">
                  {patients.map((patient) => (
                    <article key={patient.name} className="stack-card">
                      <strong>{patient.name}</strong>
                      <span>{patient.age} anos</span>
                      <p>
                        {patient.plan} · Ultima visita {patient.lastVisit}
                      </p>
                      <small>{patient.nextStep}</small>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeView === 'appointments' && (
              <section className="split-grid">
                <article className="panel-card">
                  <div className="panel-header">
                    <div>
                      <span className="eyebrow">Calendario</span>
                      <h3>Bloques del dia</h3>
                    </div>
                  </div>

                  <div className="timeline">
                    {appointments.map((appointment) => (
                      <div key={`${appointment.time}-${appointment.doctor}`} className="timeline-item">
                        <div className="timeline-hour">{appointment.time}</div>
                        <div className="timeline-content">
                          <strong>{appointment.patient}</strong>
                          <span>
                            {appointment.doctor} · {appointment.specialty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel-card">
                  <div className="panel-header">
                    <div>
                      <span className="eyebrow">Flujo</span>
                      <h3>Recordatorios y sala</h3>
                    </div>
                  </div>

                  <ul className="check-list">
                    <li>Confirmado por recepcion</li>
                    <li>Check-in en sala de espera</li>
                    <li>Atendido y archivado</li>
                    <li>Seguimiento si falta documentacion</li>
                  </ul>
                </article>
              </section>
            )}

            {activeView === 'doctors' && (
              <section className="panel-card">
                <div className="panel-header">
                  <div>
                    <span className="eyebrow">Equipo</span>
                    <h3>Medicos y disponibilidad</h3>
                  </div>
                </div>

                <div className="stack-list">
                  {doctors.map((doctor) => (
                    <article key={doctor.name} className="stack-card">
                      <strong>{doctor.name}</strong>
                      <span>{doctor.specialty}</span>
                      <p>{doctor.branch}</p>
                      <small>{doctor.slots}</small>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeView === 'studies' && (
              <section className="panel-card">
                <div className="panel-header">
                  <div>
                    <span className="eyebrow">Diagnostico</span>
                    <h3>Estudios complementarios</h3>
                  </div>
                  <span className="tag">Imagen + laboratorio</span>
                </div>

                <div className="study-grid">
                  {studies.map((study) => (
                    <article key={study.name} className="study-card">
                      <strong>{study.name}</strong>
                      <span>{study.queue}</span>
                      <p>{study.sample}</p>
                      <small>{study.report}</small>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeView === 'odontology' && (
              <section className="split-grid">
                <article className="panel-card">
                  <div className="panel-header">
                    <div>
                      <span className="eyebrow">Especialidad</span>
                      <h3>Modulo odontologico</h3>
                    </div>
                  </div>
                  <ul className="check-list">
                    <li>Historia odontologica por paciente</li>
                    <li>Odontograma visual y observaciones</li>
                    <li>Seguimiento de piezas y tratamiento</li>
                    <li>Adjuntos e imagenes por consulta</li>
                  </ul>
                </article>

                <article className="panel-card accent-card">
                  <span className="eyebrow">Plus comercial</span>
                  <h3>Base ideal para nichos</h3>
                  <p>
                    Con pequenos cambios se puede adaptar a consultorio general,
                    odontologia, laboratorio o centro de imagen.
                  </p>
                </article>
              </section>
            )}

            {activeView === 'reports' && (
              <section className="split-grid">
                <article className="panel-card">
                  <div className="panel-header">
                    <div>
                      <span className="eyebrow">Gestion</span>
                      <h3>Indicadores ejecutivos</h3>
                    </div>
                  </div>

                  <div className="report-list">
                    {reportRows.map((row) => (
                      <div key={row.label} className="report-row">
                        <span>{row.label}</span>
                        <strong>{row.value}</strong>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel-card">
                  <div className="panel-header">
                    <div>
                      <span className="eyebrow">Formato de venta</span>
                      <h3>Lo que conviene prometer</h3>
                    </div>
                  </div>
                  <ul className="check-list">
                    <li>Codigo fuente listo para entregar</li>
                    <li>Interfaz moderna y facil de adaptar</li>
                    <li>Demo online para mostrar sin instalar nada</li>
                    <li>Base clara para evolucion futura</li>
                    <li>Oferta sugerida para salida rapida: USD 50</li>
                  </ul>
                </article>
              </section>
            )}
          </main>
        </section>
      )}
    </div>
  )
}

export default App
