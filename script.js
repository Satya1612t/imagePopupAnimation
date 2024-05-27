const throttleFunction = (func, delay) => {
    let previous = 0;
    return (...args) => {
        const now = new Date().getTime();

        if (now - previous > delay) {
            previous = now;
            return func(...args);
        }
    }
}


const imageUrls = [
    "https://images.pexels.com/photos/20335187/pexels-photo-20335187/free-photo-of-entrance-to-the-tigran-honents-an-ancient-church-in-ani-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1542372712-fc07597133cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676920033540-77931ade307c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613462847848-f65a8b231bb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621867822738-ba65f95a8eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxyYW5kb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxyYW5kb218ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1682094094724-aa9e923311fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxyYW5kb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1560963619-c9e49c9380bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxyYW5kb218ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1572717600683-9e1f35efa29c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxyYW5kb218ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1679971488735-6e4d613c682f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxyYW5kb218ZW58MHx8MHx8fDA%3D"
];

let currentIndex = 0;

document.querySelector('.center').addEventListener("mousemove", throttleFunction((details) => {
    const div = document.createElement("div");
    div.classList.add("image-div");
    div.style.position = "fixed";
    div.style.left = details.clientX +"px";
    div.style.top = details.clientY +"px";

    const img =  document.createElement("img");
    img.setAttribute("src", imageUrls[currentIndex]);
    div.appendChild(img);
    document.body.appendChild(div);

    const rotationDirection = Math.random() < 0.5 ? -1 : 1;
    const rotationAngle = Math.random() * 20 * rotationDirection;
    
    gsap.to(img, {
        y: "0",
        ease: Power3,
        rotation: rotationAngle,
        duration: .5
    });

    gsap.to(img, {
        y: "100%",
        ease: Power1,
        // rotation: rotationAngle,
        delay: .5
    });
    

    currentIndex = (currentIndex + 1) % imageUrls.length;

    setTimeout(() => {
        div.remove(); 
    },500);
}, 200));