import Ember from 'ember';

export default Ember.Controller.extend({
  showAddArtist: false,
  actions:{
    showAddArtist(){
      this.set("canShowAddArtist", true);
    },
    hideAddArtist(){
      this.set("canShowAddArtist", false);
    }
  }
});
