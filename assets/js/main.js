// initialize  tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });


  $('#signup-form').submit(function(e) {
     e.preventDefault();
     $('#signUpModal').modal('hide');
     return false;
 });
