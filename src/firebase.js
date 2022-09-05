import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDAEpYxpuSTEpfCXT-asLx0r1yEwMj1oRM",
  authDomain: "phonic-goods-240520.firebaseapp.com",
  projectId: "phonic-goods-240520",
  storageBucket: "phonic-goods-240520.appspot.com",
  messagingSenderId: "682088210089",
  appId: "1:682088210089:web:dd4aefd30d99ef33c2d3b8",
  measurementId: "G-K3JZY2Z5E5"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
//const analytics = getAnalytics(app);

export const getFcmToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BKIi3nOugpET2LFA0kJC4OClZUluAgg4trX8OWfQO7kxDRU_WpTdPGD37gY_hh0SuFAL_uDUSKOyT5gyimzqbio'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
          console.log(payload);
          resolve(payload);
        });
    });
  }
  