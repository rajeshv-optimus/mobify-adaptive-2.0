define([
    '$',
    'pikabu',
    'pinny',
    'sheet-top',
    'bellows',
    'fastclick',
    'deckard'
],
function(
    $,
    Pikabu,
    pinny,
    sheetTop,
    bellows,
    fastclick
) {

    var initPikabu = function() {
        // All options are optional
        var pikabu = new Pikabu({
            widths: {
                left: '85%'
            },
            // Removing the "m-pikabu-hidden" class on page load for smooth opening of
            // Pikabu sidebar.
            onClosed: function() {
                $('.m-pikabu-sidebar').removeClass('m-pikabu-hidden');
                $('.menu-utility-user').css('display', 'none');
            }
        });
        $('.m-pikabu-sidebar').removeClass('m-pikabu-hidden');

    };

    var initBellows = function() {
        $('.bellows').bellows();
    };

    var aaaHeaderPinny = function() {
        var $aaaHeaderLogo = $('.c-aaa-logo-pinny');
        // initializes pinny
        $aaaHeaderLogo.pinny({
            effect: sheetTop,
            structure: {
                header: 'My Pinny Title',
            },
            coverage: '60%',
            cssClass: 'c-aaa-pinny',
            shade: {
                color: '#081629',
                opacity: 0.7
            }
        });
        $('.c-aaa-pinny__link-logo').on('click', function() {
            $aaaHeaderLogo.find('a:contains(Visit AAA.com)').addClass('c-button c--primary');
            $aaaHeaderLogo.pinny('open');
        });
        $('.c-aaa-pinny__stay-via').on('click', function() {
            $aaaHeaderLogo.pinny('close');
        });
    };

    var globalUI = function() {
        // Remove 300ms tap delay using FastClick
        fastclick.attach(document.body);

        // Enable active states for CSS
        $(document).on('touchstart', function() {});

        // Add any scripts you would like to run on ALL pages here
        initPikabu();
        initBellows();
        aaaHeaderPinny();
    };

    return globalUI;

});
