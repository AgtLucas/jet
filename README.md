Modular Script Loader Framework
=============

Jet.js is a micro-library dependency loader (asynchronously)

Usage
-----------

Define what are the widgets you want to use on the page (on the body element):

```html
<body data-ui-widget="widget-jquery widget-cycle">
```

include Jet.js on your page

```html
<script src="js/jet.min.js"></script>
```

I would sugest you create a JS file which has all your widgets been called.

```javascript
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
```

Done!

Example of use case
-----------
- Relatively small to medium Web Applications
- Wordpress, Drupal, CMS's Web Applications in general

(Intended) browser support
-----------

* Google Chrome
* Mozilla Firefox 3+
* Apple Safari 4+
* Opera 10+
* Internet Explorer 7+

Author
-----------
Michael Lancaster

License
-----------

MIT License

Copyright © 2013

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
