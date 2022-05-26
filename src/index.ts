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
