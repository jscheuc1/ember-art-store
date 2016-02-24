import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('artist');
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



// actions:{
//   addArtistName(artistNameToBeAdded){
//     // debugger;
//     var artist = this.store.createRecord('artist', {name: artistNameToBeAdded});
//     artist.save();
//     // this.modelFor(this.routeName).pushObject(artistToBeAdded);
//   },
//   addArtistLocation(artistLocationToBeAdded){
//     var location = this.store.createRecord('artist', {location: artistLocationToBeAdded});
//     location.save();
//   },
//   addArtistBio(artistBioToBeAdded){
//     var bio = this.store.createRecord('artist', {bio: artistBioToBeAdded});
//     bio.save();
//   }
// }
