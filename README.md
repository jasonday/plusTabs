plusTabs
========

plugin to interact with jQuery UI tabs when there are too many tabs.

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
    
    
    
GPL license - Jason Day (c) 2012

This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
