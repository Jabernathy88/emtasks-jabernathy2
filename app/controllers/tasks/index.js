import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
    addTask: function(){
      let title = this.get('title');
      let description = this.get('description');
      let date = this.get('date');

			// create New Task
			let newTask = this.store.createRecord('task', {
				title: title,
				description: description,
				date: new Date(date)
      });

			// save to Database
			newTask.save(); 

			// clear forms
			this.setProperties({
				title: '',
				description: '',
				date: ''
			});
    },
    editTask: function(id){
			let self = this;

			let title = this.get('title');
			let description = this.get('description');
			let date = this.get('date');
      // edit Task
      
      function failure(reason) {
        // handle the error
      }

			this.store.findRecord('task', id).then(function(task){
				task.set('title', title);
				task.set('description', description);
				task.set('date', new Date(date));

        function transitionToIndex(post) {
          self.transitionToRoute('tasks.index');
        }

				// Save to Database
        task.save().then(transitionToIndex).catch(failure);
      });
    },
    deleteTask: function(id){
			this.store.findRecord('task', id).then(function(task){
				task.deleteRecord();

				task.save();
			});
		}
	}
});
