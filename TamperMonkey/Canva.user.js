// ==UserScript==
// @name         Canva
// @namespace    http://canva.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.canva.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=canva.com
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

$(window).on('load', function() {        		
		// The color for every scrollbar on the page
        document.styleSheets[0].addRule('::-webkit-scrollbar', 'background: #fff!important; width: 20px!important', 0); 
		// the color of the scrollbar thumb
        document.styleSheets[0].addRule('::-webkit-scrollbar-thumb', 'background: #000!important; border-radius: 20px!important;', 0);        		
	    // the color of the vertical scrollbar track
        document.styleSheets[0].addRule('::-webkit-scrollbar-track', 'background: #fff!important;', 0); 
		
		// the color of the vertical scrollbar track on the most left side of the page (doesn't have a scrollbar thumb)
        document.styleSheets[0].addRule('#__a11yId9::-webkit-scrollbar-track', 'background: #808080!important;', 0); 	   
});

})();