import Route from '@ember/routing/route';
let myDataSource={}
export default Route.extend({ 
   beforeModel(transition) {    
    let mail=localStorage.getItem("email");
    if(mail==undefined){
        this.transitionTo('login')
    }        
      },
        model(){
            return this.store.query('performance', { include: 'user' })
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set("title",'Performance Chart');
        controller.set("width",600)
        controller.set("height",400)
        controller.set("type",'column2d')
        controller.set("dataFormat",'json')
        controller.set("dataSource",myDataSource)
        controller.set("displayPerformance",false)
        controller.set("getdata",false)
        controller.set("curentDisplay",'')
        controller.set('actions', {
        setGoals() {
            this.set("currentDisplay", "set-goals")
            this.set("display", "dataentering")
        },
        enterData() {
            this.set("currentDisplay", "enter-data")
            this.set("display", "dataentering")
        },
        getPerformances() {
            this.set("display", "getperformances")
        },
        performancechart() {
            this.set("display", "displaychart")
            {
                    let data = [];
                    model.forEach(element => {
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
                    this.set('dataSource', myDataSource);
                })
            }
        }
        })
    }

    
});

