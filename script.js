refreshClock()

function refreshClock(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm = "AM"
    

    if (hour>12){
        if (hour<18){document.getElementById('greetings').innerHTML = "Good Afternoon"}
        else{ document.getElementById('greetings').innerHTML = "Good Evening" }
        ampm = 'PM'
        hour -= 12;
        
    }

    hour = hour>=0 ? hour : '0'+hour
    min = min>=10 ? min : '0'+min
    sec = sec>=10 ? sec : '0'+sec

    document.getElementById('hour').innerHTML= hour
    document.getElementById('minutes').innerHTML= min
    document.getElementById('seconds').innerHTML= sec
    document.getElementById('ampm').innerHTML = ampm

    setTimeout(()=>{
        refreshClock();
    },300)
}