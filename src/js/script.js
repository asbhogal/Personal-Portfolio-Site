/* PAGE LOAD */


/* NAV BAR INTEGRATION */

$.get("/src/elements/nav-menu/nav-menu.html", function(data) {
    $("#nav-bar").replaceWith(data);
});