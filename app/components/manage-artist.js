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
        price: this.get('price')
      };
      if ('showAddPieceForm') {
        this.sendAction('action', artist, newPiece);
      }
      else {
        let newPiece = null;
        this.sendAction('action', artist, newPiece);
      }
    }
  }
});
