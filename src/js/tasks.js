
'use strict';

var $ = require('jquery');
var taskData = require('./data/taskData');
var taskRenderer = require('./renderer/taskRenderer');


exports.add = function() {
    taskRenderer.renderNew();
    //taskRenderer.renderFoo();
};

exports.remove = function(clickEvent) {
    var taskElement = clickEvent.target;
    $(taskElement).closest(".task").remove();
};


exports.clear = function() {
    taskData.clear();
    exports.render();
};



exports.save = function() {
    var tasks = [];
    $("#task-list .task").each(function (index, task) {
        var $task = $(task);
        tasks.push({
            complete: $task.find(".complete").prop('checked'),
            description: $task.find(".description").val()
        });
    });

    taskData.save(tasks);

};


exports.cancel = function() {
    exports.render();
};


exports.render = function() {
    taskRenderer.rendererTasks(taskData.load());
};


