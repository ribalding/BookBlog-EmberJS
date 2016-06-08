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
    },
    delete(post) {
      if(confirm('you sure dude?')) {
        post.destroyRecord();
        this.transitionTo('index');
      }
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    }
  }
});
