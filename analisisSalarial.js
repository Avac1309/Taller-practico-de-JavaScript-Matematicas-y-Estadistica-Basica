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