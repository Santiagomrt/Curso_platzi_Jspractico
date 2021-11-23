//Codigo del cuadrado

    console.group("Cuadrado");

    function perimetrocuadrado (lado){
        return lado * 4;
    };

    function areacuadrado (lado){
        return  lado * lado};
    
    console.groupEnd();

//Codigo del triangulo

    console.group("Triangulos");

    function perimetrotriangulo(lado1, lado2, base){
        return lado1+lado2+base;
    };
 
    function areatriangulo(base, altura){
        return (base*altura)/2;
    };

    console.groupEnd();

//Codigo del circulo

    console.group("Circulos");

    function diametrocirculo (radio){
        return radio *2;
    }

    //pi
    const PI = Math.PI;
    console.log("PI es: " + PI);

    //circunferencia
    function circunferenciacirculo (radio){
        const diamentro = diametrocirculo (radio);
        return diamentro * PI;
    };

    //area
    function areacirculo (radio){
        return (radio * radio ) * PI;
    }

    console.groupEnd();


////////////////////////////////////////////////////////////////////Interraccion html 

    //rectangulo
    function calcularperimetrocuadrado(){
        const input = document.getElementById("inputcuadrado");
        const value = input.value;

        const perimetro = perimetrocuadrado(value);
        alert(perimetro);
    };

    function calcularareacuadrado(){
        const input = document.getElementById("inputcuadrado");
        const value = input.value;

        const area = areacuadrado(value);
        alert(area);
    };

    //triangulo 

    function calcularperimetrotriangulo(){
        const input1 = document.getElementById("inputtriangulo1");
        const input2 = document.getElementById("inputtriangulo2");
        const input3 = document.getElementById("inputtriangulobase");
        const value1 = input1.value;
        const value2 = input2.value;
        const value3 = input3.value;
        
        const perimetro = perimetrotriangulo(value1, value2, value3);
        alert(perimetro);
    };

    function calcularareatriangulo(){
        const input1 = document.getElementById("inputtriangulobase");
        const input2 = document.getElementById("inputtrianguloaltura");
        const value1 = input1.value;
        const value2 = input2.value;

        const area = areatriangulo(value1, value2);
        alert (area);
    };

    //circulo

    function calculardiametrocirculo(){
        const input = document.getElementById("inputcirculo");
        const value = input.value;

        const diametro = diametrocirculo (value);
        alert (diametro);
    };

    function calcularcircunferenciacirculo(){
        const input = document.getElementById("inputcirculo");
        const value = input.value;

        const circunferencia = circunferenciacirculo (value);
        alert (circunferencia);
    };

    function calcularareacirculo() {
        const input = document.getElementById("inputcirculo");
        const value = input.value;

        const area = areacirculo (value);
        alert (area);
    };

//////////reto matematico 

    function alturatrianguloiso (lado1, lado2, base){
        if (lado1 !=lado2){
            console.error ("los lados a y b no son iguales");
        } else{
            const cateto = (base**2) / 4;
            const hipotenusa = (lado1) ** 2;
            return Math.sqrt((hipotenusa) - (cateto));
            };
        };

    function calcularalturatrianguloiso(){
        const input1 = document.getElementById("inputtrianguloiso1");
        const input2 = document.getElementById("inputtrianguloiso2");
        const input3 = document.getElementById("inputtriangulobaseiso");

        const value1 = input1.value;
        const value2 = input2.value;
        const value3 = input3.value;

        const altura = alturatrianguloiso (value1, value2, value3);
            
            if (value1 === value2 && value1 !=value3){alert (altura)}else {  alert ("no es un triangulo isoceles")
        };
    };