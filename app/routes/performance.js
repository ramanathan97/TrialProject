import Route from '@ember/routing/route';
export default Route.extend({
    beforeModel() {
        let access = localStorage.getItem("loginpermit");
        if(access!=='true'){
            this.transitionTo('login');
        }
    },
    model() {
        return this.store.query('performance', { include: 'user' })
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set("title", 'Performance Chart');
        controller.set("display", '');
        controller.set('actions', {
            performancechart() {
                let myDataSource = {};
                this.set("display", "displaychart");
                let data = [];
                this.model.forEach(element => {
                    data.push({
                        label: element.user.content.name,
                        value: element.duration.toString()
                    })
                    myDataSource = {
                        chart: {
                            caption: "Performances",
                            subCaption: 'Performances based on id',
                            numberSuffix: 'km',
                            theme: 'fint'
                        },
                        data: data
                    };
                })
                this.set('dataSource', myDataSource);
            },
            logout() {
                localStorage.clear();
                this.transitionToRoute("login");
            }
        })
    }
});
