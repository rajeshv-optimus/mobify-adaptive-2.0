/**
 * RequireJS paths for the ui bundle
 */

require.config({
    'paths': {
        'fastclick': 'bower_components/fastclick/lib/fastclick',
        'pre-tag': 'bower_components/pre-tag/index',
        'pikabu': 'bower_components/pikabu/build/pikabu.min',
        'plugin': 'bower_components/plugin/dist/plugin.min',
        'pinny': 'bower_components/pinny/dist/pinny.min',
        'modal-center': 'bower_components/pinny/dist/effect/modal-center',
        'sheet-bottom': 'bower_components/pinny/dist/effect/sheet-bottom',
        'sheet-left': 'bower_components/pinny/dist/effect/sheet-left',
        'sheet-right': 'bower_components/pinny/dist/effect/sheet-right',
        'sheet-top': 'bower_components/pinny/dist/effect/sheet-top',
        'shade': 'bower_components/shade/dist/shade.min',
        'lockup': 'bower_components/lockup/dist/lockup.min',
        'deckard': 'bower_components/deckard/dist/deckard.min',
        'bouncefix': 'bower_components/bouncefix.js/dist/bouncefix.min',
        'event-polyfill': 'bower_components/pinny/src/js/utils/event-polyfil',
        'bellows': 'bower_components/bellows/dist/bellows.min',
        'velocity': 'bower_components/mobify-velocity/velocity',
        'isChildOf': 'bower_components/selector-utils/src/selector/isChildOf'
    },
    'shim': {
        'pikabu': {
            'exports': 'Pikabu'
        }
    }
});
