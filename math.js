console.group("Cuadrado") // incia 
    const ladoCuadrado = 5;
    const perimetroCuadrado = ladoCuadrado * 4;
    const areaCuadrado = ladoCuadrado * ladoCuadrado + "cm²";

    console.log({
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
    })
    function calcularPerimetroCuadrado(lado) {
        return{
            parametro: lado * 4,
            area: lado * lado,
        }
    }
console.groupEnd("Cuadrado") // termina 


console.group("Triangulo") // inicia
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

    function calculoAlturaTrianhguloIsosceles(lados, base) {
        if (lados == base) {
            console.warn("Este no es un triangulo isosceles, tiene todos los lados iguales")
        } else {
            // h = raizcuadrada (lado**2 - (b**2) /4)
            return Math.sqrt( (lados ** 2) - (base * 2) / 4);
        }
    }

    function calculoAlturaTrianhguloEscaleno(lado1, lado2, lado3) {
        const S = (lado1 + lado2 + lado3) / 2
        if (lado1 == lado3 && lado2 == lado3 && lado1 == lado2) {
            console.warn("Este no es un triangulo escaleno, tiene dos lados iguales")
        }  else {
            // h = raizcuadrada Semiperimetro(S - lado1) (S - lado2) (S-lado3)
            return h = Math.sqrt( S * (S - lado1) * (S - lado2) * (S - lado3))
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
console.groupEnd("Triangulo") // termina


console.group("Circulo") // inica
    const radioCirculo = 3;
    const diametroCirculo = radioCirculo * 2;
    const PI = 3.1415;

    const circunferencia = diametroCirculo * PI;
    const areaCirculo = (radioCirculo  ** 2) + PI;

    console.log({
        radioCirculo,
        diametroCirculo,
        PI,
        circunferencia,
        areaCirculo,
    })

    function calcularCirculo(radio) {
        const diametro = radio * 2;
        const radioAlCuadrado = Math.pow(radio, 2);

        return{
            circunferencia: diametro * Math.PI.toFixed(3), //toFixed(2) sirve para limitar los numeros y que no aparexcan tantos en ek calculo
            area: radioAlCuadrado * Math.PI,
        }
    }

console.groupEnd("Circulo") // termina 