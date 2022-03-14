$(".spoilerHeader").on("click", function showSpoiler(){
    $(this).append('<p class=createdSpoiler"> Убийца - дворецкий!</p>')
})
$(".hiddenSpoilerHeader").on("click", function toggleSpoiler(){
    $(".hiddenSpoilerHeader_text-shown").toggle()
})