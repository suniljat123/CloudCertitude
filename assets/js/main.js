/**
 * Template Name: Dewi
 * Updated: Mar 10 2023 with Bootstrap v5.2.3
 * Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );
  $('a[href^="#testimonials"]').on("click", function (event) {
    event.preventDefault();
    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body")
        .stop()
        .animate({
          scrollTop: target.offset().top - 85, // Adjust the offset value to match your navbar height /
        }); // Adjust the animation duration as needed
    }
  });
  $('a[href^="#team"]').on("click", function (event) {
    event.preventDefault();
    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body")
        .stop()
        .animate({
          scrollTop: target.offset().top - 85, // Adjust the offset value to match your navbar height /
        }); // Adjust the animation duration as needed
    }
  });
  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
  addEventListener("scroll", () => {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
      document.getElementById("whatsapp_logo").style.bottom = "60px";
    } else {
      document.getElementById("whatsapp_logo").style.bottom = "10px";
    }
  });
  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");

    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();
function removeSpaceFromLeadForm() {
  let lname = document.getElementById("last_name").value;
  let fname = document.getElementById("first_name").value;
  let company = document.getElementById("company").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  fname = fname.replace(/\s+/g, " ").trim();
  lname = lname.replace(/\s+/g, " ").trim();
  company = company.replace(/\s+/g, " ").trim();
  phone = phone.replace(/\s+/g, " ").trim();
  email = email.replace(/\s+/g, " ").trim();
  document.getElementById("first_name").value = fname;
  document.getElementById("last_name").value = lname;
  document.getElementById("company").value = company;
  document.getElementById("phone").value = phone;
  document.getElementById("email").value = email;
}
function callToast() {
  const toastDiv = document.getElementById("toastDiv");
  toastDiv.style.display = "flex";
  setTimeout(() => {
    document.getElementById("successDiv").style.display = "none";
  }, 4000);
  const toastEement = document.getElementById("formendSuccess");
  const toastEl = new bootstrap.Toast(toastEement, {
    animation: true,
    delay: 4000,
  });
  toastEl.show();
}
function callError() {
  const toastDiv = document.getElementById("toastDiv");
  toastDiv.style.display = "flex";
  setTimeout(() => {
    console;
    document.getElementById("toastDiv").style.display = "none";
  }, 4000);
  const toastEement = document.getElementById("formendError");
  const toastEl = new bootstrap.Toast(toastEement, {
    animation: true,
    delay: 4000,
  });
  toastEl.show();
}
function crossClicked() {
  document.getElementById("toastDiv").style.display = "none";
}
function sendOtp() {
  console.log("SendOtp");
  removeSpaceFromLeadForm();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "BrowserId=g1Zrr_uOEe2gTR9C7VyOiA; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1"
  );

  var raw = JSON.stringify({
    LastName: document.getElementById("last_name").value,
    FirstName: document.getElementById("first_name").value,
    Company: document.getElementById("company").value,
    Phone: document.getElementById("phone").value,
    Email: document.getElementById("email").value,
    SendOtp: "InsertLead",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://cloudie.my.salesforce-sites.com/InternalApps/services/apexrest/verifyOtpdata",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      EmailOtp = result;
    })
    .catch((error) => console.log("error", error));
}
function closeallbackdrop() {
  document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("company").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
function showFirstModal() {
  $("#staticBackdrop").modal("show");
}
window.addEventListener("input", function (evt) {
  console.log("input");
  fNameError = document.getElementById("fnameErr");
  lNameError = document.getElementById("lnameErr");
  phoneError = document.getElementById("phoneErr");
  companyError = document.getElementById("companyErr");
  emailError = document.getElementById("emailErr");
  if (evt.target.id === "first_name") {
    $("#first_name").removeClass("is-invalid");
    fNameError.innerHTML = "";
  } else if (evt.target.id === "last_name") {
    $("#last_name").removeClass("is-invalid");
    lNameError.innerHTML = "";
  } else if (evt.target.id === "phone") {
    $("#phone").removeClass("is-invalid");
    phoneError.innerHTML = "";
  } else if (evt.target.id === "company") {
    $("#company").removeClass("is-invalid");
    companyError.innerHTML = "";
  } else if (evt.target.id === "email") {
    $("#email").removeClass("is-invalid");
    emailError.innerHTML = "";
  } else if (evt.target.id === "otpValue") {
    $("#otpValue").removeClass("is-invalid");
    otpError.innerHTML = "";
  }
});

function sendLead() {
  console.log("SendLead");
  let fname = document.getElementById("first_name").value;
  fname = fname.trim();
  let lname = document.getElementById("last_name").value;
  lname = lname.trim();
  let company = document.getElementById("company").value;
  company = company.trim();
  let email = document.getElementById("email").value;
  email = email.trim();
  let phone = document.getElementById("phone").value;
  phone = phone.trim();
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  fNameError = document.getElementById("fnameErr");
  lNameError = document.getElementById("lnameErr");
  phoneError = document.getElementById("phoneErr");
  companyError = document.getElementById("companyErr");
  emailError = document.getElementById("emailErr");
  if (fname.length < 2) {
    $("#first_name").addClass("is-invalid");
    fNameError.innerHTML = "First Name must contains atleast 2 characters\r\n";
  } else if (fname.length > 0 && $("#first_name").hasClass("is-invalid")) {
    $("#first_name").removeClass("is-invalid");
    fNameError.innerHTML = "";
  }

  if (lname.length < 2) {
    $("#last_name").addClass("is-invalid");
    lNameError.innerHTML = "Last Name must contains atleast 2 characters\r\n";
  } else if (lname.length > 0 && $("#last_name").hasClass("is-invalid")) {
    $("#last_name").removeClass("is-invalid");
    lNameError.innerHTML = "";
  }
  //console.log(mailformat.test(document.getElementById("email").value));
  if (
    email.length < 1 ||
    !mailformat.test(document.getElementById("email").value)
  ) {
    $("#email").addClass("is-invalid");
    emailError.innerHTML = "Please Enter Correct Email\r\n";
  } else if (
    email.length > 0 &&
    mailformat.test(document.getElementById("email").value)
  ) {
    $("#email").removeClass("is-invalid");
    emailError.innerHTML = "";
  }

  if (phone.length !== 10) {
    $("#phone").addClass("is-invalid");
    phoneError.innerHTML = "Please Enter Correct Phone Number\r\n";
  } else if (phone.length === 10 && $("#phone").hasClass("is-invalid")) {
    $("#phone").removeClass("is-invalid");
    phoneError.innerHTML = "";
  }

  if (company.length < 2) {
    $("#company").addClass("is-invalid");
    companyError.innerHTML =
      "Company Name must contains atleast 2 characters\r\n";
  } else if (company.length > 0 && $("#company").hasClass("is-invalid")) {
    $("#company").removeClass("is-invalid");
    companyError.innerHTML = "";
  }

  if (
    !(
      $("#company").hasClass("is-invalid") ||
      $("#phone").hasClass("is-invalid") ||
      $("#email").hasClass("is-invalid") ||
      $("#last_name").hasClass("is-invalid") ||
      $("#first_name").hasClass("is-invalid")
    )
  ) {
    $("#staticBackdrop").modal("hide");
    const modal2 = new bootstrap.Modal("#exampleModalToggle2");
    modal2.show();
    sendOtp();
  }
}
