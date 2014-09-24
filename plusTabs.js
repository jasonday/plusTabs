/*
 * plusTabs version 1.0
 *
 * Author: Jason Day @iamjasonday
 *
 * (c) 2012, Jason Day
 *
 * Dual licensed under the MIT and GPL licenses
 *
 * Dependencies: jQuery v1.6+, jQuery UI 1.8+
 *
 * Description:
 * plusTabs extends jQuery UI tabs to include a dropdown for when tabs break to the next line
 *
 * Usage:
 *
 * 	Simple:
 * 		$("#selector").plusTabs();
 *
 * 	Options:
 *  		$("#selector".plusTabs({
 *  			className: "plusTabs", //classname for css scoping
 *  			seeMore: true,  //initiate "see more" behavior
 *  			seeMoreText: "More", //set see more text
 *  			showCount: false, //show drop down count
 *  			expandIcon: "&#9660; ", //icon/caret - if using image, specify image width
 *  			dropWidth: "66%", //width of dropdown
 *			sizeTweak: 0 //adjust size of active tab to tweak "see more" layout
 *  		});
 *
 */
(function($) {
    var methods = {
        init: function(options) {
            if (options === undefined) options = {};
            //Merge defaults and options
            options = $.extend({}, $.fn.plusTabs.defaults, options);
            return this.each(function() {
                var o = options,
                    $plusTabs = $(this);

                // add class plusTabs for tabs styling
                (o.className != '') && $plusTabs.addClass(o.className);
                //initiate jQuery UI Tabs
                $plusTabs.tabs();

                function showActiveTab() {
                    var allTabsLength = "";
                    if (o.showCount === true) {
                        allTabsLength = " (" + $plusTabs.tabs("length") + ")";
                    }
                    //hide all tabs, show selected tab
                    $uiTabsNav.find("li").hide();
                    $uiTabsNav.find("li.ui-state-active").show();
                    //add "see more" tab
                    if ($plusTabs.find("li.seeMore").length == 0) {
                        $uiTabsNav.append("<li class='ui-state-default ui-corner-top seeMore'><a href='javascript: void(0);'>" + o.expandIcon + o.seeMoreText + allTabsLength + "</a></li>");
                    } else {
                        $plusTabs.find("li.seeMore").show();
                    }
                    // set active tab width
                    var seeMoreWidth = $(".seeMore").outerWidth(),
                        moreActiveTab = ATBwidth - seeMoreWidth - o.sizeTweak;
                    $uiTabsNav.find("li.ui-state-active").css("width", moreActiveTab);
                    // position .allTabs
                    var uiTabsHeight = $uiTabsNav.outerHeight(),
                        $allTabs = $plusTabs.find(".allTabs");
                    $allTabs.css({
                        "top": uiTabsHeight,
                        "width": o.dropWidth
                    });
                    //$plusTabs.find(".allTabs").css("width", moreActiveTab);
                    // Highlight active tab in allTabs dropdown
                    $allTabs.find("a").removeClass("highlight");
                    var selectedText = $uiTabsNav.find("li.ui-state-active a").text(),
                        allTabsSelected = $allTabs.find('a:contains("' + selectedText + '")');
                    $plusTabs.find(allTabsSelected).addClass("highlight");
                }
                var $uiTabsNav = $plusTabs.find('.ui-tabs-nav');
                // get total width of all tabs of current product
                var ATBwidth = $plusTabs.outerWidth();
                var tabsWidth = 0;
                $uiTabsNav.find("li").each(function(index, tabs) {
                    tabsWidth += $(tabs).outerWidth();
                });
                // Check if product, initialize "see more" behavior
                if (o.seeMore === true && tabsWidth >= ATBwidth) {
                    var allTabsNav = $('<div class="allTabs" />').appendTo($plusTabs);
                    //clone tabs/behavior append to allTabs
                    $uiTabsNav.find('a').clone().click(function(event) {
                        //stop hash to behavior
                        event.preventDefault();
                        // mimic tab select
                        $plusTabs.tabs('select', $(this).index());
                        // show active tab on selection
                        showActiveTab();
                        //hide "see more tabs"
                        $plusTabs.find('.allTabs').slideUp('fast');
                    }).appendTo(allTabsNav);
                    showActiveTab();
                } /*end if o.seeMore === "true" */
                // "see more" functionality
                // show all tabs drop down with a timer
                var timeout, $allTabs = $plusTabs.find(".allTabs");
                $plusTabs.find(".seeMore a").click(function() {
                    clearTimeout(timeout);
                    $allTabs.slideDown();
                    timeout = setTimeout(function() {
                        $allTabs.slideUp();
                        clearTimeout(timeout);
                    }, 3000)
                });
                $plusTabs.find(".seeMore a").keydown(function(e) {
                    if (e.which === 13) {
                        $allTabs.find("a:first").focus();
                    }
                });

                $allTabs.mouseenter(function() {
                    clearTimeout(timeout);
                });

                $allTabs.mouseleave(function() {
                    clearTimeout(timeout);
                    var $this = $(this)
                    timeout = setTimeout(function() {
                        $this.slideUp()
                    }, 1000)
                });

            });
        }
    };
    $.fn.plusTabs = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on $.plusTabs');
        }
    };
    // Default settings
    $.fn.plusTabs.defaults = {
        className: "plusTabs",
        seeMore: true,
        seeMoreText: "More",
        showCount: false,
        expandIcon: "&#9660; ",
        dropWidth: "66%",
        sizeTweak: 0
    };
})(jQuery);
