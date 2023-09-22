const DateE = "21 Sep 2025 7:00 PM";

document.getElementById("DateE").innerText = DateE;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(DateE);
    const now = new Date()

    const diff = (end - now)/1000 ;

    console.log(diff);
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff /3600) % 24 ;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

    //convert into days


}

clock();

setInterval (
    () =>{
    clock()
},1000
)

// 1day = 24hrs
// 1hr = 60 mins
// 60 mins = 3600 sec
