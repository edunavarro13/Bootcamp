/*

AQUI REALIZAMOS LA FUNCIÓN SINCRONAMENTE.

3+2+1 = 6;

Si el número es muy grande, va a tardar muchísimo y bloquea la ejecución.
*/
  syncFun = i=> {
  let total = 0;
  while(i>0){
      total +=i;
      i--;
  }
      return total;
  }

//   let resultado = syncFun(3);

//   console.log('El resultado es: '+ resultado);


/*
AHORA DE MANERA ASÍNCRONA.
Hace lo mismo que la anterior, pero sigue el hilo de ejecución y cuando acaba hace cb(result)
que es el callBack, para que cuando hacemos la llamada abajo, reciba result.

EN LAS FUNCIONES ASÍNCRONAS NO HAY RETURN PARA DEVOLVER DATOS, SOLO PARA CORTAR LA EJECUCIÓN.

*/

asyncFun = (i,cb) =>{
    setTimeout(()=>{
        let total =i;
        while(i--){
            total+=i;
        }
    cb(total);
    }, 0) // Es el tiempo de demora, el delay de ejecución de la función.
}

// console.log('empezamos');
// //console.time();
// asyncFun(99, (error,result) =>{
//     if(error){
//         console.error(error);   // Para comprobar si no se está ejecutando bien, no se usan ya.
//         return error;
//     }
//     asyncFun(result, sumatorioResultado =>{
//         console.log(sumatorioResultado, result);
//     });
   
// })

// console.log('He acabado');




/*
PROMESAS. THEN/CATCH
THEN => SATISFACTORIO.
CATCH=> SI NO ES SATISFACTORIO.

*/


let promiseFun = i =>
    new Promise((resolve,reject)=>{
        if(typeof i !== 'number' || i<0){
            reject('Introduce un número mayor que 0');
            return;
        }
        let total =i;
        while(i--){
            total +=i;
        }
        resolve(total);
    })

// promiseFun(9999)
//     .then(total =>console.log('Promesa resuelta correctamente: '+total))
//     .catch(e=> console.log(e));
    
// console.log('He acabado'); 



/*
CONCATENACIONES DE THEN, VAMOS PONIENDOLOS ANIDADOS Y VAMOS MODIFICANDO EL VALOR DE STR.
Se podría hacer con la ejecución de funciones también, haciendo una llamada sucesivas veces 
con el valor de la función realizada anteriormente.

*/
var hello = new Promise(function(resolve,reject){
    resolve('Hola');
})

// hello
//     .then(str => `${str} Mundo`)
//     .then(str=> `${str}!`)
//     .then(str=> console.log(str)); //Hola Mundo!



/*
    PROMISE ALL PUEDE RECIBIR UN ARRAY DE PROMESAS Y SE RESOLVERÁ CUANDO SE RESUELVAN
    TODAS LAS PROMESAS DEL ARRAY.

*/

var resolveIn = delay => new Promise((resolve,reject)=>{
    if(delay<0){
        reject(delay);
        return;
    }
    setTimeout( ()=> 
    console.log('resuelta en: ', delay));
    // resolve(delay),delay);
})

//  Promise.all([resolveIn(100),resolveIn(300),resolveIn(500)])
//      .then(values=>{
//          console.log(values); // [100,300,500]
//      })
//      .catch(console.error);


// resolveIn(-5000)
//     .then(result=> console.log(result))
//     .catch(delay => console.error('numero menor que cero',+ delay));



/*
    PROMESAS CORRIENDO EN PARALELO.
*/
console.time('promises runnning in parallel')
Promise.all([resolveIn(100),resolveIn(300),resolveIn(500)])
     .then(values=>{
         console.timeEnd('promises runnning in parallel'); // [100,300,500]
     })

     
/*
     PROMISES.RACE 
        LA PRIMERA QUE LLEGUE SE EJECUTA
*/

console.time('promises runnning in race')
Promise.race([resolveIn(100),resolveIn(-300),resolveIn(500)])
     .then(result =>{
        console.log(result);
        console.timeEnd('promises runnning in race'); // [100,300,500]
     })
     .catch(e=> console.log('promesa rechazada', e));


