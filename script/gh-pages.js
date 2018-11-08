var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../_book'), function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Publish SUCCESS!');
});
