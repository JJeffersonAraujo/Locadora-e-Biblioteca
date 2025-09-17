const readline = require("readline");

// Importando classes
const Livro = require("./classes/Livro");
const Filme = require("./classes/Filme");
const Usuario = require("./classes/Usuario");
const Biblioteca = require("./classes/Biblioteca");
const Locadora = require("./classes/Locadora");

// Objetos globais
const biblioteca = new Biblioteca();
const locadora = new Locadora();
const usuarios = [];

// Configuração readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu
function mostrarMenu() {
  console.log("\n==== MENU ====");
  console.log("1 - Adicionar Livro");
  console.log("2 - Adicionar Filme");
  console.log("3 - Adicionar Usuário");
  console.log("4 - Listar Livros");
  console.log("5 - Listar Filmes");
  console.log("6 - Usuário pegar item");
  console.log("7 - Usuário devolver item");
  console.log("8 - Listar itens do usuário");
  console.log("0 - Sair");
}

function iniciar() {
  mostrarMenu();
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Título do livro: ", (titulo) => {
          rl.question("Autor do livro: ", (autor) => {
            biblioteca.adicionarLivro(new Livro(titulo, autor));
            iniciar();
          });
        });
        break;

      case "2":
        rl.question("Título do filme: ", (titulo) => {
          rl.question("Diretor do filme: ", (diretor) => {
            locadora.adicionarFilme(new Filme(titulo, diretor));
            iniciar();
          });
        });
        break;

      case "3":
        rl.question("Nome do usuário: ", (nome) => {
          usuarios.push(new Usuario(nome));
          console.log(`Usuário "${nome}" adicionado.`);
          iniciar();
        });
        break;

      case "4":
        biblioteca.listarLivros();
        iniciar();
        break;

      case "5":
        locadora.listarFilmes();
        iniciar();
        break;

      case "6":
        if (usuarios.length === 0) {
          console.log("Nenhum usuário cadastrado.");
          iniciar();
          break;
        }
        console.log("Usuários:");
        usuarios.forEach((u, i) => console.log(`${i + 1} - ${u.nome}`));
        rl.question("Escolha o usuário: ", (uIndex) => {
          const usuario = usuarios[uIndex - 1];
          console.log("1 - Livro | 2 - Filme");
          rl.question("Escolha o tipo de item: ", (tipo) => {
            if (tipo === "1") {
              biblioteca.listarLivros();
              rl.question("Escolha o livro: ", (lIndex) => {
                const livro = biblioteca.livros[lIndex - 1];
                usuario.pegarItem(livro);
                iniciar();
              });
            } else {
              locadora.listarFilmes();
              rl.question("Escolha o filme: ", (fIndex) => {
                const filme = locadora.filmes[fIndex - 1];
                usuario.pegarItem(filme);
                iniciar();
              });
            }
          });
        });
        break;

      case "7":
        if (usuarios.length === 0) {
          console.log("Nenhum usuário cadastrado.");
          iniciar();
          break;
        }
        console.log("Usuários:");
        usuarios.forEach((u, i) => console.log(`${i + 1} - ${u.nome}`));
        rl.question("Escolha o usuário: ", (uIndex) => {
          const usuario = usuarios[uIndex - 1];
          usuario.listarItens();
          rl.question("Escolha o item para devolver: ", (iIndex) => {
            const item = usuario.itensEmprestados[iIndex - 1];
            usuario.devolverItem(item);
            iniciar();
          });
        });
        break;

      case "8":
        if (usuarios.length === 0) {
          console.log("Nenhum usuário cadastrado.");
          iniciar();
          break;
        }
        console.log("Usuários:");
        usuarios.forEach((u, i) => console.log(`${i + 1} - ${u.nome}`));
        rl.question("Escolha o usuário: ", (uIndex) => {
          const usuario = usuarios[uIndex - 1];
          usuario.listarItens();
          iniciar();
        });
        break;

      case "0":
        console.log("Saindo do sistema...");
        rl.close();
        break;

      default:
        console.log("Opção inválida!");
        iniciar();
    }
  });
}

// Iniciar
iniciar();
