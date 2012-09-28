plusTabs
========

plugin to interact with jQuery UI tabs when there are too many tabs.

Plugin only renders "see more" tab/behavior when there are enough tabs to break to a second line - otherwise, tabs render normally. 

![plusTabs](http://dl.dropbox.com/u/53529463/plusTabs/plusTabs.png "plusTabs")

Demo:
=====

http://jsfiddle.net/jasonday/fdhaS/embedded/result/


Usage:

    $("#tabs").plusTabs({
        className: "plusTabs",    // allows for css scoping, default to .plusTabs
        seeMore: true,            // the seeMore functionality - set to false to manually trigger later
        seeMoreText: "More",      // configure "see more" copy
        showCount: true,          // show total count of tabs
        expandIcon: "&#9660; ",   // default is caret - can use other html elements. If using image, put image width inline
        dropWidth: "66%",         // width of dropdown list
        sizeTweak: 0              // # of pixels to subtract from active tab to adjust placement of "see more"
    });
    
    
    
License
=======
Dual licensed under the MIT and GPL licenses:

http://www.opensource.org/licenses/mit-license.php

http://www.gnu.org/licenses/gpl.html

(c) Jason Day 2012