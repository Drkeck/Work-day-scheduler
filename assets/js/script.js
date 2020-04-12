tasks = {};

var loadTasks = function() {
    Tasks = JSON.parse(localStorage.getItem("work scheduler"));
    if(!Tasks) {
        tasks = {}
    } else {
        $.each(tasks, function() {

        });
    }


}




$(".btn-primary").on("click", function() {
    debugger
    var id = $(this).attr('id');
    var text = $(this).siblings("div").children("p").text();

    console.log(text)
    tasks[id] = text;
    localStorage.setItem("work scheduler", JSON.stringify(tasks));
});

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

loadTasks();