import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyASDLU-4oMNVg-sO-j3FY8zw3YXrnVrAc8",
  authDomain: "fir-94a79.firebaseapp.com",
  projectId: "fir-94a79",
  storageBucket: "fir-94a79.appspot.com",
  messagingSenderId: "68248446559",
  appId: "1:68248446559:web:319ee1c3d2753610c4ddea",
  measurementId: "G-8Y9DBQLXS5"
};

const app = initializeApp(firebaseConfig);

window.salir = function salir() {
      const auth = getAuth();
      signOut(auth).then(() =>{
            document.location.href = "/";
      }).catch((err) =>{
          alert("Se produce error al cerrar la sesion");
          console.log(err);
      });
      
}


export function verAutenticacion(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
        if(user) {


          console.log(user);
          if(document.getElementById("divRedes"))
            document.getElementById("divRedes").style.visibility = "hidden";

          if(document.getElementById("divInicioSesion"))        
            document.getElementById("divInicioSesion").style.visibility = "hidden";          


          if(user.photoURL != null)
            document.getElementById("imgFotoUsuario").src= user.photoURL;
          else
            document.getElementById("imgFotoUsuario").src= "asset/img/nouser.jpg";

          if(user.displayName != null)
              document.getElementById("lblNombreUsuario").innerHTML = user.displayName;
          else if (user.email != null)    
              document.getElementById("lblNombreUsuario").innerHTML = user.email;
          else if (user.reloadUserInfo.screenName != null)    
              document.getElementById("lblNombreUsuario").innerHTML = user.reloadUserInfo.screenName;              
          else
              document.getElementById("lblNombreUsuario").innerHTML = ""; 

          document.getElementById("barraMenuId").style.visibility = "visible";
          document.getElementById("divDatosUsu").style.visibility = "visible";



        } else {
          document.getElementById("barraMenuId").style.visibility = "hidden";
          document.getElementById("divDatosUsu").style.visibility = "hidden";

          if(document.getElementById("divRedes"))
            document.getElementById("divRedes").style.visibility = "visible";

          if(document.getElementById("divInicioSesion"))  
            document.getElementById("divInicioSesion").style.visibility = "visible";
        }
    });
}