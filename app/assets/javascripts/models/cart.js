PDXFood2.Cart = DS.Model.extend({
	name: DS.attr(),
	description: DS.attr(),
	streetNumber: DS.attr(),
	street: DS.attr(),
	city: DS.attr(),
	reviews: DS.hasMany('review', {async: true})
});