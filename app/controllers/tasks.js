import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function(){
			const title = this.get('title');
			const description = this.get('description');
			const date = this.get('date');
			
			// create New Task
			const newTask = this.store.createRecord('task', {
				title: title,
				description: description,
				date: new Date(date)
			});

			// save to Database
			newTask.save();

			// clear Form
			this.setProperties({
				title: '',
				description: '',
				date: ''
			});
		}
  }
});
