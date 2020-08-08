let preguntas = parseInt(prompt(`Escribe del 1 al 22`));

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
  case 6:
      ejercicio6();
      break;
  case 7:
      ejercicio7();
      break;
  case 8:
      ejercicio8();
      break;
  case 9:
      ejercicio9();
      break;
  case 10:
      ejercicio10();
      break;
  case 11:
      ejercicio11();
      break;
  case 12:
      ejercicio12();
      break;
  case 13:
      ejercicio13();
      break;
  case 14:
      ejercicio14();
      break;
  case 15:
      ejercicio15();
      break;
  case 16:
      ejercicio15();
      break;
  case 17:
      ejercicio15();
      break;
  case 18:
      ejercicio15();
      break;
  case 19:
      ejercicio12();
      break;
  case 20:
      ejercicio13();
      break;
  case 21:
      ejercicio14();
      break;
  case 22:
      ejercicio15();
      break;
  default:
      alert("Escoge entre los números del 1 al 22")
      break;
}


//EJERCICIO 1
function ejercicio1(){

  let setName = (name, lastname, age) => {
  alert(`Hola, mi nombre es ${name} ${lastname} y mi edad es ${age}`)
  }
  setName('Mery', 'Vera', 40)
}
//ejercicio1()

/*----------------------------------------------------------------*/

//EJERCICIO 2

function ejercicio2(){

  let sumOfCubes = (...numbers) => {
    alert (`La suma de los cubos es ${numbers.map(n => n*n*n).reduce((a, b) => a + b, 0)}`)
  }
  sumOfCubes(1, 5, 9)
}
//ejercicio2()
/*----------------------------------------------------------------*/

function ejercicio3 () {
  
  let getTypeOf = (value) => {
    alert (`El tipo de dato de ${value}  es ${typeof (value)}`)
  }
  getTypeOf(40)
}
//ejercicio3()

/*----------------------------------------------------------------*/

//EJERCICIO 4
function ejercicio4 () {
  
  let number = (...numbers) => {
    alert (numbers.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual
    },0))
  }
  number(1,2,3,4,5)
}
//ejercicio4()

/*----------------------------------------------------------------*/

//EJERCICIO 5
function ejercicio5() {

  let noString = (...values) => {
    alert (values.filter((a) => {
       return (typeof (a)!= 'string')
    }));
  }
  noString('Hola me llamo Mery Vera y no tengo', 40, 'años, tengo', 19)
}
//ejercicio5()

/*----------------------------------------------------------------*/

//EJERCICIO 6
function ejercicio6() {

  let minMax = (...numbers) => {
    alert (`Los números mínimos y máximos son ${(Math.min.apply(null, numbers))}, ${(Math.max.apply(null, numbers))}`); 
  }
  minMax(1,2,3,4,5)
}
//ejercicio6()

/*----------------------------------------------------------------*/

//EJERCICIO 7
function ejercicio7() {

  let phoneNumber = (...numbers) => {
    alert (`El número de teléfono es ( ${numbers.splice(0, 3)} ) ${numbers.splice(0, 3)} - ${numbers.splice(0)}`)
  }
  phoneNumber(1,2,3,4,5,6,7,8,9,0)
}
//ejercicio7()

/*----------------------------------------------------------------*/

//EJERCICIO 8

function ejercicio8() {

  let findLargestNums = (numbers) => {
    let arrayMax = [];
    numbers.forEach(a => arrayMax.push(Math.max.apply(null,a)))
    alert (`Los números mayores de cada matriz son => ${arrayMax}`)
  }
  findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
}
//ejercicio8()      

/*----------------------------------------------------------------*/

//EJERCICIO 9

function ejercicio9() {
  
  let firstLastIndex = (word, letter) => {
    alert(`El index de la primera letra ${letter} es ${word.indexOf(letter)} , y el index  de la última letra ${letter} es ${word.lastIndexOf(letter)}`)
  }
  firstLastIndex('Circunferencia', 'n')
}  
//ejercicio9()

/*----------------------------------------------------------------*/

//EJERCICIO 10

function ejercicio10() {
  
  obj = {
    a: '1',
    b: '2',
    c: '3'
  }

  alert (`el objeto es convertido en array y cuenta con los siguientes elementos: [${Object.entries(obj)}]`)
}  
//ejercicio10()

