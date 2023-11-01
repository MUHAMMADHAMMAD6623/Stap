function theem() {
    var dbtn = document.querySelector('.dbtn');
    var lbtn = document.querySelector('.lbtn');

    if (dbtn.style.visibility === 'hidden' || dbtn.style.visibility === '') {
        dbtn.style.visibility = 'inherit';
        lbtn.style.visibility = 'inherit';
    } else {
        dbtn.style.visibility = 'hidden';
        lbtn.style.visibility = 'hidden';
    }
}

function darktheme() {
    var body = document.querySelector('.body').style.background = 'linear-gradient(100deg, rgb(1, 1, 17), rgb(1, 1, 24), rgb(3, 3, 36), rgb(4, 4, 48), rgb(5, 5, 51), rgb(7, 7, 56), rgb(8, 8, 61), rgb(7, 7, 61))'
    var mainheading = document.querySelector('.top-heading').style.color = 'white'
    var bottomheading = document.querySelector('.bottom-heading').style.color='gray'
    var navbar = document.querySelector('.navbar').style.background='black'
    var navheading = document.querySelector('.left').style.color='rgb(82, 82, 158)'
    var featureheading = document.querySelector('.heading').style.color='white'
    var iconbox = document.querySelector('.icons').style.background='black'
    var description = document.querySelector('.explanation').style.color='rgb(153, 153, 153)'
    var compatibility = document.querySelector('.headingof').style.color='white'
    var supportage = document.querySelector('.supporting').style.color='white'
}

function lighttheme() {
    var body = document.querySelector('.body').style.background = 'linear-gradient(100deg,white,rgb(240, 240, 240),rgb(230, 230, 230),rgb(220, 220, 220),rgb(210, 210, 210),rgb(200, 200, 200)'
    var mainheading = document.querySelector('.top-heading').style.color = 'black'
    var bottomheading = document.querySelector('.bottom-heading').style.color = 'rgb(46, 46, 46)'
    var navbar = document.querySelector('.navbar').style.background = 'rgb(126, 126, 126)'
    var navheading = document.querySelector('.left').style.color = 'black'
    var featureheading = document.querySelector('.heading').style.color='black'
    var iconbox = document.querySelector('.icons').style.background='white'
    var description = document.querySelector('.explanation').style.color='rgb(50,50,50)'
    var compatibility = document.querySelector('.headingof').style.color='black'
    var supportage = document.querySelector('.supporting').style.color='black'
}