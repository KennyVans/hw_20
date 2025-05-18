$(document).ready(function () {
    const $input = $('#new-task');
    const $todoList = $('#todo-list');
    const $modalTaskText = $('#modalTaskText');
    const myModal = new bootstrap.Modal($('#taskModal')[0]);

    $('#add-task').on('click', function () {
        const taskText = $input.val().trim();
        if (taskText) {
        const $li = $('<li></li>')
            .addClass('list-group-item todo-item')
            .attr('data-task', taskText)
            .text(taskText);
        $todoList.append($li);
        $input.val('');
        }
    });

    $todoList.on('click', '.todo-item', function () {
        const taskText = $(this).data('task');
        $modalTaskText.text(taskText);
        myModal.show();
    });
});