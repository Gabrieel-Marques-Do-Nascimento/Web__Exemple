// let sections = document.querySelectorAll("section");

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height= sec.offsetHeight;

//     if (top >= offset && top < offset + height) {
//       sec.classList.add("show-animated");
//       // if want to use repeating animation
//     } else {
//    sec.classList.remove("show-animated");
//     }
//   })
// }

function reveal() {
    var reveals = document.querySelectorAll('section');

    for (let i = 0; i < reveals.length; i++) {
        var winheigh = window.innerHeight;
        var elemtop = reveals[i].getBoundingClientRect().top;
        var elemvisible = 150;

        if (elemtop < winheigh - elemvisible) {
            reveals[i].classList.add("show-animated");
        }
        else {
            reveals[i].classList.remove("show-animated");
        }
    }
}

window.addEventListener("scroll", reveal)
















