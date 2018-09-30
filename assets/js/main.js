$(function(){
$(".sign button").click(function(){
	$(".sign").hide();
	$(".mainBody").show();
	$(".shadow").show();

});	
$(".leftSide input").click(function(){
	$(".mainBody").hide();
	$(".shadow").hide();
	$(".sign").show();

});
$(".shadow").click(function(){
	$(this).hide();
	$(".mainBody").hide();
	$(".sign").show();

});
});