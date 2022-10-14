
// ..............manu BarProp............


let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}



// ...............custom cursor............


// let cursor1 = document.querySelector('.cursor-1');
// let cursor2 = document.querySelector('.cursor-2');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
//     cursor2.style.top = e.pageY + 'px';
//     cursor2.style.left = e.pageX + 'px';
// }


// document.querySelectorAll('a').forEach(links =>{

//     links.onmouseenter = () =>{
//         cursor1.classList.add('active');
//         cursor2.classList.add('active');
//     }

//     links.onmouseleave = () =>{
//         cursor1.classList.remove('active');
//         cursor2.classList.remove('active');
//     }
// })





//  ..........Type-writer-Auto-Type......... 

   
      var typed = new Typed(".auto-type", {
        strings: ["Designer...", "Student...", "Developer..."],
        // strings: ['Hi, I am Tanumoy <br> Das From India'],
        // strings:['Welcome to all.....','Hi, I am Tanumoy Das','Lets code it up....'],
        cursor: "|",
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        delay: "natural", // 'natural' or Number
      });



      var typed = new Typed(".auto-type1", {
        strings: ["Student", "Web Developer...", "Designer..."],
        cursor: "|",
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        delay: "natural", // 'natural' or Number
      });
    



      // ...............contact form..................


      const scriptURL = 'https://script.google.com/macros/s/AKfycbxUg0p5FusLULI4G1fK_hC5i8u-XBaoEYx8sqySro-v0KRq75pQA4mtPcqqfjk-IeG9/exec'
      const form = document.forms['submit-to-google-sheet']

      const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message sent Successfully......";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 1000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });




      // ............pre-loader...........

    var loader = document.getElementById("pre");

    window.addEventListener("load", function () {
      pre.style.display = "none";
    });


