// INSTANTIATE ALL YOUR SCRIPT DEPENDENCIES IN ONE JS FILE
// AND LET JET.JS LIBRARY DO THE WORK FOR YOU

// jQuery
var dependency1 = new Jet.App;
    dependency1.init('widget-jquery', 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', function() {
        console.log('jquery loaded');
    });

// Cycle
var dependency2 = new Jet.App;
    dependency2.init('widget-cycle', 'http://malsup.github.io/jquery.cycle.all.js', function() {
        console.log('cycle loaded');
        $('#outdoor-context-content').cycle({
            fx: 'fade'
        });
    });

// Handlebars
var dependency3 = new Jet.App;
    dependency3.init('widget-handlebars', 'http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.min.js');

