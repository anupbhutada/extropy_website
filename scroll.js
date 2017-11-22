function scrollFunctionabout(){
    var x =document.documentElement.scrollTop;
    var id = setInterval(frame,15);
    function frame(){
        if(x>=720){
            clearInterval(id);
        }
        else{
            window.scrollTo(0,x);
            x=x+50;
        }
    }
}
function  scrollFunctionevents(){
    var x =0;
    var id = setInterval(frame,15);
    function frame(){
        if(x>=1440){
            clearInterval(id);
        }
        else{
            window.scrollTo(0,x);
            x=x+50;
        }
    }
}
function scrollFunctionhome(){
    window.scrollTo(0,0);
    $('#menu-button').hide('slow');
    $('#home').show('slow');
    $('#about').show('slow');
    $('#events').show('slow');
    $('#reg').show('slow');
    $('#centre').show('slow');
}

window.onscroll = function(event){
    if(document.documentElement.scrollTop>0||document.body.scrollTop>0){
        var x =document.documentElement.scrollTop;
    var id = setInterval(frame,5);
    function frame(){
        if(x>=700){
            clearInterval(id);
        }
        else{
            window.scrollTo(0,x);
            x=x+20;
        }
    }
    $('#home').hide('slow');
    $('#about').hide('slow');
    $('#events').hide('slow');
    $('#reg').hide('slow');
    $('#centre').hide('slow');
    $('#close').hide('slow');
        $('.univ-container').css('opacity','1');
    $('.about-extropy').css('opacity', '1');
    $('.section_1_wrap').css('opacity','1');
    $('.section_3').css('opacity','1');
    $('#menu-button').show('slow');
    }
};
$('#menu-button').click(function () {
    $('.univ-container').css('opacity', '0.4');
    $('.about-extropy').css('opacity', '0.4');
    $('.section_1_wrap').css('opacity','0.4');
    $('.section_3').css('opacity','0.4');
    $('#home').show('slow');
    $('#about').show('slow');
    $('#events').show('slow');
    $('#reg').show('slow');
    $('#close').show('slow');
    $('#menu-button').hide('slow');
});
$('#close').click(function () {
    $('#home').hide('slow');
    $('#about').hide('slow');
    $('#events').hide('slow');
    $('#reg').hide('slow');
    $('#centre').hide('slow');
    $('#close').hide('slow');
    $('.univ-container').css('opacity', '1');
    $('.about-extropy').css('opacity', '1');
    $('.section_1_wrap').css('opacity','1');
    $('.section_3').css('opacity','1');
    $('#menu-button').show('slow');
});