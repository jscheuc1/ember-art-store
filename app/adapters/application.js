import ActiveModelAdapter from 'active-model-adapter';

// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend({
  namespace: "api/v1"
  // authorizer: "authorizer:devise"
});

// import Ember from 'ember';
// import FirebaseAdapter from 'emberfire/adapters/firebase';
//
// const { inject } = Ember;
//
// export default FirebaseAdapter.extend({
//   firebase: inject.service()
// });


// after .extend(DataAdapterMixin,{

// })
