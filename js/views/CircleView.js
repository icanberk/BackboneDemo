define(function(require, exports, module) {

    'use strict';
    require('backbone');

    var CircleView = Backbone.View.extend({

        className: 'shape-widget circle',
        id: "blabla",

        events: {
            'click' : 'removeModel'
        },

        initialize: function(shapeModel) {
            _.bindAll(this);
            this.model = shapeModel;
        },

        render: function() {
            
            this.el.style.left = this.model.get('xCoord') + 'px';
            this.el.style.top  = this.model.get('yCoord') + 'px';
            this.el.id = this.model.cid;

            return this;
        },

        removeModel: function() {
            this.model.collection.remove(this.model);
        }
    });


    return CircleView;
});