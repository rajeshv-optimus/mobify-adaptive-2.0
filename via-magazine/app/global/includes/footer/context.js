define(['$'], function($) {
    return {
        context: {
            footerLinks: function() {
                return $('#copyright').find('a');
            },
            copyrightText: function() {
                return $('#copyright').find('div').text();
            }
        }
    };
});
