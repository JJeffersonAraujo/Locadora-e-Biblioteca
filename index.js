// index.js

class Livro {
  constructor(titulo, autor, emprestado = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.emprestado = emprestado; // false = disponível, true = já emprestado
  }

  emprestar() {
    if (this.emprestado) {
      return `❌ O livro "${this.titulo}" já está emprestado.`;
    } else {
      this.emprestado = true;
      return `✅ Você emprestou o livro "${this.titulo}" de ${this.autor}.`;
    }
  }

  devolver() {
    if (!this.emprestado) {
      return `❌ O livro "${this.titulo}" já está disponível, não é preciso devolver.`;
    } else {
      this.emprestado = false;
      return `📚 Você devolveu o livro "${this.titulo}" de ${this.autor}.`;
    }
  }
}

// Criando um livro disponível
const meuLivro = new Livro("Livro de KIKO", "Jefferson Araujo");

// Tentando emprestar
console.log(meuLivro.emprestar()); // empresta
console.log(meuLivro.emprestar()); // avisa que já está emprestado

// Devolvendo
console.log(meuLivro.devolver());  // devolve
console.log(meuLivro.devolver());  // avisa que já está disponível
