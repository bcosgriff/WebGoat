define([
	'backbone',
	'goatApp/model/AssignmentModel'],
	function(
		Backbone) {
	return Backbone.Collection.extend({
	    tagName: 'ul',
		url: 'service/lessonoverview.mvc'
	});
});

