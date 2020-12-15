import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr("string"),
    email:DS.attr("string"),
    age:DS.attr("number"),
    password:DS.attr("string"),
    location:DS.attr("string"),
    performance:DS.belongsTo("performance")
    
});
