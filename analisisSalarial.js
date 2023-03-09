console.log(salarios);

//Analisis personal de juanita
function encontrarPesona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    // constpersona = salarios.find((persona) => {
    //     return persona.name == personaEnBusqueda;
    // });
    // return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos =  encontrarPesona(nombrePersona).trabajos; 

    const salarios = trabajos.map(function (elemento){
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(salarios);
    return medianaSalarios;
}

//Analisi empresarial
const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa] [trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(empresas)