/*
 *
 * file: dailytool.js
 * description: a js for some tool methods for the daily work
 * author: bill.zhao
 * licence: MIT
 *
 *
 */
function dailytool() {

    //detect if current browser supported css3 flexbox
    function isFlexSupport() {
        var flex = document.createElement('p').style.flex,
            webkitFlex = document.createElement('p').style.webkitFlex,
            flexWrap = document.createElement('p').style.flexWrap;

        if ((flex === '' || webkitFlex === '') && flexWrap === '') {
            return true;
        } else {
            return false;
        }
    }

    return {
        isFlexSupport: isFlexSupport
    };
}
