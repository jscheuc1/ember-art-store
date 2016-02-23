import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    attachArtist(){
      this.toggleProperty('showAddArtistForm');
    },
    submit(){

      let piece = this.piece;
      let newArtist = {name: this.name, location: this.location, bio: this.bio, asset: this.asset};
      this.sendAction('action', piece, newArtist);

    }
  }
});
