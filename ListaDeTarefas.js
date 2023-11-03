class ListaDeTarefas {
  constructor() {
    this.tarefas = [];
  }
  
    adicionarTarefa() {
      tarefa = document.getElementById('addTask').value
      this.tarefas.push(tarefa);
      console.log("djsd" + this.tarefas)
    }
  
    removerTarefa(indice) {
      this.tarefas.splice(indice, 1);
    }
  
    atualizarTarefas() {
      const listaDeTarefas = document.getElementById('taskList');
      listaDeTarefas.innerHTML = '';
  
      this.tarefas.forEach((tarefa, indice) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = tarefa.descricao;
  
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
          this.removerTarefa(indice);
          this.atualizarTarefas();
        });
  
        itemLista.appendChild(botaoRemover);
        listaDeTarefas.appendChild(itemLista);
      });
    }
  }

  module.exports = ListaDeTarefas;