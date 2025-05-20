document.addEventListener("DOMContentLoaded", () => {
  // Toggle navigation
  const body = document.querySelector("body")
  const navToggle = document.querySelector(".nav-toggle")
  const nav = document.querySelector(".nav")
  const logo = document.querySelector(".logo")

  navToggle.addEventListener("click", () => {
    body.classList.toggle("no-scroll")
    navToggle.classList.toggle("nav-toggle--close")
    nav.classList.toggle("nav--visible")
    logo.classList.toggle("logo--active")
  })

  // Email validation
  const form = document.querySelector(".subscribe__form")
  if (form) {
    const emailBox = form.querySelector(".subscribe__input-box")
    const emailInput = form.querySelector(".subscribe__email-input")
    const errorMessage = form.querySelector(".subscribe__error-message")
    const errorIcon = form.querySelector(".subscribe__error-icon")

    function showError() {
      emailBox.classList.add("subscribe__input-box--error")
      emailInput.classList.add("subscribe__email-input--invalid-email")
      errorMessage.style.display = "block"
      errorIcon.style.display = "inline-block"
      emailInput.setAttribute("aria-invalid", "true")
      emailInput.focus()
    }

    function hideError() {
      emailBox.classList.remove("subscribe__input-box--error")
      emailInput.classList.remove("subscribe__email-input--invalid-email")
      errorMessage.style.display = "none"
      errorIcon.style.display = "none"
      emailInput.removeAttribute("aria-invalid")
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = emailInput.value.trim()
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(email)) {
        showError()
      } else {
        hideError()
      }
    })

    emailInput.addEventListener("input", hideError)
  }
})
