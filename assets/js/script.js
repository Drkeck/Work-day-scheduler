tasks = [];

$(".row").on("click", ".btn-primary", function() {
    debugger
    var id = $(this, ".row").closest(".times").attr("id")
    var text = $(this, ".text").closest("p").text();

    console.log(id);
    console.log(text);
})

$(".text").on("click", ".text-p", function() {
    var text = $(this,".text-p").text().trim();
    if (text === "Click to add task") {
        text = ""
    }
    var textInput = $("<textarea>").addClass("form-control-lg bg-light col-11").val(text);

    $(this, "p").replaceWith(textInput);
    textInput.trigger("focus");
});

$(".text").on("blur", "textarea",  function() {
    var text = $("textarea").val().trim();
    if (text === "") {
        text = "Click to add task"
    }
    var taskP = $("<p>").addClass("text-p").text(text);
    $(this, ".text-p").replaceWith(taskP)
});