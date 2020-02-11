class obj  {

  state() {
      let todoData = [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App')
      ]

      return todoData.length

   }

  createTodoItem(label) {

    return{
    label,
    important: false,
    done: false,
    id: this.result
    }
  }

  result = this.state()
}


let frf = new obj;
