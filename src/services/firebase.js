import firebase from 'firebase/app';

const cafeAppConfig = {
    apiKey: "AIzaSyCJxf11_cU5O7g75HMoTRkbYbRHyh3hDZI",
    authDomain: "brew-app-453c4.firebaseapp.com",
    databaseURL: "https://brew-app-453c4.firebaseio.com",
    projectId: "brew-app-453c4",
    storageBucket: "brew-app-453c4.appspot.com",
    messagingSenderId: "175552182646"
};
const customerAppConfig = {
    apiKey: "AIzaSyAtLNCc4zR4jQbSuHqEODHVPRs2TjH62Ac",
    authDomain: "brew-customer-3d043.firebaseapp.com",
    databaseURL: "https://brew-customer-3d043.firebaseio.com",
    projectId: "brew-customer-3d043",
    storageBucket: "brew-customer-3d043.appspot.com",
    messagingSenderId: "368782341004"
};

if (!firebase.apps.length) {
    firebase.initializeApp(customerAppConfig);
    firebase.initializeApp(cafeAppConfig, 'cafeApp');
}

export { firebase };