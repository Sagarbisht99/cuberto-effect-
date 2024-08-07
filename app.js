const throttleFunction = (func, delay) => {
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


let main = document.querySelector(".main");

main.addEventListener("mousemove" , throttleFunction((mouse) => {
      let div = document.createElement("div");
      console.log(div);
      div.classList.add("imagediv")
      div.style.left = mouse.clientX + "px"
      div.style.top = mouse.clientY + "px"
      document.body.appendChild(div)

     let img = document.createElement("img");
     img.setAttribute("src" , "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
     div.appendChild(img)


     gsap.to(img , {
         y: "0",
         ease : Power3,
         duration : 0.6
     })

     gsap.to(img , {
        y: "100%",
        delay : 0.6 , 
        ease : Power1
    })

     setTimeout(() => {
         div.remove();
     },600)


},100))