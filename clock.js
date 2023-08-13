const deg = 6;

const hr = document.querySelector('#hr');

const mn = document.querySelector('#mn');

const sc = document.querySelector('#sc');
setInterval(() => {
    let day = new Date();

    let hh = day.getHours() * 30;

    let mm = day.getMinutes() * deg;

    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;

    mn.style.transform = `rotateZ(${mm}deg)`;

    sc.style.transform = `rotateZ(${ss}deg)`;

})

function clockRuner() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var p = 'AM';
    if (hour > 12) {
        hour -= 12;
        p = 'PM';
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    var clock = hour + ":" + minute + ":" + second + " " + p;
    document.getElementById('digital').textContent = clock;

    setTimeout(clockRuner, 1000);
}

clockRuner();