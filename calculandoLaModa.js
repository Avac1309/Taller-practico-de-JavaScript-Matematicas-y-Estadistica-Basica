
        PlatziMath.esPar = function esPar(lista) {
            return !(lista.length % 2 );
        }
        PlatziMath.esImpar = function esImpar(lista) {
            return lista.length % 2; 
        }

        
        PlatziMath.calculoModa = function calculoModa(lista) {
            const listaCount = {};

            for(let  i = 0; i < lista.length; i++) {
                const elemento = lista[i];

                if(listaCount[elemento]) {
                    listaCount[elemento] += 1;
                } else {
                    listaCount[elemento] = 1;
                }
            }

            const listaArray = Object.entries(listaCount); 
            const listaOrdenada = ordenarListaBidimensional(listaArray);
            const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
            console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});

            console.log("La moda es: " + listaMaxNumber[0])

            //o tambien podemos imprimir la moda de esta manera
            //              se comentan los dos ultimos console.log
            //       const moda = listaMaxNumber[0];
            //      return moda;
        }

    
        PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){ 
            const lista = PlatziMath.ordenarLista (listaDesordenada);
            const listaPar = PlatziMath.esPar(lista);

            if (listaPar) {
                const indexMitad1ListaPar = (lista.length / 2) - 1;
                const indexMitad2ListaPar = lista.length / 2;
                const listaMitades = [];
                listaMitades.push(lista[indexMitad1ListaPar]);
                listaMitades.push(lista[indexMitad2ListaPar]);

                const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
                return medianaListaPar;
            } else {
                const indexMedianaListaImpar = Math.floor(lista.length / 2);
                const medianaListaImpar = lista[indexMedianaListaImpar];
                console.log(indexMedianaListaImpar);
                console.log(lista[medianaListaImpar]);
                return medianaListaImpar;
            }
        }

        PlatziMath.calcularPromedio = function calcularPromedio (lista) {
            function sumarTolosLosElementos (valorAcumulado, nuevoValor){       return valorAcumulado + nuevoValor;
                }

            const sumaLista = lista.reduce(sumarTolosLosElementos);
            const promedio = sumaLista / lista.length;
            return promedio;
        }
    
        PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
            function ordenarListaSort(valorAcumulado, nuevoValor){

                return valorAcumulado - nuevoValor;
            }

            const lista = listaDesordenada.sort((a,b) => a-b);

            return lista;
        }
        

        PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada) {
            function ordenarListaSort(valorAcumulado, nuevoValor){
                return valorAcumulado[1] - nuevoValor[1];
            }

            const lista = listaDesordenada.sort(ordenarListaSort);
            return lista;
        }