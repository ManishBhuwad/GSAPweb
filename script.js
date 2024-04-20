
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const tloading = gsap.timeline()


const innerwidth = window.innerWidth
console.log(innerwidth)



const tl11 = gsap.timeline({})

tl11.from('.firstPage .span-a, .span-b, .span-c,.span-d',{
    opacity:0,
    duration:2,
    ease:'ease-in',
    stagger:.2
})


tl11.play()
const tl1 = gsap.timeline({
    delay:1.5
})

tl1.to('.firstPage .span-a',{
    
    top:"5%",
    left:"5%",
  
},"about")
tl1.to('.firstPage .span-b',{
    top:"5%",
    right:"5%",
  
},"about")
tl1.to('.firstPage .span-c',{
    bottom:"5%",
    // left:"5%",
  
},"about")

tl1.to('.firstPage .span-d',{
    bottom:"5%",
    right:"5%",
  
},"about")


tl1.to('.mid-camera-section',{
    delay:.5,
    opacity:1,
    scale:.9
})







function mobilePage3(){
    const tl3 = gsap.timeline({
        scrollTrigger:{
            scroller: "body",
            trigger: ".pageThird",
            start: "top 99%",
            end:"top -150%",
            scrub: true,
            // markers: true,
         
        }
    },)

    tl3.to(".im1", {
        y:"-100px",
        ease: "power1",
        start:"top 0%",
        stagger:.2
    
    },)

    tl3.to(".pageThird .im2", {
        scale:1.1,
        y:"-30px",
        // stagger:.2,
        ease: "power1"
    
    },)
    tl3.to(".pageThird .im3", {
        // y:"-100px",
        // backgroundColor:"red",
        // stagger:.2,
        ease: "power3"
    
    },)

    tl3.to(".pageThird .im3", {
        y:"-10px",
        scale:3.5,
        // stagger:.2,
        ease: "power3"
    
    },)
    
    tl3.to(".pageThird .im4", {
        y:-100,
        // stagger:.2,
        scale:1.1,
        ease: "power2"
    
    },"anix")
    tl3.to(".pageThird .im5", {
        y:-60,
        // stagger:.2,
        scale:1.1,
        ease: "power2"
    
    },)
    tl3.to(".pageThird .im6", {
        y:-10,
        // stagger:.2,
        scale:1.2,
        ease: "power2"
    
    },)
    
    
}

function fullPage3(){
   
    const tl3 = gsap.timeline({
        scrollTrigger:{
            scroller: "body",
            trigger: ".pageThird",
            start: "top 90%",
            end:"top -400%",
            scrub: true,
            stagger:1
        }
    },)
    
    tl3.to(".hoverText p", {
        width:"100%",
        stagger:.2,
        ease: "easeIn",
    })
    tl3.to(".im1", {
        y:"-100px",
        // stagger:.1,
        // ease: "easeIn",
        start:"top 0%"
    
    },"<1")
    tl3.to(".pageThird .im2", {
        scale:1.2,
        y:"-100px",
        // stagger:.2,
        ease: "easeIn"
    
    },)
    tl3.to(".pageThird .im3", {
        y:"-100px",
        // backgroundColor:"red",
        // stagger:.2,
        ease: "easeIn"
    
    },)
    
    tl3.to(".pageThird .im4", {
        y:-100,
        // stagger:.2,
        scale:1.1,
        ease: "easeIn"
    
    },)
    tl3.to(".pageThird .im5", {
        y:-100,
        // stagger:.2,
        scale:1.1,
        ease: "easeIn"
    
    },)
    tl3.to(".pageThird .im6", {
        y:-100,
        // stagger:.2,
        scale:1.1,
        ease: "easeIn"
    
    },)
    
    
   
}


function mobilePage4(){
    const tl = gsap.timeline({
        scrollTrigger:{
            scrolller:".main",
            trigger:'.pageFourth',
            start:'top 98%',
            scrub:1,
            duration:1,

        }
    })

    tl.to('.pageFourth',{
        height:'120vh'
    },'anime')

    // const tl2 = gsap.trigger({
    //     scroller:'.main',
    //     trigger:".pageFourth",
    //     markers: true,
    //     start:"top 10%",
    //     pin: true,
    // }) 
    tl.to('.innerdiv',{
        width:"100%",
        height:"100%"
    },"anime")
}

function fullPage4(){
    const t = gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".pageFourth",
            start:"top 60%",
            end:"top 55%",
            scrub:1,
            pin:true
        }
       
    })

    t.from(".pageFourth",{
        height:"0vh",
        ease:"easeIn"
    },"anix")
    
    
    t.to("#firstInnerdiv",{
        width:"100%",
        height:"100%",
    },'anix')

    const tl = gsap.timeline({
        scrollTrigger:{
            scroller:'body',
            trigger:'.pageFourth',
            scrub: true,
            pin:true,
            start:"top 0%",
            end: "top -200%"
        }
        
    })
    
 

    tl.to(' .innerdiv',{
        width:"100%",
        height:'100%'
    },)
    tl.to(' .innerdiv',{
        width:"100%",
        height:'100%'
    },)
    tl.from(' .txtcont',{
       opacity:0
    },)
}

// const tl2 = gsap.timeline({
//     delay:2
// })

// tl2.from('.firstPage .mid-camera-section',{
//     scale:2,
//     opacity:0,
//     duration:1,
//     // ease: "bounce"
// })
// tl2.to('.midle-content h2',{
//     opacity:1,
//     duration:1,
//     delay:.5,
//     ease:"ease-out",

// })

// tl1.play()



// // tl3.from('.filter',{
// //     height:"100%",
// //     backgroundColor:"white"
// // },"anix")


// const tl4 = gsap.timeline({
//     scrollTrigger:{
//     scroller:"body",
//     trigger:".pageFourth",
//     start :"top 0%",
//     end:"top -600%",
//     scrub:1,
//     markers:true,
//     pin:true,
    
//     }
// })

// tl4.to('.innerdiv',{
//     width:"100%",
//     height:"100%",
    
// })





if(innerwidth >700){
    fullPage3();
    fullPage4()
}else{
    mobilePage3()
    mobilePage4()
}







