//Variables base:
    //Salario
        const valuesalary = document.getElementById("inputsalarynumber");  
        const salario = valuesalary.value;
    //costos
        const valuecostos = document.getElementById("inputcostnumber");
        const costos = valuecostos.value;
    //porcentajes
        const saludporcentaje = (12.5 / 100);
        const pensionporcentaje = (16 / 100);
        const arlporcentaje = (0.522 / 100);

//Salud

    function calcularsaludprestacion (salario, saludporcentaje){
        const IBC = (40/100) * salario;
        const salud = saludporcentaje*IBC;

        return salud;
    };

    function calcularsaludindependiente (salario, saludporcentaje, costos){
    const IBCINDPEPENDIENTE = (40/100)*(salario-costos);
    const saludcostos = saludporcentaje*IBCINDPEPENDIENTE;

    return saludcostos;
    };

//pension
    function calcularpensionprestacion (salario, pensionporcentaje){
    const IBC = (40/100) * salario;
    const pension = pensionporcentaje*IBC;
    return pension;
    };

    function calcularpensionindependiente (salario, pensionporcentaje,costos){
    const IBCINDPEPENDIENTE = (40/100)*(salario-costos);
    const pensioncostos = pensionporcentaje*IBCINDPEPENDIENTE;
    return pensioncostos;
    };

//ARL
    function calculararlprestacion (salario, arlporcentaje){
    const IBC = (40/100)*salario;
    const arl = arlporcentaje*IBC;

    return arl;
    };

    function calculararlindependiente (salario, arlporcentaje, costos){   
    const IBCINDPEPENDIENTE = (40/100)*(salario-costos);
    const arlcostos = arlporcentaje*IBCINDPEPENDIENTE;
    return arlcostos;
    };

//Resultado final

    function onclickbuttonresult(){
    if(document.getElementById("independientegastoscheckbox").checked){

        const saludindependiente = calcularsaludindependiente (salario, saludporcentaje, costos);
        const pensionindependiente = calcularpensionindependiente (salario, pensionporcentaje,costos);
        const arlindependiente = calculararlindependiente (salario, arlporcentaje, costos);

        const totalindependiente = saludindependiente + pensionindependiente + arlindependiente;
    
        const resultadofinal = document.getElementById("resultadofinal");
            resultadofinal.innerText = "Siendo su salario de: $" + salario + " COP." +
            "\n Y sus gastos: $" + costos + " COP."+ 
            "\n Debe consigar:" + 
            "\n "+
            "\n $" + saludindependiente + " COP" + " de salud," +
            "\n $" + pensionindependiente + " COP" +" de pension." +
            "\n $" + arlindependiente + " COP" + " de arl." + 
            "\n"+
            "\n Total a pagar de seguridad social: $" + totalindependiente + " COP."
            
        } else {
            const salud = calcularsaludprestacion(salario, saludporcentaje);
            const pension = calcularpensionprestacion(salario, pensionporcentaje);
            const arl = calculararlprestacion(salario, arlporcentaje);
        
            const totalprestacion = salud + pension + arl;
        
            const resultadofinal = document.getElementById("resultadofinal");
                resultadofinal.innerText = "Siendo su salario de: $" + salario + " COP." +
                "\n Debe consigar:" + 
                "\n "+
                "\n $" + salud + " COP" + " de salud," +
                "\n $" + pension + " COP" +" de pension." +
                "\n $" + arl + " COP" + " de arl." + 
                "\n"+
                "\n Total a pagar de seguridad social: $" + totalprestacion + " COP."
    };
    };