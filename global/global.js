document.addEventListener("DOMContentLoaded", function () {

    // MIT license - requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                        callback(currTime + timeToCall);
                    },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
    }());
    //end polyfill

    //nav animations and scrolling
    var navBt = document.querySelectorAll('.nav-bt');

    for (var i = 0, len = navBt.length; i < len; i++) {
        navBt[i].addEventListener('click', function () {

            var thisId = this.getAttribute('id'),
                btAnchor = '#' + thisId + '-anchor';

            for (var i = 0, len = navBt.length; i < len; i++) {
                navBt[i].classList.add('selected');
            }
            this.classList.remove('selected');
            //console.log(btAnchor);

            var sectHead = document.querySelector(btAnchor).querySelector('h1');
            var sectP = document.querySelector(btAnchor).querySelector('p');
            var sectImg = document.querySelector(btAnchor).querySelector('img');

            console.log(btAnchor,sectHead, sectP, sectImg);
            sectHead.classList.add('slide-in-left');
            sectP.classList.add('slide-in-right');
            sectImg.classList.add('fade-in');

           /*requestAnimationFrame(function () {
                $('html, body').animate({
                        scrollTop: $(btAnchor).offset().top
                    },
                    800);
            });*/

            return false;
        });
    }


    //google analytics
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-64444210-1', 'auto');
    ga('send', 'pageview');
});