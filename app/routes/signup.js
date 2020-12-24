import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('actions', {
            createUser: function (name,age,email,city,state,country,password) {
                this.store.createRecord('user', {
                    name,
                    email,
                    age,
                    city,
                    state,
                    country,
                    password
                }).save().then(signupresponse => {
                    if (signupresponse) {
                        this.transitionToRoute('login');
                    } else {
                        toastr.error('Some Error occured');
                    }
                });
            },
        })
    }
});
