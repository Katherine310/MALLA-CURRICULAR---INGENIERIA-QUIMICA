const cursos = [
  // PRIMER AÑO
  { nombre: "Razonamiento Lógico Matemático", requisitos: [], anio: 1, semestre: "I" },
  { nombre: "Metodología Del Trabajo Intelectual Universitario", requisitos: [], anio: 1, semestre: "I" },
  { nombre: "Calculo 1", requisitos: [], anio: 1, semestre: "I" },
  { nombre: "Física 1", requisitos: [], anio: 1, semestre: "I" },
  { nombre: "Química General", requisitos: [], anio: 1, semestre: "I" },
  { nombre: "Filosofía De Las Ciencias", requisitos: [], anio: 1, semestre: "I" },

  { nombre: "Introducción A La Ingeniería Química", requisitos: [], anio: 1, semestre: "II" },
  { nombre: "Calculo 2", requisitos: ["Calculo 1"], anio: 1, semestre: "II" },
  { nombre: "Física 2", requisitos: ["Física 1"], anio: 1, semestre: "II" },
  { nombre: "Química Inorgánica Aplicada", requisitos: [], anio: 1, semestre: "II" },
  { nombre: "Comunicación Integral", requisitos: [], anio: 1, semestre: "II" },
  { nombre: "Realidad Nacional", requisitos: [], anio: 1, semestre: "II" },

  // SEGUNDO AÑO
  { nombre: "Ciudadanía E Interculturalidad", requisitos: [], anio: 2, semestre: "III" },
  { nombre: "Ingles", requisitos: [], anio: 2, semestre: "III" },
  { nombre: "Algebra Lineal", requisitos: ["Calculo 2"], anio: 2, semestre: "III" },
  { nombre: "Fisicoquímica 1", requisitos: ["Física 2"], anio: 2, semestre: "III" },
  { nombre: "Química Orgánica 1", requisitos: ["Química Inorgánica Aplicada"], anio: 2, semestre: "III" },
  { nombre: "Ecología Y Conservación Ambiental", requisitos: [], anio: 2, semestre: "III" },

  { nombre: "Economía", requisitos: [], anio: 2, semestre: "IV" },
  { nombre: "Computación Aplicada", requisitos: ["Algebra Lineal"], anio: 2, semestre: "IV" },
  { nombre: "Ecuaciones Diferenciales", requisitos: ["Algebra Lineal"], anio: 2, semestre: "IV" },
  { nombre: "Fisicoquímica 2", requisitos: ["Fisicoquímica 1"], anio: 2, semestre: "IV" },
  { nombre: "Química Orgánica 2", requisitos: ["Química Orgánica 1"], anio: 2, semestre: "IV" },
  { nombre: "Análisis Instrumental 1", requisitos: ["Fisicoquímica 2", "Química Orgánica 2"], anio: 2, semestre: "IV" },

  // TERCER AÑO
  { nombre: "Balance De Materia Y Energía", requisitos: ["Ecuaciones Diferenciales", "Fisicoquímica 2"], anio: 3, semestre: "V" },
  { nombre: "Materiales Industriales", requisitos: ["Fisicoquímica 2"], anio: 3, semestre: "V" },
  { nombre: "Métodos Numéricos", requisitos: ["Computación Aplicada", "Ecuaciones Diferenciales"], anio: 3, semestre: "V" },
  { nombre: "Diseño Experimental", requisitos: ["Computación Aplicada"], anio: 3, semestre: "V" },
  { nombre: "Análisis Instrumental 2", requisitos: ["Análisis Instrumental 1"], anio: 3, semestre: "V" },
  { nombre: "Termodinámica Aplicada", requisitos: ["Balance De Materia Y Energía"], anio: 3, semestre: "V" },

  { nombre: "Fenómenos De Transferencia", requisitos: ["Métodos Numéricos", "Balance De Materia Y Energía"], anio: 3, semestre: "VI" },
  { nombre: "Electroquímica Industrial", requisitos: ["Materiales Industriales"], anio: 3, semestre: "VI" },
  { nombre: "Seguridad E Higiene Industrial", requisitos: ["Diseño Experimental"], anio: 3, semestre: "VI" },
  { nombre: "Operaciones Unitarias 1", requisitos: ["Fenómenos De Transferencia"], anio: 3, semestre: "VI" },
  { nombre: "Ingeniería De Las Reacciones Químicas 1", requisitos: ["Termodinámica Aplicada"], anio: 3, semestre: "VI" },
  { nombre: "Fundamentos De Bioprocesos", requisitos: ["Análisis Instrumental 2"], anio: 3, semestre: "VI" },

  // CUARTO AÑO
  { nombre: "Control De Procesos", requisitos: ["Fenómenos De Transferencia"], anio: 4, semestre: "VII" },
  { nombre: "Operaciones Unitarias 2", requisitos: ["Operaciones Unitarias 1"], anio: 4, semestre: "VII" },
  { nombre: "Ingeniería De Las Reacciones Químicas 2", requisitos: ["Ingeniería De Las Reacciones Químicas 1"], anio: 4, semestre: "VII" },
  { nombre: "Bioprocesos Industriales", requisitos: ["Fundamentos De Bioprocesos"], anio: 4, semestre: "VII" },
  { nombre: "Procesos Químicos Industriales", requisitos: ["Operaciones Unitarias 1", "Control De Procesos"], anio: 4, semestre: "VII" },
  { nombre: "Agroindustria 1", requisitos: ["Fundamentos De Bioprocesos"], anio: 4, semestre: "VII" },

  // Cursos Electivos - Semestre VII
  { nombre: "Sistemas Integrados De Gestión – E", requisitos: [], anio: 4, semestre: "VII", electivo: true },
  { nombre: "Ingeniería Energética – E", requisitos: [], anio: 4, semestre: "VII", electivo: true },
  { nombre: "Industria De Los Polímeros – E", requisitos: [], anio: 4, semestre: "VII", electivo: true },
  { nombre: "Procesos Textiles Y Curtiduría – E", requisitos: [], anio: 4, semestre: "VII", electivo: true },

  { nombre: "Gestión empresarial", requisitos: [], anio: 4, semestre: "VIII" },
  { nombre: "Operaciones Unitarias 3", requisitos: ["Operaciones Unitarias 2"], anio: 4, semestre: "VIII" },
  { nombre: "Simulación De Procesos", requisitos: ["Ingeniería De Las Reacciones Químicas 2", "Procesos Químicos Industriales"], anio: 4, semestre: "VIII" },
  { nombre: "Investigación Y Seminario De Tesis 1", requisitos: [], anio: 4, semestre: "VIII" },
  { nombre: "Diseño De Procesos Y Plantas Industriales", requisitos: ["Procesos Químicos Industriales"], anio: 4, semestre: "VIII" },
  { nombre: "Procesos Metalúrgicos 1", requisitos: ["Operaciones Unitarias 2", "Procesos Químicos Industriales"], anio: 4, semestre: "VIII" },

  // QUINTO AÑO
  { nombre: "Ética General Y Profesional", requisitos: [], anio: 5, semestre: "IX" },

  // Cursos Electivos - Semestre X
  { nombre: "Industria No Metálica – E", requisitos: [], anio: 5, semestre: "X", electivo: true },
  { nombre: "Formulación Y Evaluación De Proyectos – E", requisitos: [], anio: 5, semestre: "X", electivo: true },
  { nombre: "Catálisis Y Fenómenos De Superficie – E", requisitos: [], anio: 5, semestre: "X", electivo: true },
  { nombre: "Procesos Metalúrgicos – E", requisitos: [], anio: 5, semestre: "X", electivo: true },
  { nombre: "Agroindustria 2 – E", requisitos: [], anio: 5, semestre: "X", electivo: true },

  { nombre: "Investigación Y Seminario De Tesis 2", requisitos: ["Investigación Y Seminario De Tesis 1"], anio: 5, semestre: "X" },
  { nombre: "Tratamiento De La Contaminación", requisitos: ["Bioprocesos Industriales"], anio: 5, semestre: "X" }
];

