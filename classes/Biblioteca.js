class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    listarLivros() {
        if (this.livros.length === 0) {
            console.log("Nenhum livro cadastrado.");
            return;
        }
        console.log("Lista de livros:");
        this.livros.forEach(function (livro, i) {
            let status;
            if (livro.emprestado) {
                status = "Emprestado";
            } else {
                status = "Disponível";
            }

            console.log(
                (i + 1) + ". " + livro.titulo + " - " + livro.autor + " [" + status + "]"
            );
        });


    }
}

module.exports = Biblioteca;
