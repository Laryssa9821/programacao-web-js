const turma = [
  { nome: "Ana Souza", media: 8.5 },
  { nome: "Bruno Lima", media: 5.2 },
  { nome: "Carla Dias", media: 7 }
];

const tabela = document.querySelector("#tabela");
const quadro = document.querySelector("#quadro");
const vazio = document.querySelector("#vazio");

// cria uma célula com o texto: evita repetir as mesmas 2 linhas
function criarCelula(texto) {
  const celula = document.createElement("td");
  celula.textContent = texto;
  return celula;
}

// desenha a tabela inteira a partir da lista
function mostrarTurma(lista) {
  // E se a turma ainda não tem alunos?
  if (lista.length === 0) {
    quadro.hidden = true; // esconde a tabela
    vazio.hidden = false; // mostra o aviso
    return;               // e para por aqui
  }

  quadro.hidden = false;
  vazio.hidden = true;
  tabela.textContent = ""; // apaga as linhas antigas antes de desenhar

  for (const aluno of lista) {
    let situacao = "reprovado";
    if (aluno.media >= 6) {
      situacao = "aprovado";
    }

    const linha = document.createElement("tr");
    linha.classList.add(situacao);
    linha.append(
      criarCelula(aluno.nome),
      criarCelula(aluno.media.toFixed(1)),
      criarCelula(situacao)
    );
    tabela.append(linha);
  }
}

mostrarTurma(turma);

