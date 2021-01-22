window.onload = () => {
  const config = {
    apiKey: 'AIzaSyBUdxtCdqd6xg52FMKFuHN6Die3ixhf_R8',
    authDomain: 'wouldyou-ee230.firebaseapp.com',
    databaseURL: 'https://wouldyou-ee230-default-rtdb.firebaseio.com/',
    storageBucket: 'wouldyou-ee230.appspot.com',
  };

  firebase.initializeApp(config);
  const database = firebase.database();

  console.log(database);
};
