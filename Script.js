const ramos = [
  { id: "morfologia_basica", nombre: "Morfología básica", requisitos: [], abre: ["morfologia_aplicada"] },
  { id: "biologia_celular", nombre: "Biología celular", requisitos: [], abre: ["integrado_fisiologia1"] },
  { id: "matematica_basica", nombre: "Matemática básica", requisitos: [], abre: ["fisica_kinesiologica"] },
  { id: "fundamentos_movimiento", nombre: "Fundamentos del movimiento humano", requisitos: [], abre: [] },
  { id: "orientacion_kinesiologia", nombre: "Orientación a la kinesiología", requisitos: [], abre: [] },
  { id: "antropologia", nombre: "Antropología", requisitos: [], abre: ["etica"] },
  { id: "morfologia_aplicada", nombre: "Morfología aplicada", requisitos: ["morfologia_basica"], abre: [] },
  { id: "integrado_fisiologia1", nombre: "Integrado Fisiología I", requisitos: ["biologia_celular"], abre: ["integrado_fisiologia2"] },
  { id: "fisica_kinesiologica", nombre: "Física kinesiológica", requisitos: ["matematica_basica"], abre: ["analisis_movimiento1"] },
  { id: "psicologia_salud", nombre: "Psicología aplicada a la salud", requisitos: [], abre: [] },
  { id: "bioenergetica", nombre: "Bioenergética y metabolismo", requisitos: [], abre: [] },
  { id: "salud_digital", nombre: "Salud Digital", requisitos: [], abre: [] },
  { id: "integrado_fisiologia2", nombre: "Integrado Fisiología II", requisitos: ["integrado_fisiologia1"], abre: ["fisiologia_ejercicio", "deficiencias_disfunciones"] },
  { id: "analisis_movimiento1", nombre: "Análisis del movimiento humano I", requisitos: ["fisica_kinesiologica"], abre: ["analisis_movimiento2"] },
  { id: "innovacion_salud", nombre: "Innovación y tecnología en salud", requisitos: [], abre: [] },
  { id: "motricidad_humana", nombre: "Motricidad humana", requisitos: [], abre: [] },
  { id: "etica", nombre: "Ética", requisitos: ["antropologia"], abre: ["persona_sociedad"] },
  { id: "salud_poblacional", nombre: "Salud poblacional", requisitos: [], abre: ["epidemiologia"] },
  { id: "analisis_movimiento2", nombre: "Análisis del movimiento humano II", requisitos: ["analisis_movimiento1"], abre: [] },
  { id: "primeros_auxilios", nombre: "Primeros auxilios", requisitos: [], abre: [] },
  { id: "fisiologia_ejercicio", nombre: "Fisiología del ejercicio", requisitos: ["integrado_fisiologia2"], abre: ["fisiologia_clinica"] },
  { id: "persona_sociedad", nombre: "Persona y sociedad", requisitos: ["etica"], abre: [] },
  { id: "epidemiologia", nombre: "Epidemiología", requisitos: ["salud_poblacional"], abre: [] },
  { id: "deficiencias_disfunciones", nombre: "Deficiencias y disfunciones", requisitos: ["integrado_fisiologia2"], abre: ["intervencion_neuro1", "intervencion_musculo1"] },
  { id: "recursos_clinicos", nombre: "Recursos clínicos", requisitos: [], abre: [] },
  { id: "fisiologia_clinica", nombre: "Fisiología clínica", requisitos: ["fisiologia_ejercicio"], abre: ["intervencion_cardio1"] },
  { id: "gerontologia", nombre: "Gerontología", requisitos: [], abre: [] },
  { id: "gestion_equipos", nombre: "Gestión en equipos", requisitos: [], abre: [] },
  { id: "metodologia_investigacion", nombre: "Metodología de investigación", requisitos: [], abre: ["investigacion_ciencias"] },
  { id: "intervencion_neuro1", nombre: "Intervención kinesiológica neurológica I", requisitos: ["deficiencias_disfunciones"], abre: ["intervencion_neuro2"] },
  { id: "intervencion_musculo1", nombre: "Intervención musculoesquelética I", requisitos: ["deficiencias_disfunciones"], abre: ["intervencion_musculo2"] },
  { id: "intervencion_cardio1", nombre: "Intervención cardiorrespiratoria I", requisitos: ["fisiologia_clinica"], abre: ["intervencion_cardio2"] },
  { id: "gestion_salud", nombre: "Gestión en salud", requisitos: [], abre: [] },
  { id: "electivo1", nombre: "Electivo I", requisitos: [], abre: [] },
  { id: "bioetica", nombre: "Bioética", requisitos: [], abre: [] },
  { id: "intervencion_neuro2", nombre: "Intervención neurológica II", requisitos: ["intervencion_neuro1"], abre: [] },
  { id: "intervencion_musculo2", nombre: "Intervención musculoesquelética II", requisitos: ["intervencion_musculo1"], abre: [] },
  { id: "intervencion_cardio2", nombre: "Intervención cardiorrespiratoria II", requisitos: ["intervencion_cardio1"], abre: [] },
  { id: "investigacion_ciencias", nombre: "Investigación ciencias", requisitos: ["metodologia_investigacion"], abre: ["proyecto_ciencias"] },
  { id: "electivo2", nombre: "Electivo II", requisitos: [], abre: [] },
  { id: "integrado_kinesiologia", nombre: "Integrado de kinesiología", requisitos: [], abre: [] },
  { id: "kinesiologia_deportiva", nombre: "Kinesiología deportiva", requisitos: [], abre: [] },
  { id: "proyecto_ciencias", nombre: "Proyecto ciencias", requisitos: ["investigacion_ciencias"], abre: [] },
  { id: "electivo3", nombre: "Electivo III", requisitos: [], abre: [] },
  { id: "gestion_carrera", nombre: "Gestión de carrera", requisitos: [], abre: [] },
  { id: "practica_musculo", nombre: "Práctica musculoesquelética", requisitos: [], abre: [] },
  { id: "practica_cardio", nombre: "Práctica cardiorrespiratoria", requisitos: [], abre: [] },
  { id: "practica_neuro", nombre: "Práctica neurológica", requisitos: [], abre: [] },
  { id: "practica_atencion", nombre: "Práctica atención primaria", requisitos: [], abre: [] },
  { id: "electivo_final1", nombre: "Electivo final I", requisitos: [], abre: [] },
  { id: "electivo_final2", nombre: "Electivo final II", requisitos: [], abre: [] }
];

const aprobados = new Set();

function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.dataset.id = ramo.id;
    div.innerText = ramo.nombre;
    const bloqueado = ramo.requisitos.some(req => !aprobados.has(req));
    if (aprobados.has(ramo.id)) {
      div.classList.add("aprobado");
    } else if (bloqueado) {
      div.classList.add("bloqueado");
    }
    div.onclick = () => aprobarRamo(ramo.id);
    contenedor.appendChild(div);
  });
}

function aprobarRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  if (ramo.requisitos.some(req => !aprobados.has(req))) return;
  if (aprobados.has(id)) {
    aprobados.delete(id);
  } else {
    aprobados.add(id);
  }
  render();
}

render();

