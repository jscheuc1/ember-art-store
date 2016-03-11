import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service('session'),
  // applicationController: Ember.inject.controller('application'),
  // actions: {
  //  authenticate() {
  //   // let user = this.store.findRecord('user');
  //    let { email, password } = this.getProperties('email', 'password');
  //    this.get('session').authenticate('authenticator:devise', email, password).then(() => {
  //      this.store.findRecord('user', "null").then((user)=>{
  //        this.transitionToRoute('users.user', user);
  //      });
  //    } ).catch((reason) => {
  //           this.set('errorMessage', reason.error || reason);
  //         });
  //       }
  //
  // }
});
