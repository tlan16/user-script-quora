// ==UserScript==
// @name         Quora Helper
// @namespace    https://github.com/tlan16/user-script-quora
// @version      2024-08-21
// @description  Auto expend ansers
// @author       Frank Lan
// @updateURL   https://raw.githubusercontent.com/tlan16/user-script-quora/main/user-script.js
// @downloadURL https://raw.githubusercontent.com/tlan16/user-script-quora/main/user-script.js
// @match        https://www.quora.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quora.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function isHidden(element) {
        return (element.offsetParent === null)
    }

    function expend() {
        document.querySelectorAll(`.puppeteer_test_read_more_button`).forEach((element) => {
            if (!isHidden(element)) {
                element?.click()
            }
        })
    }

    document.addEventListener("scroll", (event) => {
        expend();
    })

    expend();
})();
