jQuery.noConflict();
jQuery(function($) {

chrome.extension.sendRequest({}, function(response) {});

function l(s) {
    console.log('Informatica Enhancer Extension: ' + s);
}

l('jQuery = ' + $);
l('invoked');

var enhancements = [
    {
        'name': 'sqlDisplay',
        'trigger': function() {
            return $("td:contains('SQL Query')").length > 0
        },
        'install': function() {
            l('install called for "' + this.name + '" enhancement');
            var $e = $("td:contains('SQL Query')")
            var code = $e.siblings().text();
            $e.siblings().html('');
            $e.siblings().append('<pre class="sh_sql">' + code + '</pre>');
        }
    },
    {

    }
];

enhancements.forEach(function(e) {
    if (e.trigger && e.trigger() && e.install) {
        l('begin: ' + e.name + '.install()');
        e.install.call(e);
        l('end: ' + e.name + '.install()');
    }
})


});