import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    attachArtist(){
      this.toggleProperty('showAddArtistForm');
    },
    submit(){
      let piece = this.get('piece');
      let newArtist = {
        name: this.get('name'),
        location: this.get('location'),
        bio: this.get('bio'),
        asset: this.get('asset')
      };
      if ('showAddArtistForm') {
        this.sendAction('action', piece, newArtist);
      }
      else {
        let newArtist = null;
        this.sendAction('action', piece, newArtist);
      }
    }
  }
});
