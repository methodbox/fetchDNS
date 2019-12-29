M.updateTextFields = function() {
  let input = document.querySelector('#domain-name');

  let inputLength = input.value.length;
  let inputIsFocused = document.activeElement === input;
  let inputIsAutofocused = input.autofocus;

  if (inputLength > 0 || inputIsFocused || inputIsAutofocused) {
    input.nextSibling.classList += 'active';
  } else {
    input.nextSibling.classList.remove('active');
  }
  $(input_selector).each(function(element, index) {
    let $this = $(this);
    if (
      element.value.length > 0 ||
      $(element).is(':focus') ||
      element.autofocus ||
      $this.attr('placeholder') !== null
    ) {
      $this.siblings('label').addClass('active');
    } else if (element.validity) {
      $this.siblings('label').toggleClass('active', element.validity.badInput === true);
    } else {
      $this.siblings('label').removeClass('active');
    }
  });
};
