// Problem: Hints are shown even when form is valid
// Solution: Hide and show them at appropriate times
var $password = $('#password');
var $confirmPassword = $('#confirm_password');

// Hide Hints
$('form span').hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $($confirmPassword).val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
  // Find out if password is valid
  if (isPasswordValid()) {
    // Hide hint if valid
    $password.next().hide();
  } else {
   // else show hint
   $password.next().show();
  }

}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if (arePasswordsMatching()) {
      //Hide hint if matched
      $confirmPassword.next().hide();
  } else {
      $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  // !false = true
  // !true = false
  $('#submit').prop('disabled', !canSubmit())
}
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
// can call 2 focus -> can call multiple handler, no overiding


//When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
