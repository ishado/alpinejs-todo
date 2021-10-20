function todoList() {
	return {
		todos: [],
		todoName:"",

		add(){
			this.todos.push({
				name: this.todoName,
				completed:false
			});
			this.todoName = '';
		},
		
		remove(index){
			this.todos.splice(index , 1);
		},
		
		toggleCompleted(index){
			this.todos[index].completed = ! this.todos[index].completed;
		}
	}
}