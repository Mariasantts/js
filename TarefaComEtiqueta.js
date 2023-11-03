import {Tarefa} from './Tarefa';

export default class TarefaComEtiqueta extends Tarefa {
  constructor(descricao, etiquetas) {
    super(descricao);
    this.etiquetas = etiquetas;
  }
}