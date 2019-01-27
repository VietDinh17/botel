//import axios from 'axios';

const apiUrl = 'https://services.poynt.net/cloudMessages'; //geo.
const token = "eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1cm46YWlkOjEzMzliNTgxLWE1MWEtNGEyZi05OGY3LWE3ODljYmE4OGZmOSIsInN1YiI6InVybjphaWQ6MTMzOWI1ODEtYTUxYS00YTJmLTk4ZjctYTc4OWNiYTg4ZmY5IiwicG95bnQuc2N0IjoiSiIsInBveW50Lm9yZyI6Ijk2YTg3ZmUzLWViY2ItNDFhYS1iYjEwLWJhNDk2MjhlOTMyYSIsImlzcyI6Imh0dHBzOlwvXC9zZXJ2aWNlcy5wb3ludC5uZXQiLCJwb3ludC5raWQiOjYxNTUyNDYxNTI4MjcxNDE3NzcsInBveW50LmF0eSI6IlMiLCJleHAiOjE1NDg2MjkyNTIsImlhdCI6MTU0ODU0Mjg1MiwianRpIjoiNDJiYmE4NzItNjIxYS00MjkwLTg4NWYtY2M4YThiNDE2YjA5In0.QkGH0iGwbCF7lAZ23oxwgT8qCjVhzhOhIhI-0gvEk0Z1MzaN72AdTuuys4VEDM05gclFOyfed9aTYyWCepGzJlU9LcJ6g1sKSCJT-x6KluE-IxpYinuWxirDxNyU_Wfc-Lh-M_YmhlQF1vvG0ea5qsIW51YXUdR0xN5MLJCDT1dLNbQlTUFI5JX0_VMInRCxpIbzGw5h13vsurovi2AvhnjdCSgFK7jJY0l8f77V7m7dejVo9sLyOipOhx4FkV-CnljO74Myzil6l5fBM_xLLbc31mP9zU7OnHGIUALTz7bkJRMMp4ZPb4GWpkH4HrVrSxC8hY-mDPwl4JRPcF-yQA" ;
//const vehicleId = 'dd7295fa-6c65-484d-b38d-30df3bc31c0c';
const config = {
'Authorization':'Bearer ' + token,
'Accept': 'application/json',
'content-type': 'application/json'
}

export const FetchVehicles = (data) => {
return (fetch(apiUrl,{
method: "POST",
body: JSON.stringify({
	ttl: 500,
	data: "Hello I have reached to Airport",
  businessId           : 'cf073c6b-243c-4e1a-a156-92aeea8fe113',
  storeId              : '04600c3f-c066-4e48-be29-b481feaa4e12',
  deviceId             : 'urn:tid:48bc8edd-445c-3c6f-b27f-59c97d18b8ef',
  // deviceId             : 'urn:tid:48c54303-6d51-39af-bdeb-4af53f621652',
  // recipientClassName   : 'FooClass',
  recipientPackageName : 'co.poynt.testapp',
}),
headers: config
})
// .then(response => {
// 	if(response.status === 400){
// 		console.log('-----------400',response.status)
// 	}
// //dispatch(updateVehicles(response.data["devices"][vehicleId]))
// })
.then(response => {
	
		console.log('-----------div id data',response.status)
//dispatch(updateVehicles(response.data["devices"][vehicleId]))
})
.catch(error => {
throw(`------------  ${error}`);
})
)
}