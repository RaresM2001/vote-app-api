// const fs = require('fs');
// const service = require('../services/member');

// const getMembers = () => {
//   const raw = fs.readFileSync('./members.json');
//   const members = JSON.parse(raw);
//   return members;
// }

// const formatToReqObj =  (array, adminId) => {
//   var arr = [];
//   let jsonArray = getMembers();
//   for(let i = 0 ; i < jsonArray.SeNS.length; i++) {
//     if(!checkForMissingFields(array.SeNS[i])) {
//       let firstAndLastName = getFirstAndLastName(array.SeNS[i]["Nume si Prenume"]);
//       let memberOjbject = {
//         ...firstAndLastName,
//         CNP: array.SeNS[i].CNP,
//         email: array.SeNS[i]["address mail"],
//         joinedIn: array.SeNS[i]["data adeziune"],
//         address: array.SeNS[i].address,
//         DGRFP: array.SeNS[i].DGRFP,
//         adminId
//       };
//       arr.push(memberOjbject);
//     }
//   }
//   console.log(JSON.stringify(arr))
//   return arr;
// }

// const checkForMissingFields = (member) => {
//   if(member["Nume si Prenume"] == "" || member["CNP"] == "" || member["address mail"] == "") return true;
//   if(member["Nume si Prenume"] == undefined || member["CNP"] == undefined || member["address mail"] == undefined) return true;
//   return false;
// }

// const getFirstAndLastName = (name) => {
//   let firstName = name.substr(0, name.indexOf(' '));
//   let lastName = name.substr(name.indexOf(' ') + 1);
  
//   return {firstName, lastName};
// }
// module.exports = {
//   getMembers,
//   formatToReqObj,
//   addMembers
// }