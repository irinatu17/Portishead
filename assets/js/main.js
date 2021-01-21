// Initialize  tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

// Sign-up modal closes, when the form is submitted 
$('#signup-form').submit(function(e) {
    e.preventDefault();
    $('#signUpModal').modal('hide');
    return false;
});
