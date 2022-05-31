'use strict';

const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');
if(agree === 'yes') {
    document.body.removeChild(panel);
} else {
    document.getElementById('agreebtn').onclick = function() {
        Cookies.set('cookie-agree', 'yes', {expires: 3650});
        document.body.removeChild(panel);
    };
}
