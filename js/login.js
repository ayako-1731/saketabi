'use strict';

{
  // const newuser = document.getElementById('newuser');
  // const login = document.getElementById('login');
  // const modal = document.getElementById('modal');
  // const mask = document.getElementById('mask');

  // newuser.addEventListener('click',() => {
  //   modal.classList.remove('hidden');
  //   mask.classList.remove('hidden');
  // });

  // login.addEventListener('click',() => {
  //   modal.classList.add('hidden');
  //   mask.classList.add('hidden');
  // });

  // mask.addEventListener('click',() => {
  //   // modal.classList.add('hidden');
  //   // mask.classList.add('hidden');
  //   login.click();
  // });

  const newuser = document.getElementById('newuser');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const login = document.getElementById('login');

  newuser.addEventListener('click', function(e) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      alert('登録できません（' + error.message + '）');
    });
  });

  login.addEventListener('click', function(e) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      alert('ログインできません（' + error.message + '）');
    });
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      //ログイン状態
      alert("ログインに成功しました");
    }else{
      //ログアウト状態
    }
  });

}
