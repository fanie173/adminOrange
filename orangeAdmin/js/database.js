// Get a reference to the database service
//orangeadmin-54ca9
var database = firebase.database();

function writeDriverData(userId, name, email, imageUrl, cellNo, password, surname) {
  firebase.database().ref('driversTbl/' + userId).set({
    username: username,
    name: name,
    email: email,
    profile_picture : imageUrl,
    password: password,
    surname: surname,
  });
}

function writeVehicleData(ODM_km, carReg, carType, lisenceDisk)
{
firebase.database().ref('vehicle/' + carReg).set({
  ODM_km: ODM_km,
  carReg: carReg,
  carType: carType,
  lisenceDisk: lisenceDisk
});
}
