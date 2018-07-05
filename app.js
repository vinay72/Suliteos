(function(){
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7mjTOJMgcnsunaKSiF-oIQksmiwD6O8g",
    authDomain: "suliteos-d5d6d.firebaseapp.com",
    databaseURL: "https://suliteos-d5d6d.firebaseio.com",
    projectId: "suliteos-d5d6d",
    storageBucket: "suliteos-d5d6d.appspot.com",
    messagingSenderId: "694583155186"
  };
  firebase.initializeApp(config);
</script>

// Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtLogin = document.getElementById('txtLogin');
const txtSignUp = document.getElementById('txtSignUp');
const txtLogout = document.getElementById('txtLogout');

// Add login events
btnLogin.addEventListener('click', e=> {
  // Get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign In
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e=> console.log(e.message));
})

btnSignUp.addEventListener('click', e=> {
  // Get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign In
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
  .catch(e=> console.log(e.message));
});
firebase.auth().onAuthStateChanged(firebaseUser => ){
  if(firebaseUser){
    console.log(firebaseUser);
  } else{
    console.log(not logged in);
  }

}












}):