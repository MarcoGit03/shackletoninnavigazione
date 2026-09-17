(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal the footer with a soft fade-up as soon as it enters the viewport.
  var footer = document.querySelector(".site-footer");
  if (footer) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              footer.classList.add("is-visible");
              observer.unobserve(footer);
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(footer);
    } else {
      footer.classList.add("is-visible");
    }
  }

  // Subtle parallax tilt on the hand-drawn circle, desktop pointer only.
  var visual = document.querySelector(".hero__visual");
  var circle = document.querySelector(".hero__circle");
  var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (visual && circle && supportsHover && !reduceMotion) {
    var raf = null;
    var targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    visual.addEventListener("mousemove", function (event) {
      var rect = visual.getBoundingClientRect();
      var relX = (event.clientX - rect.left) / rect.width - 0.5;
      var relY = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = relX * 10;
      targetY = relY * 10;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    visual.addEventListener("mouseleave", function () {
      targetX = 0;
      targetY = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    function tick() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      circle.style.translate = currentX.toFixed(2) + "px " + currentY.toFixed(2) + "px";

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }
  }
})();
