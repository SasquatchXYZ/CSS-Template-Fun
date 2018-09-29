$(document).ready(function () {
    let currentday = moment().format("ddd MMM Do YY");
    console.log(currentday);
    let tomorrow = moment().add(2, 'days').format("ddd MMM Do YY");
    console.log(tomorrow);
    }

);




