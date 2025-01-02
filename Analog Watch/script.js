setInterval(()=>{
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    hRotation = 30*hours + minutes/2;
    mRotation = 6*minutes;
    sRotation = 6*seconds;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

},1000);