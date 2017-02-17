$('document').ready(function () {

    $('.jumbotron-fluid').height($( window ).height());

    // timeline
    var options = {
        numYears:4,
        startYear:2011,
        click:function(e,event){
            alert(event.name);
        }
    };

    var timelineDiv = $('#timeline');
    timelineDiv.jqtimeline(options);
    var timelineObj = timelineDiv.data('jqtimeline');

    var eventObj = {id:1, name:"Fell in Love with AOL",on : new Date('2012-02-14')};
    timelineObj.addEvent(eventObj);
    eventObj = {id:1, name:"Became a teacher",on : new Date('2012-04-01')};
    timelineObj.addEvent(eventObj);
    eventObj = {id:1, name:"Left job",on : new Date('2012-06-30')};
    timelineObj.addEvent(eventObj);
    eventObj = {id:1, name:"Became a full time teacher",on : new Date('2012-07-07')};
    timelineObj.addEvent(eventObj);
    eventObj = {id:1, name:"Got married",on : new Date('2013-03-01')};
    timelineObj.addEvent(eventObj);
    eventObj = {id:1, name:"Moved to Hyderabad",on : new Date('2013-04-01')};
    timelineObj.addEvent(eventObj);

    // $( '.snap' ).scrollSnap();

    // one page scroll
    $('.main').onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

    carousel();

    $('.my-fb-container').socialfeed({

        // instagram:{
        //     accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
        //     limit: 5,                                    //Integer: max number of posts to load
        //     client_id: '57ce6cc0be0d432e8cbfd2a4d08d913b',       //String: Instagram client id (optional if using access token)
        //     access_token: '608730134.1677ed0.9b9679682ad04b0f8f015e36b472a96f' //String: Instagram access token
        // },

        facebook:{
            accounts: ['@teslamotors'],  //Array: Specify a list of accounts from which to pull wall posts
            limit: 2,                                   //Integer: max number of posts to load
            access_token: 'EAAJvOv94ylABADeAOYawHitUqZAxJwMuNUqWT7bi3aQaAmOTRl5RTbKcb8ga2641yk8GFTMiBmWVNFRj0EAbjei1rwwiBb5DTxjvQePbjj1ewvWMCMjipEBc3ZBASbwlZCOCL0lUKMHJQ79G8iLMRaC81ur3S0ZD'  //String: "APP_ID|APP_SECRET" 685249138313808|8086e39c8e804555125f30f71ccb8135 685249138313808|sMbv4Jp4qH_MQd1UCn0brb_kRAc
        },

        // GENERAL SETTINGS
        length:400                                      //Integer: For posts with text longer than this length, show an ellipsis.
    });

});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-white";
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
