class Conta {

    constructor(titular, conta) {

        this.titular = titular;
        this.conta = conta;
        this._saldo = 0.0
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor;
    }

    get Saldo() {
        return this._saldo;
    }
}
