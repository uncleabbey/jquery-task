$(document).ready(() => {
  // one
  console.log("Let's get ready to party with jQuery!");

  // two
  $('img').addClass('image-center');

  // three
  $('p').remove('.last');

  // four

  $('#title').css('font-size', `${Math.floor(Math.random() * 100)}px`);

  // five
  $('ol').append('<li>A new list</li>');

  // six

  $('aside')
    .empty()
    .after("<p class='col-sm-4'>Apologies List is not suppose to be here</p>");

  //seven
  $('input').change((event) => {
    let $red = $('#red')[0].valueAsNumber;
    let $blue = $('#blue')[0].valueAsNumber;
    let $green = $('#green')[0].valueAsNumber;

    if (event.target.id === 'red') {
      $('body').css(
        'background',
        `rgb(${event.target.value}, ${$blue}, ${$green})`
      );
    } else if (event.target.id === 'blue') {
      $('body').css(
        'background',
        `rgb(${$red}, ${event.target.value}, ${$green})`
      );
    } else if (event.target.id === 'green') {
      $('body').css(
        'background',
        `rgb(${event.target.value}, ${$blue}, ${event.target.value})`
      );
    }
  });

  // eight

  $('img').click(() => {
    $('img').remove();
  });
});
