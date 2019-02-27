var w;
$(function(){
   init_load();

})
var init_load=function(){
    w=$(window).width();
    init_size("zoom_round_1",0.5,true);
    init_size("zoom_round_2",0.5,true);
    init_size("zoom_round_3",0.5,true);
    init_size("brand_mack",0.1,false);
   
 }
var init_size=function(c,num,t){
   var  w_values=Math.ceil(w*num),
        l_values=Math.ceil(w*num)/2;
       if(t){
            $("."+c).css({
            "width": w_values,
            "height": w_values,
            "margin-left":- l_values-3,
            "margin-top":-l_values-3 ,
         })
       }else{
           $("."+c).css({
              "width": w_values,
              "height": w_values,
              "margin-left":- l_values,
              "margin-top":-l_values ,
          })
       }
     
}
var  dom_show=function(c){
         $("."+c).removeClass("hide");
         $(".load_box").fadeOut(1000);
}

