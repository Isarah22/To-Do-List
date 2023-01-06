//click only => old task, onClick=>old & new tasks
//1.show the input box
$(".fa-plus").click(function(){
$("input").fadeToggle();
})
//2.check-off task 
$("ul").on("click","li",function(){ 
    $(this).toggleClass("checked");

})
//3.show the delete icon
$("ul").on("mouseover","li span",function(){
    $(this).css("width","40px");
    $(this).css("opacity","1.0");
})
$("ul").on("mouseout","li span",function(){
        $(this).css("width","0px");
    $(this).css("opacity","0.0");
})

//4.delete task 
$("ul").on("click","li span",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
})

//5.add new task
//event(can be any name) any press, .val take the value after press enter
$("input").keypress(function(event){
    if(event.which===13){//enter key=13
let newTask = $(this).val();
$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+newTask+"</li>");
   
$(this).val(""); 
} 

})
