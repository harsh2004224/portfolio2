$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    })
});     



// $(window).scroll(function(){
//     if($(document).scrollTop()<1){
//         $('.navbar').removeClass("sticky");
    
//     }else if($(document).scrollTop()>100){ 
//         $('.navbar').removeClass("sticky");
//         $('.navbar').addClass("sticky");
// }else{
//     $('.navbar').addClass("sticky");
// }});
