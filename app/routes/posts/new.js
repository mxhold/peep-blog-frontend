import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    save: function(post) {
      var _this = this;
      post.save().then(function() {
        _this.transitionTo('posts');
      });
    }
  }
});
