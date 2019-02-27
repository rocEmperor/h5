
window.onload=function(){
	
	$("#move1").height($("#move1").width())
	$(".load_box").hide()

	var myVideo=document.getElementById("mp3");
	var mygun=document.getElementById("gun");
	// myVideo.pause(); 
	var i=0;
	$(".iocn").addClass('iocn_1')
	 var i=0;
     $(".iocn").click(function(){
       i++;
       if(i%2!=0){
         $(".iocn").removeClass("iocn_1");
          myVideo.pause();
       }else{
         $(".iocn").addClass('iocn_1')
           myVideo.play();
       }
     })   
}
 function mp3(){
	 myVideo.play(); 
}