const malla = document.getElementById("malla");
const estadoCursos = {};
cursos.forEach(curso => estadoCursos[curso.nombre] = false);

function renderMalla() {
  malla.innerHTML = "";

  for (let anio = 1; anio <= 5; anio++) {
    const contenedorAnio = document.createElement("div");
    contenedorAnio.className = "semestre";
    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = `Año ${anio}`;
    contenedorAnio.appendChild(tituloAnio);

    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"].forEach(sem => {
      const cursosSem = cursos.filter(c => c.anio === anio && c.semestre === sem);
      if (cursosSem.length > 0) {
        const subtitulo = document.createElement("h3");
        subtitulo.textContent = `Semestre ${sem}`;
        contenedorAnio.appendChild(subtitulo);

        const fila = document.createElement("div");
        fila.className = "fila-cursos";

        cursosSem.forEach(curso => {
          const aprobado = estadoCursos[curso.nombre];
          const habilitado = curso.requisitos.every(req => estadoCursos[req]);
          const div = document.createElement("div");
          div.textContent = curso.nombre;
          div.className = "curso" +
            (curso.electivo ? " electivo" : "") +
            (aprobado ? " aprobado" : habilitado ? "" : " bloqueado");

          if (habilitado && !aprobado) {
            div.addEventListener("click", () => {
              estadoCursos[curso.nombre] = true;
              renderMalla();
            });
          }

          fila.appendChild(div);
        });

        contenedorAnio.appendChild(fila);
      }
    });

    malla.appendChild(contenedorAnio);
  }
}

function reiniciarMalla() {
  Object.keys(estadoCursos).forEach(curso => estadoCursos[curso] = false);
  renderMalla();
}

renderMalla();
