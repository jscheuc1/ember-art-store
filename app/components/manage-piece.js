import Ember from 'ember';

export default Ember.Component.extend({
  showAddArtistForm: false,
  actions: {
    attachArtist(){
      this.toggleProperty('showAddArtistForm');
    },
    submit(){
      let piece = this.get('piece');
      // this.sendAction('onAddPiece', this.get('piece.asset'));
      let newArtist = {
        name: this.get('name'),
        location: this.get('location'),
        bio: this.get('bio'),
        asset: this.get('asset')
      };
      if (this.get('showAddArtistForm')) {
        this.sendAction('onAddPiece', piece, newArtist);
      }
      else {
        // let newArtist = null;
        // this.sendAction('action', piece, newArtist);
        this.sendAction('onAddPiece', piece);
      }
    }
  }
});
