console.group("Cuadrado")

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado + "cm²";

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

console.groupEnd("Cuadrado")
console.group("Triangulo")

function calcularPerimetroCuadrado(lado) {
    return{
        parametro: lado * 4,
        area: lado * lado,
    }
}

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const baseTriangulo = 4;
const alturaTriangulo = 12; 

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
    return{
        parametro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    baseTriangulo,
    alturaTriangulo,
    alturaTriangulo, 
    perimetroTriangulo,
    areaTriangulo,
})

console.groupEnd("Triangulo")