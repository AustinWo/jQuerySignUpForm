// Problem: Hints are shown even when form is valid
// Solution: Hide and show them at appropriate times
var $password = $('#password');
var $confirmPassword = $('#confirm_password');

// Hide Hints
$('form span').hide();

function passwordEvent() {
  // Find out if password is valid
  if ($password.val().length > 8) {
    // Hide hint if valid
    $password.next().hide();
  } else {
   // else show hint
   $password.next().show();
  }

}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if ($password.val() === $($confirmPassword).val()) {
      //Hide hint if matched
      $confirmPassword.next().hide();
  } else {
      $confirmPassword.next().show();
  }


}
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent)
          .focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
// can call 2 focus -> can call multiple handler, no overiding


//When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

