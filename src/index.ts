/* Ejercicio: Múltiplos
• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero
*/

let valorInUno: number = Number(prompt(`Ingrese Primer Valor:`));
let valorInDos: number = Number(prompt(`ingrese Segundo Valor:`));
let resultado: boolean = true;

function esMultiplo(valorUno: number, valorDos: number): boolean {
  let respuesta: boolean = true;
  let resto: number = valorUno % valorDos;
  if (resto === 0) {
    respuesta = true;
  } else {
    respuesta = false;
  }
  return respuesta;
}

resultado = esMultiplo(valorInUno, valorInDos);
console.log(`Los valores Ingresados son Multiplos?: ${resultado}`);
