class Filme {
  constructor(titulo, diretor, emprestado = false) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.emprestado = emprestado;
  }

  emprestar() {
    if (this.emprestado) 
        return `O filme "${this.titulo}" está emprestado.`;
    this.emprestado = true;
    return `Você emprestou o filme "${this.titulo}", dirigido por ${this.diretor}.`;
  }

  devolver() {
    if (!this.emprestado) 
        return `O filme "${this.titulo}" está disponível.`;
    this.emprestado = false;
    return `Você devolveu o filme "${this.titulo}", dirigido por ${this.diretor}.`;
  }
}

module.exports = Filme;
