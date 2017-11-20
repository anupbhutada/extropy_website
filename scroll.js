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
}

window.onscroll = function(event){
    if(document.documentElement.scrollTop>0||document.body.scrollTop>0){
        var x =document.documentElement.scrollTop;
    var id = setInterval(frame,5);
    function frame(){
        if(x>=720){
            clearInterval(id);
        }
        else{
            window.scrollTo(0,x);
            x=x+30;
        }
    }
    }
};
