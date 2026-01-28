const accordeon = document.querySelector('.feature-list');
const accordeonButtons = accordeon.querySelectorAll('.feature__link');


accordeonButtons.forEach((button) => {
  button.addEventListener('click', () => {
    accordeonButtons.forEach((btn) => {
      btn.classList.remove('feature__link_active');
      btn.nextElementSibling.classList.add('hidden');
    });

    button.classList.toggle('feature__link_active');
    button.nextElementSibling.classList.toggle('hidden');
  })
})