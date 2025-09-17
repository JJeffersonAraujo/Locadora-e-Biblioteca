class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.itensEmprestados = [];
  }

  pegarItem(item) {
    if (!item.emprestado) {
      console.log(item.emprestar());
      this.itensEmprestados.push(item);
    } else {
      console.log(`O item "${item.titulo}" já está emprestado.`);
    }
  }

  devolverItem(item) {
    const index = this.itensEmprestados.indexOf(item);
    if (index !== -1) {
      console.log(item.devolver());
      this.itensEmprestados.splice(index, 1);
    } else {
      console.log(`${this.nome} não possui o item "${item.titulo}".`);
    }
  }

  listarItens() {
    if (this.itensEmprestados.length === 0) {
      console.log(`${this.nome} não possui itens emprestados.`);
    } else {
      console.log(`Itens emprestados por ${this.nome}:`);
      this.itensEmprestados.forEach((item, i) => {
        console.log(`${i + 1} - ${item.titulo}`);
      });
    }
  }
}

module.exports = Usuario;
