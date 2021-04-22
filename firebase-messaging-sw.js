
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyAICFPo45m8tutTHTAlhxqtm8BZzLbpwr8",
    authDomain: "sergeyaltcraft.firebaseapp.com",
    databaseURL: "https://sergeyaltcraft-default-rtdb.firebaseio.com",
    projectId: "sergeyaltcraft",
    storageBucket: "sergeyaltcraft.appspot.com",
    messagingSenderId: "554490756447",
    appId: "1:554490756447:web:d39ac9647b7a62dea08aea",
    measurementId: "G-64L0EQDKZG"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});