import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  },
  actions: {
    delete: function(post) {
      post.deleteRecord();
      var _this = this;
      post.save().then(function() {
        _this.transitionTo('posts');
      });
    }
  }
});
