/*!
 * Jet.js (Micro-library)
 * Version: 0.3
 * http://git.io/LwFXlg
 * Released under the MIT license
 *
 * Author's name: Michael Lancaster
 * website: www.bymichaellancaster.com
 * Twitter: @weblancaster
 * Date: 24-09-2013
 */
;(function(window, undefined) {

    window.Jet = window.Jet || {};

    Jet.App = (function() {
        // PRIVATE

        /**
         * Responsible to inject widgets/scripts
         * on the page
         * @method inject
         */
         function inject(url, callback) {
            var script = document.createElement("script");
            script.type = "text/javascript";

            if (script.readyState){  //IE
                script.onreadystatechange = function(){
                    if ( script.readyState == "loaded" || script.readyState == "complete" ) {
                        script.onreadystatechange = null;
                        if ( callback !== undefined ) {
                            callback();
                        }
                    }
                };
            } else {  //Others
                script.onload = function(){
                    if ( callback !== undefined ) {
                        callback();
                    }
                };
            }

            script.src = url;
            document.getElementsByTagName('body')[0].appendChild(script);
        }

        // PUBLIC
        return {
            /**
             * Responsible to store all widgets
             * as an array
             * @property WIDGETS_COLLECTION
             */
            WIDGETS_COLLECTION: null,

            /**
             * Responsible to get widgets
             * and transform in array
             * and assign to the property
             * @method widgets
             */
            widgets: function() {
                var widgets = document.body.getAttribute('data-ui-widget'),
                    widgetsArr = widgets.split(' ');

                this.WIDGETS_COLLECTION = widgetsArr;
            },

            /**
             * Responsible for receive arguments and initialize widget
             * @method init
             */
            init: function(name, url, callback) {
                this.widgets();

                if ( arguments.lentgh < 2 ) {
                    return false
                }

                var widget = name,
                    widgetCollection = this.WIDGETS_COLLECTION,
                    widgetCollectionLength = widgetCollection.length,
                    i = 0;

                for ( ; i < widgetCollectionLength; i++ ) {
                    if ( widgetCollection[i].indexOf(widget) === 0 ) {
                        inject(url, callback);
                    }
                }
            }
        }

    });

})(window);