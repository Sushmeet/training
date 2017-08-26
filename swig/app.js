var swig = require('swig');


swig.renderFile('/Users/ssunger/Documents/training/swig/html/template.html', {
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});

// Compile a file and store it, rendering it later
var tpl = swig.compileFile('/Users/ssunger/Documents/training/swig/html/template.html');
console.log(tpl({ article: { title: 'Swig is fun!' }}));

// Immediately render a Swig template from a string
console.log(swig.render('{% if foo %}Hooray!{% endif %}', { locals: { foo: true }}));