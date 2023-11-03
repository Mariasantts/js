import {Tarefa} from './Tarefa';

export default class TarefaPrioritaria extends Tarefa {
  constructor(descricao, prioridade, dataLimite) {
    super(descricao);
    this.prioridade = prioridade;
    this.dataLimite = dataLimite;
  }
}