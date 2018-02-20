import './forms.scss';

class Form {
  constructor() {
    this.elm = document.querySelector('#form')
    this.requiredFields = this.elm.querySelectorAll('[data-required]')
    this.errorMsg = this.elm.querySelector('.form-error')
    this.validate = this.validate.bind(this)
    this.resetErrors = this.resetErrors.bind(this)
    this.showErrors = this.showErrors.bind(this)
    this.elm.addEventListener('submit', this.validate)
  }
  validate(e) {
    this.resetErrors()
    e.preventDefault()
    const invalidFields = Array.from(this.requiredFields).filter((field) => field.value === "")
    if(invalidFields.length) {
      this.showErrors()
    }
  }
  resetErrors() {
    this.errorMsg.setAttribute('data-hidden', true)
  }
  showErrors() {
    this.errorMsg.removeAttribute('data-hidden')
  }
}

if(document.querySelector('#form')) {
  new Form()
}