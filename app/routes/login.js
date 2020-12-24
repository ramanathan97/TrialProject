iimport Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),
    setupController(controller, model) {
        this._super(controller, model);
        let route = this;
        controller.set('email', '');
        controller.set('password', '');
        controller.set('actions', {
            userCheck() {
                 route.get('ajax').request('/login', {
                    method: 'POST',
                    data: JSON.stringify({
                        username: controller.get('email'),
                        password: controller.get("password")
                    }),
                  }).then(loginpermit => {
                  localStorage.setItem('loginpermit', loginpermit);
                    if (loginpermit === true) {
                        this.transitionToRoute('performance');
                    } else {
                     toastr.error('Please enter correct user name and password');
                    }
                })
            }
        })
    },
});



