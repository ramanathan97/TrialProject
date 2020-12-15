import Controller from '@ember/controller';


export default Controller.extend({
    
    rankDistance:false,
    rankDuration:false,
    rankCity:false,
    displayPerformance:false,
    currentcity:'',
    performances:[],
   selectedperformances:[],
  
    actions:{
        calculateRank: function(arg1){
            let type=arg1;
            
            this.set('userperformance',this.store.findAll('performance',{include: 'user'})) 
            if(type=="distance")
            {
                this.set('rankDistance',true)
                this.set('rankDuration',false)
                this.set('rankCity',false)
                this.set('displayPerformance',false)

            }
            
            if(type=="duration")
            {
                this.set('rankDuration',true)
                this.set('rankDistance',false)
                this.set('rankCity',false)
                this.set('displayPerformance',false)
            }
          
        },
        sortByCity:function(){
            this.set('currentcity',this.get("city"));
            this.set('rankDuration',false)
            this.set('rankDistance',false)
            this.set('displayPerformance',true)
            this.set('userperformance',this.store.findAll('performance',{include: 'user'}))
        },

        calcCity(){
            this.set('rankCity',true)
            this.set('rankDuration',false)
            this.set('rankDistance',false)


        }
    
        
    },


   
});
  


