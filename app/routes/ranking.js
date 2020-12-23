import Route from '@ember/routing/route';
export default Route.extend({
    beforeModel(){
        let access=localStorage.getItem("servervalue");
        if(access===false||access===null){
            this.transitionTo('login')
        }        
    },
    model(){
        return this.store.query('performance', { include: 'user' })
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set("display",''),
        controller.set("displayPerformance",false),
        controller.set("currentcity",'')
        controller.set('actions', {
            calculateRank: function(type){
                this.set('displayPerformance',false)
                if(type==="distance")
                {
                    this.set('display','rankDistance')
                }   
                if(type==="duration")
                {
                    this.set('display','rankDuration')
                }      
            },
            sortByCity:function(){
                this.set('currentcity',this.get("city"));
                this.set('displayPerformance',true)
            },
            calcCity(){
                this.set('display','rankCity')
            },
            logout(){
                localStorage.clear();
                this.transitionToRoute("login");
              }      
        })
    }
});
