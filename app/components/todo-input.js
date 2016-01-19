import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTodo(newTitle) {
      if (newTitle) {
        this.sendAction('action', newTitle);
      }
      this.set(newTitle, '');
    }
  }
});
