class CodigoHelper {

    constructor() {
      throw new Error('Esta classe não pode ser instanciada');
    }

    static _valida(texto) {

        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }
}


// let codigo1 =  CodigoHelper._valida('GWZ-JJ-12'); // válido
// console.log(codigo1);
// let codigo2 = CodigoHelper._valida('1X1-JJ-12'); // inválido
// console.log(codigo2);
