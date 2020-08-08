let preguntas = parseInt(prompt(`¿Cuál de las operaciones deseas realizar?
1. Suma de 2 números
2. Potencia de un número
3. Suma de potencias cúbicas de 3 números
4. Cálculo del área de un triángulo
5. Calculadora
`));

switch (parseInt(preguntas)) {
  case 1:
      ejercicio1();
      break;
  case 2:
      ejercicio2();
      break;
  case 3:
      ejercicio3();
      break;
  case 4:
      ejercicio4();
      break;
  case 5:
      ejercicio5();
      break;

  default:
      alert("Escoge entre los números del 1 al 15")
      break;
}

// EJERCICIO 1
function ejercicio1 () {
  let a = parseFloat(prompt("Ingresa primer número"));
  let b = parseFloat(prompt("Ingresa segundo número"));

  let sum = a+b;

  alert(`La suma de los números es igual a ${sum}`);
}
/*ejercicio1()*/

/*----------------------------------------------------------------*/

//EJERCICIO 2
function ejercicio2 () {
  let n = parseFloat(prompt("Ingresa el número base"));
  let x = parseFloat(prompt("Ingresa la potencia"));
  let total = Math.pow(n, x);

  alert(`El número ${n} a la potencia ${x} es igual a ${total}`)
}
/*ejercicio2()*/

/*----------------------------------------------------------------*/

//EJERCICIO 3
function ejercicio3 () {
  let numero1 = parseFloat(prompt("Ingresa el primer número"));
  let numero2 = parseFloat(prompt("Ingresa el segundo número"));
  let numero3 = parseFloat(prompt("Ingresa el tercer número"));

  let SumofCubes = Math.pow(numero1, 3)+Math.pow(numero2, 3)+Math.pow(numero3, 3);

  alert(`La suma de potencias cúbicas de los números ${numero1}, ${numero2} y ${numero3} es igual a ${SumofCubes}`)
}
/*ejercicio3()*/

/*----------------------------------------------------------------*/

// EJERCICIO 4
function ejercicio4 () {
  let base = parseFloat(prompt("Ingresa la base del triángulo"));
  let altura = parseFloat(prompt("Ingresa la altura del triángulo"));

  let triArea = (base*altura)/2

  alert(`El área del triángulo es igual a ${triArea}`)
}
/*ejercicio4()*/

/*----------------------------------------------------------------*/
//EJERCICIO 5
function ejercicio5 () {
  let operador = (prompt("¿Deseas sumar, restar, dividir, multiplicar, residuo?"));

  switch(operador) {
    case "sumar":
      let a = parseFloat(prompt("Ingresa el primer número"));
      let b = parseFloat(prompt("Ingresa el segundo número"));

      let sum = a+b;

      alert(`La suma de los números ${a} y ${b} es ${sum}`);
      break;

    case "restar":
      let c = parseFloat(prompt("Ingresa el primer número"));
      let d = parseFloat(prompt("Ingresa el segundo número"));

      let resta = c-d;

      alert(`La resta de los números ${c} y ${d} es ${resta}`);
      break;

    case "dividir":
      let e = parseFloat(prompt("Ingresa el primer número"));
      let f = parseFloat(prompt("Ingresa el segundo número"));

      let div = e/f;

      alert(`La división de los números ${e} y ${f} es ${div}`);
      break;  
      
    case "multiplicar":
      let g = parseFloat(prompt("Ingresa el primer número"));
      let h = parseFloat(prompt("Ingresa el segundo número"));

      let multiplicacion = g*h;

      alert(`La multiplicación de los números ${g} y ${h} es ${multiplicacion}`);
      break; 
      
    case "residuo":
      let i = parseFloat(prompt("Ingresa el primer número"));
      let j = parseFloat(prompt("Ingresa el segundo número"));

      let residuo = i%j;

      alert(`El residuo de los números ${i} y ${j} es ${residuo}`);
      break;
    
    default:
        alert(`El parámetro no es reconocido`);        
  }
}

/*ejercicio5()*/

/*----------------------------------------------------------------*/


//EJERCICIO 8

function ejercicio8() {

  let arr1 = [4,2,7,1];
  let arr2 = [20,70,40,90];
  let arr3 = [1,2,0];
  let arrFinal = [];

  let mayor1 = Math.max.(...arr1);
  let mayor2 = Math.max.(...arr2);
  let mayor3 = Math.max.(...arr3);

  alert (`Los números mayores de cada matriz son ${arrFinal.push(mayor1)}, ${arrFinal.push(mayor2)}, ${arrFinal.push(mayor3)}`)
}  
ejercicio8()
/*----------------------------------------------------------------*/







