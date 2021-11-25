const lista1 = [
    100,
    200,
    500,
    400000000];

const mitadlista1 = parseInt(lista1.length / 2);

function espar (numero){
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
};

let mediana;

if (espar(lista1.length)) {

} else {
    mediana = lista1 [mitadlista1];
}