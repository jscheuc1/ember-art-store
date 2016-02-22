import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('artist');
  },
  actions:{
    addArtist(artistToBeAdded){
      // debugger;
      var artist = this.store.createRecord('artist', {name: artistToBeAdded});
      artist.save();
      // this.modelFor(this.routeName).pushObject(artistToBeAdded);
    }
  }
});
