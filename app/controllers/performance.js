import Controller from '@ember/controller';
//import performances from '../../mirage/fixtures/performances';
let myDataSource={}


export default Controller.extend({
 
    displaychart:false,
    title: 'Performance Chart ',
    width: 600,
    height: 400,
    type: 'column2d',
    dataFormat: 'json',
    dataSource:myDataSource,
    displayperformance:false,
    getdata:false,
    display:'',
    currenDisplay:'',
    showPerformance:'true',
    actions:{

        setGoals(){
            this.set("currentDisplay","set-goals")        
            this.set("display","dataentering")


        },
        enterData(){
            this.set("currentDisplay","enter-data")       
            this.set("display","dataentering")
        },

        getPerformances(){   
            this.set("display","getperformances")
            this.set('performances',this.store.findAll('performance',{include: 'user'}))    
        },
    
          performancechart(){
            this.set("display","displaychart")

        
            let performances=this.store.findAll('performance',{include: 'user'})
           {
           performances.then(value=>{
            let data=[];
            value.forEach(element=>{
              data.push({
                label:element.user.content.name,
                value:element.duration.toString()
              })
              
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
            
            this.set('dataSource',myDataSource); 
        
        
           }) 
          }
          
        
          }
        
        }



    }
);

