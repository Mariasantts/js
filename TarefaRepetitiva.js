import {Tarefa} from './Tarefa';

export default class TarefaRepetitiva extends Tarefa {
  constructor(descricao, frequencia, dataInicio) {
    super(descricao);
    this.frequencia = frequencia;
    this.dataInicio = dataInicio;
  }
}