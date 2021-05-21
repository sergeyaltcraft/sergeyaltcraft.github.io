// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 const firebaseConfig = {
  apiKey: "AIzaSyAICFPo45m8tutTHTAlhxqtm8BZzLbpwr8",
  authDomain: "sergeyaltcraft.firebaseapp.com",
  databaseURL: "https://sergeyaltcraft-default-rtdb.firebaseio.com",
  projectId: "sergeyaltcraft",
  storageBucket: "sergeyaltcraft.appspot.com",
  messagingSenderId: "554490756447",
  appId: "1:554490756447:web:d39ac9647b7a62dea08aea",
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});