tasks = {};

setInterval(function(){
    var timeChecker = parseInt(moment().format('H'));
    var currentTime = moment().format('LTS');
    var currentDate = moment().format('MMMM Do');
    var combinedTime = currentDate + " " + currentTime;
    $('#currentDay').text(combinedTime);
    for (i = 9; i < 18; i++) {
        var taskTime = i;
        if (timeChecker > taskTime) {
            $('#' + i).parents(".row").removeClass('bg-success');
            $('#' + i).parents(".row").removeClass('bg-danger');
            $('#' + i).parents(".row").addClass('bg-secondary');
        } else if (timeChecker === taskTime) {
            $('#' + i).parents(".row").removeClass('bg-secondary');
            $('#' + i).parents(".row").removeClass('bg-success');
            $('#' + i).parents(".row").addClass('bg-danger');
        } else {
            $('#' + i).parents(".row").removeClass('bg-danger');
            $('#' + i).parents(".row").removeClass('.bg-secondary');
            $('#' + i).parents(".row").addClass('bg-success');
        }
    }

}, 1000);

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("work scheduler"));
    if(!tasks) {
        tasks = {
            0: "Click to add task",
            1: "Click to add task",
            2: "Click to add task",
            3: "Click to add task",
            4: "Click to add task",
            5: "Click to add task",
            6: "Click to add task",
            7: "Click to add task",
            8: "Click to add task"
        }
    } 
    for (var i = 0; i < 9; i++) {
        var savedText = tasks[i]
        $("div").find("#" + [i]).siblings("div").children("p").text(savedText);
    }
}

$(".btn-primary").on("click", function() {
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