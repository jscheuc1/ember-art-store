import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    attachPiece(){
      this.toggleProperty('showAddPieceForm');
    },
    submit(){
      let artist = this.get('artist');
      let newPiece = {
        title: this.get('title'),
        style: this.get('style'),
        subject: this.get('subject'),
        medium: this.get('medium'),
        size: this.get('size'),
        price: this.get('price'),
        asset: this.get('asset')
      };
      if (this.get('showAddPieceForm')) {
        this.sendAction('onAddArtist', artist, newPiece);
      }
      else {
        this.sendAction('onAddArtist', artist);
      }
    }
  }
});
