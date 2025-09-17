class Livro {
  constructor(titulo, autor, emprestado = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.emprestado = emprestado;
  }

  emprestar() {
    if (this.emprestado) return `O livro "${this.titulo}" está emprestado.`;
    this.emprestado = true;
    return `Você emprestou o livro "${this.titulo}" de ${this.autor}.`;
  }

  devolver() {
    if (!this.emprestado) return `O livro "${this.titulo}" está disponível.`;
    this.emprestado = false;
    return `Você devolveu o livro "${this.titulo}" de ${this.autor}.`;
  }
}

module.exports = Livro;
