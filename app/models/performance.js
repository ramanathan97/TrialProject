import DS from 'ember-data';

export default DS.Model.extend({
    user:DS.belongsTo('user'),
    duration:DS.attr("number"),
    distance:DS.attr("number"),
    
});
