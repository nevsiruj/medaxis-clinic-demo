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

const boardCards = [
  {
    title: 'Recepcion',
    copy: 'Busqueda rapida de paciente, agenda del dia, admision y control de espera.',
  },
  {
    title: 'Consultorio',
    copy: 'Historia clinica, diagnosticos, ordenes medicas y evolucion del caso.',
  },
  {
    title: 'Estudios',
    copy: 'Ecografias, laboratorio, radiologia y entrega de informes.',
  },
]

function App() {
  const [isInside, setIsInside] = useState(false)
  const [activeView, setActiveView] = useState<ViewKey>('dashboard')

  return (
    <div className="app-shell">
      {!isInside ? (
        <section className="entry-shell">
          <div className="entry-copy">
            <div className="eyebrow">Sistema clinico listo para demo</div>
            <h1>MedAxis</h1>
            <p className="entry-lead">
              Demo comercial de gestion clinica construido con React, TypeScript y
              Vite. Pensado para vender codigo fuente o usar como base SaaS.
            </p>

            <div className="entry-badges">
              <span>Pacientes</span>
              <span>Agenda medica</span>
              <span>Laboratorio</span>
              <span>Odontologia</span>
              <span>Reportes</span>
              <span>Oferta desde USD 50</span>
            </div>

            <div className="entry-grid">
              {boardCards.map((card) => (
                <article key={card.title} className="entry-card">
                  <span>{card.title}</span>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="login-card">
            <div className="login-topline">
              <span className="status-dot"></span>
              Demo online disponible
            </div>
            <h2>Ingresar al panel</h2>
            <p>
              Vista demo para publicar y vender el producto. No requiere backend
              para esta version comercial.
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
              Ver demo interactiva
            </button>

            <div className="login-footer">
              <div>
                <strong>Stack</strong>
                <span>React + TypeScript + Vite</span>
              </div>
              <div>
                <strong>Formato</strong>
                <span>Codigo listo para adaptar</span>
              </div>
              <div>
                <strong>Precio</strong>
                <span>USD 50 codigo fuente</span>
              </div>
              <div>
                <strong>Entrega</strong>
                <span>Demo online + proyecto editable</span>
              </div>
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
                <span>Clinic workspace</span>
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
              <p>Ideal para mostrar modulo, flujo y look & feel sin exponer datos reales.</p>
            </div>
          </aside>

          <main className="workspace-main">
            <header className="topbar">
              <div>
                <div className="eyebrow">Panel comercial</div>
                <h2>Operacion de clinica en una sola vista</h2>
              </div>

              <div className="topbar-actions">
                <button type="button" className="ghost-button" onClick={() => setIsInside(false)}>
                  Volver al login
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
                        <span className="eyebrow">Implementacion</span>
                        <h3>Lo que vendes</h3>
                      </div>
                    </div>

                    <ul className="check-list">
                      <li>Acceso administrativo y medico</li>
                      <li>Agenda con estados y control de atencion</li>
                      <li>Base de pacientes y modulo de especialidades</li>
                      <li>Reportes ejecutivos con exportacion</li>
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
                      <span className="eyebrow">Entrega</span>
                      <h3>Formato de venta</h3>
                    </div>
                  </div>
                  <ul className="check-list">
                    <li>Codigo fuente listo para entregar</li>
                    <li>Interfaz moderna y facil de adaptar</li>
                    <li>Deploy estatico para demo comercial</li>
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
