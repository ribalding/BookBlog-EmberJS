import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateComment : false,
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },

    updateComment(comment) {
      var params = {
        user_name: this.get("user_name") ? this.get("user_name") : "",
        commentText: this.get("commentText") ? this.get("commentText") : "",
        post: this.get("post"),
      };
      this.sendAction('updateComment', comment, params);
      this.set('user_name', '');
      this.set('commentText', '');
      this.set('showUpdateComment', false);
    },

    showEditForm () {
      this.set('showUpdateComment', true);
    },

    saveComment(params){
      this.sendAction('saveComment', params);
    }
  }
});
