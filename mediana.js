function calcularmediana (lista){
    function calcularmediaaritmetica(lista){
      const sumalista = lista.reduce(
          function(valoracumulado = 0, nuevoelemento){
              return valoracumulado + nuevoelemento;
          }
      );
      const promediolista = sumalista / lista.length;
      
      return promediolista;
      
      };
    
    lista.sort();
      
    const mitadlista = parseInt(lista.length / 2);

    function espar (numero){
        if (numero % 2 === 0){
            return true;
        } else {
            return false;
        }
    };

    let mediana;

    if (espar(lista.length)) {
        const elemento1 = lista[mitadlista - 1];
        const elemento2 = lista[mitadlista];

        const promedioelemento1y2 = calcularmediaaritmetica([
            elemento1, 
            elemento2]
            );
        
    mediana = promedioelemento1y2

    } else {
        mediana = lista[mitadlista];
    };

    return mediana;
    
};