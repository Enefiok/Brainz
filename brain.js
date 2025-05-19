document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
  
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('nft-iframe');
    const errorMsg = document.getElementById('nft-error');
  
    // Set timeout to detect failed iframe loading
    setTimeout(() => {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const bodyContent = iframeDoc?.body?.innerHTML || "";
  
        if (bodyContent.trim() === "" || bodyContent.includes("404")) {
          iframe.style.display = "none";
          errorMsg.style.display = "block";
        }
      } catch (e) {
        // Likely a cross-origin issue, show error by default
        iframe.style.display = "none";
        errorMsg.style.display = "block";
      }
    }, 10000);
  });

  

  function scrollCards(direction) {
    const container = document.getElementById('cardContainer');
    const scrollAmount = 340; // card width + gap
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  

  

  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
  
  // On click — keep your existing behavior
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // On scroll — update active nav based on scroll position
  window.addEventListener('scroll', () => {
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });
  