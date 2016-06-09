import Ember from 'ember';

export default Ember.Component.extend({
  showNewComment: false,
  actions: {
    saveComment(){
      var params = {
        user_name: this.get("user_name") ? this.get("user_name") : "",
        commentText: this.get("commentText") ? this.get("commentText") : "",
        post: this.get("post"),
      };
      this.sendAction('saveComment', params);
      this.set("user_name", "");
      this.set('commonText', "");
      this.set('showNewComment', false);
    },
    show(){
      this.set("showNewComment", true);
    }
  }
});
