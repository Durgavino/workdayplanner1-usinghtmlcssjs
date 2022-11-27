


const d = new Date();
//const time = d.getHours();


const time= d.getHours() %12 || 12;



var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var currentday = document.getElementById("currentDay");



let day = weekday[d.getDay()];
let date = dates[d.getDate()];

const months = monthNames[d.getMonth()];

currentday.innerHTML = day + "," + months + " " + date; 

var rowlist = document.querySelectorAll(".row");


var rowlistarr = Array.from(rowlist);

var index = 0;


function timeblock() {

  for (index = 0; index < rowlistarr.length; index++) {
    console.log("time",time);


    console.log(rowlistarr.length);
    if (time == rowlistarr.length) {
   
  
       document.getElementById(`textarea${index+9}`).style.backgroundColor='red';


    }
      

    else if (time < rowlistarr.length) {
     
      

document.getElementById(`textarea${index+9}`).style.backgroundColor='green';



    }
    else if (time > rowlistarr.length) {
   
   

document.getElementById(`textarea${index+9}`).style.backgroundColor='gray';


    }

  }

}
timeblock();

const sbtn=document.getElementById('sbtn');
const textarea9=document.getElementById('textarea9');

sbtn.addEventListener('click',save);

function save(){
  localStorage.setItem('txt',textarea9.value);
  return localStorage.getItem('txt');
}

