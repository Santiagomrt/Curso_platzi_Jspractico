const salarioscol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salarioscolsorted = salarioscol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//mediana

function espar(numero){
    return (numero % 2 === 0)
    //{ ESTO ES IGUAL A RETURN (NUMERO % 2=== 0) PORQUE YA RETORNA 0
    //    return true;
    //}else{
    //    return false;}
};

function calcularmediaaritmetica(lista){
    const sumalista = lista.reduce(
        function(valoracumulado = 0, nuevoelemento){
            return valoracumulado + nuevoelemento;
        }
    );
    const promediolista = sumalista / lista.length;
    
    return promediolista;
    
    };

function medianasalarios (lista){
    const mitad = parseInt(lista.length/2);

    if (espar(lista.length)){
        const personamitad1 = lista [mitad - 1];
        const personamitad2 = lista [mitad];

        const mediana = calcularmediaaritmetica(personamitad1, personamitad2);
        return mediana;
    }else{
        const personamitad = lista[mitad];
        return personamitad;
    }
};