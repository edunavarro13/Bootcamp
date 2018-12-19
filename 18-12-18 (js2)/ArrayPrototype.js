//////////////////////////
// Array.prototype.forEach()

var numeros = [6, 4, 2];
// podemos iterar mediante forEach
numeros.forEach(function(valor) {
  // console.log( valor ); // Output: 6, 4, 2
});

////////////////////////
// Array.prototype.sort()

var nombres = ['Juan', 'Paco', 'Ana', 'Alba', 'Blanca', 'anastasia'];
nombres.sort();
// console.log(nombres);

var numeros2 = [2, 50, 'a', 'B', 300, 3, 4, 5];
numeros2.sort();
// console.log(numeros2);

var nums = [3, 1, 4, 9, 12, 34, 99];

var resta = function(a, b) {
  return b - a;
};
nums.sort(resta);
// console.log(nums);

var nombres2 = ['Juan', 'Paco', 'Ana', 'Alba', 'Blanca', 'anastasia'];
nombres2.sort(function(a, b) {
  return a.toUpperCase() < b.toUpperCase();
});
// console.log(nombres2);

// ORDENAR POR TAMAÑO DEL STRING
nombres.sort(function(a, b) {
  return a.length - b.length;
});
// console.log(nombres);

nombres.sort(function(a, b) {
  return a > b;
});
// console.log(nombres);

var items = [{ name: 'a123ASAasdSD', value: 11 }, { name: 'bDSAASD', value: 22 }, { name: 'aas', value: 33 }];

items.sort(function(a, b) {
  return a.value < b.value;
});
// console.log(items);

///////////////////////////////////
// Array.prototype.map(mappingFunction)

function mappingFunction(x) {
  return x.length;
}

var ciudades = ['Valencia', 'Madrid', 'Alicante', 'Nueva York'];
var longitudes = ciudades.map(mappingFunction);
// console.log(ciudades);
// console.log(longitudes);

let gente = [
  {
    nombre: 'Jamiro',
    edad: 45,
  },
  {
    nombre: 'Juan',
    edad: 35,
  },
  {
    nombre: 'Paco',
    edad: 34,
  },
  {
    nombre: 'Pepe',
    edad: 14,
  },
  {
    nombre: 'Pilar',
    edad: 24,
  },
  {
    nombre: 'Laura',
    edad: 24,
  },
  {
    nombre: 'Jenny',
    edad: 10,
  },
];

var nuevaArray = gente.map(function(persona) {
  return {
    iniciales: persona.nombre[0] + persona.nombre[1] + persona.nombre[2],
    nacimiento: new Date().getUTCFullYear() - persona.edad,
    longitudNombre: persona.nombre.length,
    ultimaLetra: persona.nombre[persona.nombre.length - 1],
  };
});

// console.log(nuevaArray);

///////////////////
// Array.prototype.filter()

var mayores = gente.filter(function(persona) {
  return persona.edad > 18;
});
//  console.log( mayores );
//  console.log( gente );

/////////////////
// Array.prototype.reduce()
var z = [1, 2, 3, 4];
var reducer = function(returnAnterior, numero) {
  return returnAnterior + numero;
};
var total = z.reduce(reducer, 200);

// var primerReturn = reducer(0, z[0]);
// var segundoReturn = reducer(primerReturn, z[1]);
// var tercerReturn = reducer(segundoReturn, z[2]);
// var cuartoReturn = reducer(tercerReturn, z[3]);
// var _total = cuartoReturn;

console.log(total);

var reduceFun = function(total, persona) {
  // console.log(total, persona);

  return total + persona.nombre.length;
};

var resumen = gente.reduce(reduceFun, 0);

// console.log(resumen);

// Combinando métodos

var añoNacimiento = function(persona) {
  return 2018 - persona.edad;
};

var empezaPorJ = function(persona) {
  return persona.nombre[0].toUpperCase() === 'J';
};

var nacimientosQueEmpiezanPorJ = gente
  .filter(empezaPorJ) // array
  .map(añoNacimiento)
  .sort(function(a, b) {
    return b - a;
  }) // array
  .reduce(function(t, i) {
    return t + i;
  }, '') // string
  .split('') // array
  .map(function(i) {
    return parseFloat(i);
  }) // array
  .join('--') //string
  .replace('--', '@');
console.log(nacimientosQueEmpiezanPorJ);
