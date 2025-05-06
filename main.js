const loader = document.getElementById('loader');
const background = document.getElementById('background');
const drop = document.getElementById("drop");
const ripple1 = document.getElementById("ripple1");
const ripple2 = document.getElementById("ripple2");
const ripple3 = document.getElementById("ripple3");
const ripple4 = document.getElementById("ripple4");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

gsap.set(drop, {
  y: 50,
});

function playAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(drop, {
      y: "60vh",
      duration: 2.5,
      ease: "bounce.out"
    })
    .to(drop, { scale: 0.2, opacity: 0, duration: 0.3 }, "-=0.2")
    .fromTo(ripple1,
      { scale: 0, opacity: 1 },
      { scale: 20, opacity: 0, duration: 1.5 },
      "<"
    )
    .fromTo(ripple2,
      { scale: 0, opacity: 1 },
      { scale: 20, opacity: 0, duration: 1.5 },
      "<+0.1"
    )
    .fromTo(ripple3,
      { scale: 0, opacity: 1 },
      { scale: 20, opacity: 0, duration: 1.5 },
      "<+0.2"
    )
    .fromTo(ripple4,
      { scale: 0, opacity: 1 },
      { scale: 20, opacity: 0, duration: 1.5 },
      "<+0.3"
    )
    .fromTo(overlay,
      { scale: 0, opacity: 1 },
      { scale: 25, opacity: 1, duration: 1 },
      "<+0.4"
    )
    .to(mainContent, {
      opacity: 1,
      duration: 0.2
    },"-=1")
    .fromTo(".intro", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=1"
    )
    .add(() => {
      // main-content의 pointer-events 활성화
      mainContent.style.pointerEvents = "auto"; 
    });
}

drop.addEventListener("click", playAnimation);

let lastTime = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTime < 30) return; // 50ms 제한

  lastTime = now;

  const ripple = document.createElement("div");
  ripple.classList.add("mouse-ripple");
  document.body.appendChild(ripple);

  gsap.set(ripple, {
    left: e.clientX,
    top: e.clientY,
    xPercent: -50,
    yPercent: -50,
  });

  gsap.fromTo(
    ripple,
    { scale: 0, opacity: 0.4 },
    {
      scale: 5,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      onComplete: () => ripple.remove()
    }
  );
});

drop.addEventListener("mouseenter", () => {
  gsap.to(drop, { scale: 1.2, duration: 0.3, ease: "power2.out" });
});

drop.addEventListener("mouseleave", () => {
  gsap.to(drop, { scale: 1, duration: 0.3, ease: "power2.out" });
});

