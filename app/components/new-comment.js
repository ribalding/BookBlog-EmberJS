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
      console.log(params);
      console.log(params.post);
      this.sendAction('saveComment', params);
    },
    show(){
      this.set("showNewComment", true);
    }
  }
});
