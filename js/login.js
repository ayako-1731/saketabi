'use strict';

{
  const newuser = document.getElementById('newuser');
  const login = document.getElementById('login');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  newuser.addEventListener('click',() => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  login.addEventListener('click',() => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click',() => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    login.click();
  });
}