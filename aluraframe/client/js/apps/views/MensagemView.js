class MensagemView {

    constructor(elemento) {
        this.elemento = elemento;
    }

    _template(model) {
        return `<p class="alert alert-info">${model.texto}</p>`;
    }

    update(model) {
        this.elemento.innerHTML = this._template(model);
    }
}
