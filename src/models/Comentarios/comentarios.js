class ComentariosRepository {
    constructor() {
        this.list = [];
    }

    getAllComentarios() {
        return this.list;
    }

    getComentarioById(id) {
        const comentario = this.list.find(comentario => comentario.id == id);
        return comentario;
    }

    postComentario(comentario) {
        this.list.push(comentario);
    }

    putComentario(id, nome, comentario) {
        const comentario = this.getCompanyById(id);

        console.log('comentario:', comentario);

        console.log(nome, coment);


        if(comentario) {
            comentario.nome = nome;
            comentario.coment = coment;
        }

        console.log('novo comentario:', comentario);

        return comentario;
    }

    deleteComentario(id) {
        return this.list = this.list.filter((comentario) => comentario.id !== id);
    }
}

const listComentarios = new ComentariosRepository();
export default listComentarios;