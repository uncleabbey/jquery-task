// random integer for id
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const $todos = JSON.parse(localStorage.getItem('todos')) || [];

$(document).ready(function () {
  // show form on click
  const $addForm = $('.add-form')[0];
  $('.add-todo-btn').click(() => {
    $('.add-form').show();
  });

  // hide form on click

  $('.cancel').click(() => {
    $('.add-form').hide();
  });

  $(window).click((e) => {
    if (e.target === $addForm) $('.add-form').hide();
  });

  // return todo object
  const todoObj = (title) => {
    const $data = {
      id: randomInteger(1, 1000),
      title,
      isComplete: false,
    };
    return $data;
  };

  // initialize todo

  // submit todo actions
  $('#form').submit((e) => {
    e.preventDefault();
    let $formValue = $('#form-title')[0].value;
    let $todo = todoObj($formValue);
    $todos.push($todo);
    localStorage.setItem('todos', JSON.stringify($todos));
    addTodoToList($todo);

    $('#form-title')[0].value = '';
    $('.add-form').hide();
  });

  // display todo on ui

  const addTodoToList = (todo) => {
    $('.tbody').append(`
    <tr class=${todo.id}>
      <td>
      <input 
      type="checkbox" 
      class="change" 
      onchange="handleChange(event, ${todo.id})"
      ${todo.isComplete ? 'checked' : ''} />
      </td>  
      <td id=${todo.id} class=${todo.isComplete}>${todo.title}</td>
    <td class="delete id"><a id=${todo.id} onclick="remove(event, ${
      todo.id
    })">X</a></td>
    </tr>
    `);
  };

  const displayTodo = () => {
    $todos.map((todo) => addTodoToList(todo));
  };
  displayTodo();
});

const remove = (event, id) => {
  $(`.${id}`).remove();
  const todos = $todos.filter((todo) => todo.id !== Number(id));
  localStorage.setItem('todos', JSON.stringify(todos));
};

const handleChange = (event, id) => {
  let target = event.target.parentElement.nextElementSibling;
  // $(`${$target}`).toggleClass("true")
  if (target.className === 'false') {
    target.classList.remove('false');
    target.classList.add('true');
  } else {
    target.classList.remove('true');
    target.classList.add('false');
  }
  $todos.forEach((todo, index) => {
    if (todo.id === Number(id)) {
      $todos[index].isComplete = !$todos[index].isComplete;
    }
  });
  localStorage.setItem('todos', JSON.stringify($todos));
};
