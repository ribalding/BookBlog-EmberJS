import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
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
      this.transitionTo('full-post', post.id);
    },

    saveComment(params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('full-post', post.id);
    },

    deleteComment(comment){
      comment.destroyRecord();
      this.transitionTo('full-post', post.id);
    }
  }
});
