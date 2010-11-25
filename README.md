node-crawler
------------

How to install

    $ npm install crawler

How to test

	$ node test/simple.js
	$ node test/testrunner.js
	

Why / What ?
------------

For now just check my [lightning talk slides](http://www.slideshare.net/sylvinus/web-crawling-with-nodejs)

Help & Forks welcomed! This is just starting for now.

Rough todolist :
 
 * Make Sizzle tests pass (jsdom bug? https://github.com/tmpvar/jsdom/issues#issue/81)
 * More crawling tests
 * Document the API
 * Get feedback on featureset for a 1.0 release (option for autofollowing links?)
 * Make sure jQuery is cached / Include latest release in tree or add dependency
 * Check how we can support other mimetypes than HTML
 * Add+test timeout parameter


API
---

    var Crawler = require("node-crawler").Crawler;
    
    var c = new Crawler({
        "maxConnections":10,
        "callback":function(error,result,$) {
            $("#content a:link").each(function(a) {
                c.queue(a.href);
            })
        }
    });
    
    // Queue a list of URLs, with default callback
    c.queue(["http://jamendo.com/","http://tedxparis.com", ...]);
    
	// Queue URLs with custom callbacks
    c.queue([{
        "uri":"http://parisjs.org/register",
        "method":"POST",
        "callback":function(error,result,$) {
            $("div:contains(Thank you)").after(" very much");
        }
    }]);

    // Queue some HTML code directly without grabbing (mostly for tests)
    c.queue([{
        "html":"<p>This is a <strong>test</strong></p>"
    }]);

	

