$(document).ready(function(){

	/* Top 버튼 */

	$("#topBtn").click(function(){
		$("html,body").animate({scrollTop:"0"});
	});

	// ________________________________________________ header ____________________________________

	$(".gnb_list").css({"right":"-70%"});

	/* 메뉴버튼 */
	$(".menu_toggle_btn").click(function(){
		$(".gnb_list").stop().animate({"right":"0"});
		$(".back").stop().fadeIn();
	});

	/* 닫기버튼 */
	$(".gnb .close").click(function(){
		$(".gnb_list").stop().animate({"right":"-70%"});
		$(".back").stop().fadeOut();
	});
	
	// ________________________________________________ sub 1 ____________________________________

	/* 산 설명 */
	$("#section1 .change").click(function(){
		$("#section1 h3").stop().slideToggle("slow");
		$("#section1 .change").toggle();
		$("#section1 .changeM").toggle();
	});
	$("#section1 .changeM").click(function(){
		$("#section1 h3").stop().slideToggle("slow");
		$("#section1 .changeM").toggle();
		$("#section1 .change").toggle();
	});
	
	// ________________________________________________ sub 2 ____________________________________

	/* 첫번째 dd를 제외하고 나머지는 보이지 않게 할 경우 */
	$("dd:not(:first)").css("display","none");
	$("dt:first").addClass("selected");

 	/* 전체 내용 다 보이지 않고 탭만 보이게 할 경우 */
 	/* $("dd").css("display","none");
	$("dt:first").addClass("selected"); */

 	$("dl dt").click(function(){

		$("dl dt").not(this).find("+dd").stop().slideUp(300);
		$(this).next("dd").stop().slideToggle(300); 
		 
		$("dt").removeClass("selected"); // 기존선택된 탭메뉴 제거
		$(this).addClass("selected"); // 새로 선택된 탭메뉴 추가

 	});





	
	
	




});