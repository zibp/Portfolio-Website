$(".features").on("mouseover", (e)=> {
    $(".features").css("cursor", "pointer")
})

// coordinate user
$("#tech").on("click", e => {
    location.href="technology.html";
})
$("#proj").on("click", e => {
    location.href="project_management.html";
})
$("#media").on("click", e=> {
    location.href="media.html";
})
$("#legal").on("click", e=> {
    location.href="legal.html";
})