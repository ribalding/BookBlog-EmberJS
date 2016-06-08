import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        text: this.get('text') ? this.get('text') : "",
        image: this.get('image') ? this.get('image') : "",
        category: this.get('category') ? this.get('category') : ""
      };
      this.sendAction('save', params);
      this.set('title', '');
      this.set('author', '');
      this.set('text', '');
      this.set('image', '');
      this.set('category','');
    }
  }
});
