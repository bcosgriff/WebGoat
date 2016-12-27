define(['jquery',
	'underscore',
	'backbone',
	'goatApp/model/LessonOverviewModel',
	'goatApp/view/AssignmentOverview'],
function($,
	_,
	Backbone,
	LessonOverviewModel,
	AssignmentOverview) {
	return Backbone.View.extend({
		el:'#lesson-overview',
		initialize: function() {
			this.lessonOverview = new LessonOverviewModel();
			this.lessonOverview.fetch();
			this.hideLessonOverview();
		},

		render: function() {
		    if (this.isVisible()) {
        	    this.$el.hide();
        	} else {
        		this.$el.show();
        	}
        	this.$el.html('');
            this.toggleLabel();
       		this.lessonOverview.each(function(assignment) {
   			    var assignmentView = new AssignmentOverview({ model: assignment });
      		    this.$el.append(assignmentView.render().el);
       		}, this);

       		return this;
       	},

        isVisible: function() {
            return this.$el.is(':visible');
        },

        toggleLabel: function() {
            if (this.isVisible()) {
                $('lesson-overview-button').text('Hide overview');
            } else {
                $('lesson-overview-button').text('Lesson overview');
            }
        },

		hideLessonOverview: function() {
			if (this.$el.is(':visible')) {
				this.$el.hide();
			}
		}
	});
});