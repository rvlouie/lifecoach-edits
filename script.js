$(document).ready(function() {

    var showEmptySate = false;

    // Pop over UIs

    $(".content__timeline__nav-item--upcoming").click(function() {
        $(".content__timeline__wrapper--upcoming").toggleClass("content__timeline__wrapper--open")
    });
    $(".content__timeline__nav-item--past").click(function() {
        $(".content__timeline__wrapper--past").toggleClass("content__timeline__wrapper--open")
    });

    $(".icon-button--upload").click(function() {
        $(".content__empty").removeClass("show");
        $(".content__add__upload-ui").addClass("content__add__upload-ui--open")
    });
    $(".content__add__close__upload-ui").click(function() {
        $(".content__add__upload-ui").removeClass("content__add__upload-ui--open")
    });

    $(".icon-button--write").click(function() {
        $(".content__empty").removeClass("show");
        $(".content__add__writing").addClass("content__add__writing--open")
    });
    $(".content__add__close__writing").click(function() {
        $(".content__add__writing").removeClass("content__add__writing--open")
    });

    $(".icon-button--schedule").click(function() {
        $(".content__empty").removeClass("show");
        $(".content__add__schedule-ui").addClass("content__add__schedule-ui--open")
    });
    $(".content__add__close__schedule-ui").click(function() {
        $(".content__add__schedule-ui").removeClass("content__add__schedule-ui--open")
    });

    $(".header__calendar-button").click(function() {
        $(".header__calendar-ui").toggleClass("header__calendar-ui--open")
    })
    $(".header__calendar-ui__close").click(function() {
        $(".header__calendar-ui").removeClass("header__calendar-ui--open")
    })

    $(".content__upcoming__close").click(function() {
        $(".content__upcoming").addClass("hide");
        $(".content__empty").addClass("show")
    });

    $("#writing-milestone-file").click(function() {
        $("#writing-write").addClass("hide");
        $("#writing-upload").removeClass("hide");
        $("#writing-milestone-file").removeClass("inactive")
        $("#writing-milestone-comment").addClass("inactive")
    })

    $("#writing-milestone-comment").click(function() {
        $("#writing-write").removeClass("hide");
        $("#writing-upload").addClass("hide");
        $("#writing-milestone-file").addClass("inactive")
        $("#writing-milestone-comment").removeClass("inactive")
    })


    $(".panel__section__header--goals").click(function() {
        $(".panel__list--goals").toggleClass("closed")
    })

});
