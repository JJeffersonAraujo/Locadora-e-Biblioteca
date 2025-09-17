class Locadora {
  constructor() {
    this.filmes = [];
  }

  adicionarFilme(filme) {
    this.filmes.push(filme);
    console.log(`Filme "${filme.titulo}" adicionado à locadora.`);
  }

  listarFilmes() {
    if (this.filmes.length === 0) {
      console.log("Nenhum filme cadastrado.");
      return;
    }
    console.log("Filmes disponíveis:");
this.filmes.forEach(function(filme, i) {
    let status;
    if (filme.emprestado) {
        status = "Emprestado";
    } else {
        status = "Disponível";
    }

    console.log(
        (i + 1) + " - " + filme.titulo + " (" + filme.diretor + ") - " + status
    );
});

  }
}

module.exports = Locadora;
