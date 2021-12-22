
function calcularmoda(lista){
    
    const listacount = {};
    
    lista.map(
        function (elemento){
           if (listacount[elemento]){
                listacount[elemento] += 1;
           }  else {
                listacount[elemento] = 1;
           }
        }
    ); 

    const listaarray = Object.entries(listacount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = listaarray [listaarray.length - 1];

    console.log(moda);
    
};

