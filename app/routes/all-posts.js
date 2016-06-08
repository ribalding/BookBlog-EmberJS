import Ember from 'ember';

export default Ember.Route.extend({
  selectedCategory: 'scifi',
  model(){
    return this.store.findAll('post');
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('all-posts');
    },
    delete(post) {
        post.destroyRecord();
        this.transitionTo('all-posts');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('all-posts');
    },

    selectCategory(category, component){
      this.set('selectedCategory', category);
      console.log(this.get('selectedCategory'));
    }
  }
});
