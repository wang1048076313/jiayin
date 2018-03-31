$(function() {
   var h = $(window).height();
  $('#wrapper').css('visibility','hidden'); 

          $('#loader-bg ,#loader').height(h).css('display','block');

});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(200);
  $('#loader').delay(600).fadeOut(100);
  $('#wrapper').css('visibility', 'visible');
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',3000);
  setTimeout('bofang()',1500);
});
 
function stopload(){
  $('#wrapper').css('visibility', 'visible');
  $('#loader-bg').delay(900).fadeOut(200);
  $('#loader').delay(600).fadeOut(200);
}
function bofang(){
   document.getElementById("video1").play();
}
//Scroll Top//

// fade in #topScroll
$(function() {
	// scroll body to 0px on click
	$('#topScroll a').click(function() {
		$('body,html').animate({
			scrollTop : 0
		}, 800);
		return false;
	});
}); 




$(function() {
		setTimeout(function() {
			$('.ani_txt').addClass( "show" );
		}, 2500);
	});


