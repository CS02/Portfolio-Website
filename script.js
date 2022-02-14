
function Menu(e){
    let menu = document.querySelector('.navbar-links');
    let btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}


