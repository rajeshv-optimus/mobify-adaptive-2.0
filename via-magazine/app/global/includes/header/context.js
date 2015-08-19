define(['$', 'translator'], function($, translator) {
    return {
        context: {
            logo: function() {
                return $('#logo a').attr('href');
            },
            navLogo:function() {
                return $('#aaa_logo a');
            },
            searchForm: function() {
                return $('#search-block-form').find('#edit-search-block-form-1')
                    .attr('Placeholder', 'search').end();
            }
        }
    };
});
