
/**
* Theme: Flacto Admin Template
* Author: Coderthemes
* Dashboard
*/

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };

    //creates Stacked chart
    Dashboard1.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            barSizeRatio: 0.5,
            resize: true, //defaulted to true
            gridLineColor: '#3d495a',
            barColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors,
            backgroundColor: '#444f5c',
            labelColor: '#fff'
        });
    },


    Dashboard1.prototype.init = function() {

        //creating Stacked chart
        var $stckedData  = [
            { y: '2005', a: 45, b: 180, c:45 },
            { y: '2006', a: 75,  b: 65, c:45 },
            { y: '2007', a: 100, b: 90, c:45 },
            { y: '2008', a: 75,  b: 65, c:45 },
            { y: '2009', a: 100, b: 90, c:45 },
            { y: '2010', a: 75,  b: 65, c:45 },
            { y: '2011', a: 50,  b: 40, c:45 },
            { y: '2012', a: 75,  b: 65, c:45 },
            { y: '2013', a: 50,  b: 40, c:45 },
            { y: '2014', a: 75,  b: 65, c:45 },
            { y: '2015', a: 100, b: 90, c:45 }
        ];
        this.createStackedChart('dashboard-stacked-chart', $stckedData, 'y', ['a', 'b','c'], ['Series A', 'Series B', 'Series C'], ['#9842e5', '#1bb99a', "#636f82"]);

        //creating donut chart
        var $donutData = [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#fec200','#1bb99a','#45b0e2']);
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);