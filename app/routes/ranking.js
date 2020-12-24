import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        let access=localStorage.getItem("loginpermit");
        if(access!=='true'){
            this.transitionTo('login')
        }        
    },
    model(){
        return this.store.query('performance', { include: 'user' })
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('actions', {         
            logout(){
                localStorage.clear();
                this.transitionToRoute("login");
              }   
        })
    }
});
