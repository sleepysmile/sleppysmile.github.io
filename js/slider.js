$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$(document).on('click', '#js-plus-counter', function () {
    var inputCounterVal = $('#input-counter').val();
    var inputCounter = $('#input-counter');

    if (inputCounterVal < 999) {
      inputCounter.val(parseInt(inputCounterVal) + 1);
      inputCounter.value = parseInt(inputCounterVal) + 1;
    }
    
})

$(document).on('click', '#js-minus-counter', function () {
  var inputCounterVal = $('#input-counter').val();
  var inputCounter = $('#input-counter');

  if (inputCounterVal > 0) {
    inputCounter.val(parseInt(inputCounterVal) - 1);
    inputCounter.value = parseInt(inputCounterVal) - 1;
  }

})

$(document).on('keyup', '#input-counter', function () {
  var inputCounter = $(this);

  if (inputCounter.val().length < 0 || inputCounter.val().length > 3) {
    inputCounter.val(inputCounter.val().substring(0, inputCounter.val().length - 1)); 
  }
})

$(document).on('focus', '#input-counter', function () {
  var inputCounter = $(this);

  if (inputCounter.val() == 0) {
    inputCounter.val('')
  }
})

$(document).on('blur', '#input-counter', function () {
  var inputCounter = $(this);

  if (inputCounter.val() == '') {
    inputCounter.val(0)
  }
})