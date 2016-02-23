import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('artist');
  },
  actions: {
    addArtist(){
      let artist = this.modelFor(this.routeName);
      artist.save().then((savedArtist) => {
        savedArtist.get('pieces').invoke('save');
        this.transitionTo('artists.artist', savedArtist);
      });
    }
  }
});
