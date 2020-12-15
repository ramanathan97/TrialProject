import Controller from '@ember/controller';
import { observer } from '@ember/object';


export default Controller.extend({
  queryParams: ['sort'],
  sort:"name",
  ram: observer("sort",function(){
    console.log(this.sort)
  })


  
});

