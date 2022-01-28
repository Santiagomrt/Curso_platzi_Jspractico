//promedio

function calcularmediaaritmetica(lista){
  const sumalista = lista.reduce(
      function(valoracumulado = 0, nuevoelemento){
          return valoracumulado + nuevoelemento;
      }
  );
  const promediolista = sumalista / lista.length;
  
  return promediolista;
  
  };

//botones promedio

  function onclickbuttonpromedio(){
    const valorespromedio = document.getElementById("inputpromedio");

    const list = valorespromedio.value.split(',');

    const promedio = calcularmediaaritmetica(list);
    const resultado = document.getElementById("resultpromedio");
    resultado.innerText = "El promedio es: " + promedio.toFixed(2);
};




