import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    addressBook: DS.hasMany('address', { async: true })
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            email: "stephenh@moo.com",
            addressBook: [1, 2]
        }
    ]
});
