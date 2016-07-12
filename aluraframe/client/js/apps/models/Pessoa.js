class Pessoa {

    constructor(nome, sobrenome) {

        this._nome = nome;
        this._sobrenome = sobrenome;
        Object.freeze(this);
    }

    get obtemNomeCompleto() {
        return this._nome + " " this._sobrenome;
    }
}
