import Ember from 'ember';

export default Ember.Route.extend({
  model : function() {
    return this.store.query('post', {
      limitToLast: 5
    });
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      console.log(newPost);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