/*----------------------------------------------------------------*/

//EJERCICIO 11

function ejercicio11() {
  
  let getBudget = (...values) => {
    alert(`La suma de presupuestos es ${values.map(a => a.budget).reduce((b, c) => b + c, 0)}`)
  }
  getBudget(
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  );
}  
//ejercicio11()

/*----------------------------------------------------------------*/

//EJERCICIO 12

function ejercicio12() {
  
  let getStudentNames = (...values) => {
    alert(`Los nombres de los estudiantes son: ${values.map(a => a.name)}`)
  }
  getStudentNames(
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  );
}  
//ejercicio12()

/*----------------------------------------------------------------*/

//EJERCICIO 13

function ejercicio13() {

  let emociones = {
      like: 2,
      dislikes: 3,
      followers: 10
  }
  alert (`Nuevo Array : ${Object.entries(emociones)}`)    
}
//ejercicio13()

/*----------------------------------------------------------------*/

//EJERCICIO 14

function ejercicio14() {
  
  let squaresSum = (number) => {
  let array = [];
    for (i = 1; i <= number; i++){
      array.push(i);
    }
    alert (`La suma de todos los cuadrados es ${array.map(a => a*a).reduce((a,b) => a+b, 0)}`)
  }
  squaresSum(3)   
}
//ejercicio14()

/*----------------------------------------------------------------*/

//EJERCICIO 15

function ejercicio15() {

  let multiplyByLength = (...arr) => {
  let length = (arr.length);
  alert (`La multiplicación de todos los valores es ${arr.map( a => a*length)}`)
  }
  multiplyByLength(2,3,1,0)
}
//ejercicio15()

/*----------------------------------------------------------------*/

//EJERCICIO 16

function ejercicio16() {

  let countDown =(number) => {
    let arr = [];
    for (i = number; i >=0; i--) {
      arr.push(i);
    }
    alert (`La cuenta regresiva de ${number} es [${arr}]`)   
  }
  countDown(5);
}
//ejercicio16()

/*----------------------------------------------------------------*/

//EJERCICIO 17

function ejercicio17() {
  let difMaxMin = (...numbers) => {
    let max = Math.max.apply(null, numbers);
    let min = Math.min.apply(null, numbers);

    alert(`El número mayor es ${max}, el número menor es ${min} y la diferencia es ${max-min}`)
  }
  difMaxMin(10,4,1,4,-10,-50,32,21);
}
//ejercicio17()
                                                      
/*----------------------------------------------------------------*/

//EJERCICIO 18

function ejercicio18() {
  
  let filterList = (...numbers) => {
    alert(`Los números enteros son [${numbers.filter(a => typeof (a) != 'string')}]`)
  }
  filterList(1, 2, 3, "x", "y", 10);
}
//ejercicio18()
                                                      
/*----------------------------------------------------------------*/

//EJERCICIO 19

function ejercicio19() {
  
  let repeat = (elemento, tiempos) => {
    let array = [];
    for (i = 1; i <=tiempos; i++) {
      array.push(elemento);
  }
    alert(`El array contiene ${tiempos} veces el número ${elemento} => [${array}]`)
  }
  repeat(13,5);
}
//ejercicio19()
                                                      
/*----------------------------------------------------------------*/

//EJERCICIO 20

function ejercicio20() {
  
  let replace = (value, old, new_) => {
    alert(value.replace(old, new_))
  }
  replace('apples and bananas', /a/g, 'u');
}
//ejercicio20()                                                   

/*----------------------------------------------------------------*/

//EJERCICIO 21

function ejercicio21() {
  
  let findNemo = (value) => {
    alert(`I found Nemo at ${value.search('Nemo')}!`)
  }
  findNemo('I´m finding Nemo!');
}
//ejercicio21()                                                   

/*----------------------------------------------------------------*/

//EJERCICIO 22
function ejercicio22() {
  
  let capLast = (value) => {
    let length = value.length; 
    alert(`${value.substring(0, length - 1) + value.substring(length - 1).toUpperCase()}`)
  }
  capLast('hello');
}
//ejercicio22()                                                   

/*----------------------------------------------------------------*/




