$(document).ready(function(){

    var sidePanel = $("#right-side");
    var mainContent = $("#main");

    function rotate (){
        $("#myTab li").toggleClass("rotate");
    }
    $("#show").hide();
    $("#hide").on("click", function(){
        sidePanel.removeClass("col-md-4");
        sidePanel.addClass("col-md-1")
        mainContent.removeClass("col-md-6");
        mainContent.addClass("col-md-9");
        $("#show").show();
        $("#myTabContent").hide();
        $(this).hide();
        rotate();
    });
    $("#show").on("click", function(){
        sidePanel.removeClass("col-md-1");
        sidePanel.addClass("col-md-4")
        mainContent.removeClass("col-md-9");
        mainContent.addClass("col-md-6");
        $("#hide").show();
        $("#myTabContent").show();
        $(this).hide();
        rotate();
    });

});