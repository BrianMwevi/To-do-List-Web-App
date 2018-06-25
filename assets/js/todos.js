//check off to-do list by clicking
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
	});
//Fading and removing the completed To-do List
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding a new to-do list to the ul by clicking the plus icon
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle(500);
});


$("input[type='text']").keypress(function(event, todoText){
	if(event.which === 13 && todoText != ""){
		todoText  = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	};
});
