export default class Comentario {
    constructor(nome, coment) {
        this.id = this.generateId();
        this.nome = nome;
        this.coment = coment;
    }

    generateId() {
        return Math.floor(Math.random() * 9999);
    }
}