$(document).ready(function () {
    $('#fullpage').fullpage({

        menu: '#myMenu',
        //Navigation
        lockAnchors: false,
        anchors: ['p1', 'p2', 'p3', 'lastPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['p1', 'p2', 'p3'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'top',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : [],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });
  $('#fullpage').attr('style', 'position: absolute');
});


function gotopage(page) {
    $.fn.fullpage.moveTo(page);
}

