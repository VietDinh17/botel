import axios from 'axios';

//reservation search request api. needs date from
// const apiUrl = 'https://repository-dev.hapicloud.io/api/v2/repository/reservations/search';
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWlyIiwicmVwb3NpdG9yeUFjY2Vzc0lkIjoibXVpciIsImV4cCI6MTU0ODYzMzc3NX0.A6IevKwFwHrOLjMjZgFf9lsUj3pAmSxDlqZhVAHJ_U9vRjLfjb2K0qvwBkYhrKGR0xeGrpaH_iYQCfUBrB4IbQ";
//
// export const fetchVehicles = () => {
//   console.log("Function start")
// return axios.post(apiUrl,{
// params: {
//   'fromDate' : '2019-01-24'
// },
// header: {"authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWlyIiwicmVwb3NpdG9yeUFjY2Vzc0lkIjoibXVpciIsImV4cCI6MTU0ODYzMzc3NX0.A6IevKwFwHrOLjMjZgFf9lsUj3pAmSxDlqZhVAHJ_U9vRjLfjb2K0qvwBkYhrKGR0xeGrpaH_iYQCfUBrB4IbQ",
//           'Content-Type': 'application/json',
//           'Cache-Control' : 'no-cache' }
// } )
// .then(response => {
// console.log('-----------div id data',response);
// })
// .catch(error => {
// console.log(" The header looks like this, " )
// throw(error);
// });
// }



const apiUrl = 'https://repository-dev.hapicloud.io/api/v2/repository/reservations/search'; //geo.
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWlyIiwicmVwb3NpdG9yeUFjY2Vzc0lkIjoibXVpciIsImV4cCI6MTU0ODYzMzc3NX0.A6IevKwFwHrOLjMjZgFf9lsUj3pAmSxDlqZhVAHJ_U9vRjLfjb2K0qvwBkYhrKGR0xeGrpaH_iYQCfUBrB4IbQ'
//const vehicleId = 'dd7295fa-6c65-484d-b38d-30df3bc31c0c';
const config = {
headers: {'Authorization':'Bearer ' + token}
};
export const fetchVehicles = (data) => {
return (fetch(apiUrl,{

method: "POST",
params: {
  'fromDate' : '2019-01-24'
},
headers: {'Authorization': 'Bearer '+token}
} )
.then(
  console.log(response)
//   response => {
// console.log('-----------div id data',response);
//dispatch(updateVehicles(response.data["devices"][vehicleId]))
})
.catch(error => {
  console.log(" Something s wrong "+ error)
throw(`------------  ${error}`);
})

)
}







//
// var data = JSON.stringify({
//   "fromDate": "2019-01-24"
// });
//
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });
//
// xhr.open("POST", "https://repository-dev.hapicloud.io/api/v2/repository/reservations/search");
// xhr.setRequestHeader("cookie", "JSESSIONID=2F4A4F38199F19EB754DAA566C2F72FC");
// xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWlyIiwicmVwb3NpdG9yeUFjY2Vzc0lkIjoibXVpciIsImV4cCI6MTU0ODYzMzc3NX0.A6IevKwFwHrOLjMjZgFf9lsUj3pAmSxDlqZhVAHJ_U9vRjLfjb2K0qvwBkYhrKGR0xeGrpaH_iYQCfUBrB4IbQ");
// xhr.setRequestHeader("content-type", "application/json");
//
// xhr.send(data);
