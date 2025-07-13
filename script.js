// script.js
const cursos = [
  { nombre: "Razonamiento Lógico Matemático", requisitos: [] },
  { nombre: "Metodología Del Trabajo Intelectual Universitario", requisitos: [] },
  { nombre: "Calculo 1", requisitos: [] },
  { nombre: "Física 1", requisitos: [] },
  { nombre: "Química General", requisitos: [] },
  { nombre: "Filosofía De Las Ciencias", requisitos: [] },
  { nombre: "Introducción A La Ingeniería Química", requisitos: [] },
  { nombre: "Calculo 2", requisitos: ["Calculo 1"] },
  { nombre: "Física 2", requisitos: ["Física 1"] },
  { nombre: "Química Inorgánica Aplicada", requisitos: [] },
  { nombre: "Comunicación Integral", requisitos: [] },
  { nombre: "Realidad Nacional", requisitos: [] },
  { nombre: "Ciudadanía E Interculturalidad", requisitos: [] },
  { nombre: "Ingles", requisitos: [] },
  { nombre: "Algebra Lineal", requisitos: ["Calculo 2"] },
  { nombre: "Fisicoquímica 1", requisitos: ["Física 2"] },
  { nombre: "Química Orgánica 1", requisitos: ["Química Inorgánica Aplicada"] },
  { nombre: "Ecología Y Conservación Ambiental", requisitos: [] },
  { nombre: "Economía", requisitos: [] },
  { nombre: "Computación Aplicada", requisitos: ["Algebra Lineal"] },
  { nombre: "Ecuaciones Diferenciales", requisitos: ["Algebra Lineal"] },
  { nombre: "Fisicoquímica 2", requisitos: ["Fisicoquímica 1"] },
  { nombre: "Química Orgánica 2", requisitos: ["Química Orgánica 1"] },
  { nombre: "Análisis Instrumental 1", requisitos: ["Fisicoquímica 2", "Química Orgánica 2"] },
  { nombre: "Balance De Materia Y Energía", requisitos: ["Ecuaciones Diferenciales", "Fisicoquímica 2"] },
  { nombre: "Materiales Industriales", requisitos: ["Fisicoquímica 2"] },
  { nombre: "Métodos Numéricos", requisitos: ["Computación Aplicada", "Ecuaciones Diferenciales"] },
  { nombre: "Diseño Experimental", requisitos: ["Computación Aplicada"] },
  { nombre: "Análisis Instrumental 2", requisitos: ["Análisis Instrumental 1"] },
  { nombre: "Termodinámica Aplicada", requisitos: ["Balance De Materia Y Energía"] },
  { nombre: "Fenómenos De Transferencia", requisitos: ["Métodos Numéricos", "Balance De Materia Y Energía"] },
  { nombre: "Electroquímica Industrial", requisitos: ["Materiales Industriales"] },
  { nombre: "Seguridad E Higiene Industrial", requisitos: ["Diseño Experimental"] },
  { nombre: "Operaciones Unitarias 1", requisitos: ["Fenómenos De Transferencia"] },
  { nombre: "Ingeniería De Las Reacciones Químicas 1", requisitos: ["Termodinámica Aplicada"] },
  { nombre: "Fundamentos De Bioprocesos", requisitos: ["Análisis Instrumental 2"] },
  { nombre: "Control De Procesos", requisitos: ["Fenómenos De Transferencia"] },
  { nombre: "Operaciones Unitarias 2", requisitos: ["Operaciones Unitarias 1"] },
  { nombre: "Ingeniería De Las Reacciones Químicas 2", requisitos: ["Ingeniería De Las Reacciones Químicas 1"] },
  { nombre: "Bioprocesos Industriales", requisitos: ["Fundamentos De Bioprocesos"] },
  { nombre: "Procesos Químicos Industriales", requisitos: ["Operaciones Unitarias 1", "Control De Procesos"] },
  { nombre: "Agroindustria 1", requisitos: ["Fundamentos De Bioprocesos"] },
  { nombre: "Gestión empresarial", requisitos: [] },
  { nombre: "Operaciones Unitarias 3", requisitos: ["Operaciones Unitarias 2"] },
  { nombre: "Simulación De Procesos", requisitos: ["Ingeniería De Las Reacciones Químicas 2", "Procesos Químicos Industriales"] },
  { nombre: "Investigación Y Seminario De Tesis 1", requisitos: [] },
  { nombre: "Diseño De Procesos Y Plantas Industriales", requisitos: ["Procesos Químicos Industriales"] },
  { nombre: "Procesos Metalúrgicos 1", requisitos: ["Operaciones Unitarias 2", "Procesos Químicos Industriales"] },
  { nombre: "Ética General Y Profesional", requisitos: [] },
  { nombre: "Investigación Y Seminario De Tesis 2", requisitos: ["Investigación Y Seminario De Tesis 1"] },
  { nombre: "Tratamiento De La Contaminación", requisitos: ["Bioprocesos Industriales"] }
];

const malla = document.getElementById("malla");
const estadoCursos = {};

// Inicializar todos los cursos como no aprobados
cursos.forEach(curso => estadoCursos[curso.nombre] = false);

function renderMalla() {
  malla.innerHTML = "";
  cursos.forEach(curso => {
    const aprobado = estadoCursos[curso.nombre];
    const habilitado = curso.requisitos.every(req => estadoCursos[req]);
    const div = document.createElement("div");
    div.textContent = curso.nombre;
    div.className = "curso" +
      (aprobado ? " aprobado" : habilitado ? "" : " bloqueado");

    if (habilitado && !aprobado) {
      div.addEventListener("click", () => {
        estadoCursos[curso.nombre] = true;
        renderMalla();
      });
    }

    malla.appendChild(div);
  });
}

renderMalla();
