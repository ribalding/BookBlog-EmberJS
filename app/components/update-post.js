import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        author: this.get('authorUpdate'),
        title: this.get('titleUpdate'),
        text: this.get('textUpdate'),
        image: this.get('imageUpdate'),
        category: this.get('categoryUpdate')
      };
      this.set("updatePostForm", false);
      this.sendAction('update', post, params);
    }
  }
});
