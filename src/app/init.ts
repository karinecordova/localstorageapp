export class Init {
    load() {
      if(localStorage.getItem('todos') == 'null' || localStorage.getItem('todos') == undefined) {
        console.log('Nenhuma tarefa encontrada');
      }
    }
  }