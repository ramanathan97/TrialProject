import Route from '@ember/routing/route';
export default Route.extend({
    display:'',
    rankCity:false,
    displayPerformance:false,
    currentcity:'',
    performances:[],
    beforeModel(){
    let access=localStorage.getItem("value");
    if(access==false){
        this.transitionTo('login')
    }     
    },
    model(){
        return this.store.query('performance', { include: 'user' })
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('actions', {
            calculateRank: function(arg1){
                let type=arg1;                
                if(type=="distance")
                {
                    this.set('display','rankDistance')
                    this.set('rankCity',false)
                    this.set('displayPerformance',false)
                }   
                if(type=="duration")
                {
                    this.set('display','rankDuration')
                    this.set('rankCity',false)
                    this.set('displayPerformance',false)
                }      
            },
            sortByCity:function(){
                this.set('currentcity',this.get("city"));
                this.set('displayPerformance',true)
            },
            calcCity(){
                this.set('display','rankCity')
                this.set('rankCity',true)
            }   
        })
    }
});
