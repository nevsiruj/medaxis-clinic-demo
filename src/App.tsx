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

type TrustMetric = {
  value: string
  label: string
  note: string
}

type FeatureCard = {
  title: string
  copy: string
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

const trustMetrics: TrustMetric[] = [
  {
    value: 'USD 50',
    label: 'Oferta sugerida',
    note: 'Listo para publicar como codigo fuente editable.',
  },
  {
    value: 'React',
    label: 'Stack mainstream',
    note: 'Mas comercial y mas vendible que un template viejo en PHP.',
  },
  {
    value: '7 modulos',
    label: 'Demo visible',
    note: 'Pacientes, agenda, medicos, estudios, odonto y reportes.',
  },
  {
    value: '1 link',
    label: 'Listo para mostrar',
    note: 'Demo online sin depender de backend para la venta inicial.',
  },
]

const featureCards: FeatureCard[] = [
  {
    title: 'Recepcion y agenda',
    copy: 'Turnos, sala de espera, confirmacion y seguimiento en una sola vista clara.',
  },
  {
    title: 'Base de pacientes',
    copy: 'Historia, ultimo contacto, proximo paso y lectura rapida para admision.',
  },
  {
    title: 'Laboratorio e imagen',
    copy: 'Modulo comercial para vender estudios, informes y carga operativa visible.',
  },
  {
    title: 'Odontologia adaptable',
    copy: 'La base ya contempla especialidad vertical y sirve para vender variantes.',
  },
]

const salesAngles: FeatureCard[] = [
  {
    title: 'Consultorio privado',
    copy: 'Ideal para venderlo como sistema simple de agenda y pacientes.',
  },
  {
    title: 'Clinica chica',
    copy: 'Se muestra profesional sin tener que prometer un ERP medico completo.',
  },
  {
    title: 'Revendedor',
    copy: 'Buen formato para quien quiere comprar base y adaptarla a su cliente.',
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
        <section className="entry-shell">
          <div className="entry-copy">
            <div className="entry-topline">
              <div className="eyebrow">Sistema clinico listo para publicar</div>
              <span className="micro-badge">React + TypeScript + Vite</span>
            </div>

            <h1>MedAxis Clinical Suite</h1>
            <p className="entry-lead">
              Demo comercial con look profesional, stack actual y modulos visibles
              para vender codigo fuente o usar como base SaaS liviana. Pensado
              para mostrar rapido, generar confianza y cerrar sin humo tecnico.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => setIsInside(true)}
              >
                Ver demo interactiva
              </button>
              <div className="ghost-chip">
                Demo online + proyecto editable + salida rapida a USD 50
              </div>
            </div>

            <div className="trust-grid">
              {trustMetrics.map((metric) => (
                <article key={metric.label} className="trust-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>

            <section className="section-block">
              <div className="section-copy">
                <span className="eyebrow">Lo que hace vendible al producto</span>
                <h2>No parece un template viejo; parece un producto actual</h2>
                <p>
                  El objetivo de esta version es simple: elevar la percepcion de
                  valor. Menos sensacion de demo tecnica, mas sensacion de
                  software listo para negocio pequeno, consultorio o revendedor.
                </p>
              </div>

              <div className="feature-grid">
                {featureCards.map((card) => (
                  <article key={card.title} className="feature-card">
                    <span>{card.title}</span>
                    <p>{card.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-block accent-panel">
              <div className="section-copy">
                <span className="eyebrow">Verticales listas para adaptar</span>
                <h2>Consultorio, odontologia, laboratorio o centro medico chico</h2>
              </div>

              <div className="sales-grid">
                {salesAngles.map((angle) => (
                  <article key={angle.title} className="sales-card">
                    <strong>{angle.title}</strong>
                    <p>{angle.copy}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="login-card">
            <div className="login-topline">
              <span className="status-dot"></span>
              Demo web lista para mostrar
            </div>

            <h2>Acceso comercial</h2>
            <p>
              Mostralo, navegalo y despues vendelo como codigo fuente editable.
              La demo no depende de backend para esta primera oferta comercial.
            </p>

            <label>
              Usuario demo
              <input value="ADMINDEMO" readOnly />
            </label>
            <label>
              Password demo
              <input value="MEDAXIS2026" readOnly />
            </label>

            <button
              type="button"
              className="primary-button"
              onClick={() => setIsInside(true)}
            >
              Ingresar a la demo
            </button>

            <div className="offer-grid">
              <div>
                <strong>Entrega</strong>
                <span>Codigo React + demo online</span>
              </div>
              <div>
                <strong>Precio</strong>
                <span>USD 50 salida rapida</span>
              </div>
              <div>
                <strong>Ideal para</strong>
                <span>Consultorio, odontologia, laboratorio</span>
              </div>
              <div>
                <strong>Ventaja</strong>
                <span>Stack mas moderno y facil de revender</span>
              </div>
            </div>

            <div className="mini-proof">
              <span className="eyebrow">Argumento comercial</span>
              <p>
                No se vende como software hospitalario complejo. Se vende como base
                moderna, clara y adaptable para negocio pequeno o para reventa.
              </p>
            </div>
          </div>
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
