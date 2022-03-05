'use strict';
function include(file) {
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./utils/constants.js');
include('./utils/utils.js');
include('./src/figures.js');
include('./src/background.js');
include('./src/game.js');
include('./src/menu.js');
