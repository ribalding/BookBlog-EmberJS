import Ember from 'ember';

export default Ember.Route.extend({
  selectedCategory: 'scifi',
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
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
    },

    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('all-posts');
    },

    deleteComment(comment){
      comment.destroyRecord();
      this.transitionTo('all-posts');
    },

    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('all-posts');
    }
  }
});
