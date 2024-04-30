window.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".members__main_wrapper");
  const prev = document.querySelector(".members__slider-prev");
  const next = document.querySelector(".members__slider-next");
  const total = document.querySelector("#total");
  const current = document.querySelector("#current");
  const slidesWrapper = document.querySelector(".members__main");
  const slidesField = document.querySelector(".members__main_inner");

  const slidesSmall = document.querySelectorAll(".members__main_block-small");
  const slidesWrapperSmall = document.querySelector(".members__main_small");
  const slidesFieldSmall = document.querySelector(".members__main_inner-small");
  const totalSmall = document.querySelector("#totalSmall");
  const currentSmall = document.querySelector("#currentSmall");
  const prevSmall = document.querySelector(".members__slider-prev-small");
  const nextSmall = document.querySelector(".members__slider-next-small");

  const width = this.window.getComputedStyle(slidesWrapper).width;
  const widthSmall = this.window.getComputedStyle(slidesWrapperSmall).width;

  let slideIndex = 1;
  let offset = 0;

  let slideIndexSmall = 1;
  let offsetSmall = 0;

  if (slides.length < 10) {
    total.textContent = `${slides.length}`;
    current.textContent = `${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  function slidesFiled(name, slides) {
    name.style.width = 100 * slides.length + "%";
    name.style.display = "flex";
    name.style.transition = "0.5s all";
  }
  slidesFiled(slidesField, slides);
  slidesFiled(slidesFieldSmall, slidesSmall);

  function slideEach(wrapper, filter, size) {
    wrapper.style.overflow = "hidden";
    filter.forEach((slide) => {
      slide.style.width = size;
    });
  }

  slideEach(slidesWrapper, slides, width);
  slideEach(slidesWrapperSmall, slidesSmall, widthSmall);

  next.addEventListener("click", function () {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });
  prev.addEventListener("click", function () {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });

  if (slidesSmall.length < 10) {
    totalSmall.textContent = `${slidesSmall.length}`;
    currentSmall.textContent = `${slideIndexSmall}`;
  } else {
    totalSmall.textContent = slidesSmall.length;
    currentSmall.textContent = slideIndexSmall;
  }

  nextSmall.addEventListener("click", function () {
    if (
      offsetSmall ==
      +widthSmall.slice(0, widthSmall.length - 2) * (slidesSmall.length - 1)
    ) {
      offsetSmall = 0;
    } else {
      offsetSmall += +widthSmall.slice(0, widthSmall.length - 2);
    }

    slidesFieldSmall.style.transform = `translateX(-${offsetSmall}px)`;

    if (slideIndexSmall == slidesSmall.length) {
      slideIndexSmall = 1;
    } else {
      slideIndexSmall++;
    }

    if (slidesSmall.length < 10) {
      currentSmall.textContent = `${slideIndexSmall}`;
    } else {
      currentSmall.textContent = slideIndexSmall;
    }
  });
  prevSmall.addEventListener("click", function () {
    if (offsetSmall == 0) {
      offsetSmall =
        +widthSmall.slice(0, widthSmall.length - 2) * (slidesSmall.length - 1);
    } else {
      offsetSmall -= +widthSmall.slice(0, widthSmall.length - 2);
    }

    slidesFieldSmall.style.transform = `translateX(-${offsetSmall}px)`;

    if (slideIndexSmall == 1) {
      slideIndexSmall = slidesSmall.length;
    } else {
      slideIndexSmall--;
    }

    if (slidesSmall.length < 10) {
      currentSmall.textContent = `${slideIndexSmall}`;
    } else {
      currentSmall.textContent = slideIndexSmall;
    }
  });

  window.load = function () {
    let mediaSize = parseInt(
      window.getComputedStyle(document.head, null).getPropertyValue("width"),
      10
    );

    switchClass();

    windiw.resize = function () {
      mediaSize = parseInt(
        window.getComputedStyle(document.head, null).getPropertyValue("width"),
        10
      );

      switchClass();
    };
  };

  function switchClass() {
    if (mediaSize < 576) {
      let tour = document.querySelector(".tournament");
    }
  }

  // stages

  const slidesStage = document.querySelectorAll(".stages__slide");
  const prevStage = document.querySelector(".stages__slider-prev");
  const nextStage = document.querySelector(".stages__slider-next");
  const totalStage = document.querySelector("#totalStage");
  const currentStage = document.querySelector("#currentStage");
  const slidesWrapperStage = document.querySelector(".stages__slider-wrapper");
  const slidesFieldStage = document.querySelector(".stages__slider-inner");
  const slideDot = document.querySelector(".stage__slider_dots");

  const widthStage = window.getComputedStyle(slidesWrapperStage).width;

  let slideIndexStage = 1;
  let offsetStage = 0;

  // if (slidesStage.length < 10) {
  //   totalStage.textContent = `0${slidesStage.length}`;
  //   currentStage.textContent = `0${slideIndexStage}`;
  // } else {
  //   totalStage.textContent = slidesStage.length;
  //   currentStage.textContent = slideIndexStage;
  // }

  prevStage.style.opacity = ".5";

  function sliderStyle(name, wr) {
    name.style.width = 100 * slidesStage.length + "%";
    name.style.display = "flex";
    name.style.transition = "0.5s all";
    wr.style.overflow = "hidden";
  }
  sliderStyle(slidesFieldStage, slidesWrapperStage);

  slidesStage.forEach((slide) => {
    slide.style.width = widthStage;
  });

  const indicators = document.createElement("ol");
  const dots = [];
  indicators.style.cssText = `
    z-index: 15;
    display: flex;
    width: 100%;
    padding: 0;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
  `;

  slideDot.append(indicators);

  for (let i = 0; i < slidesStage.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      width: 10px;
      height: 10px;
      margin-left: 3px;
      margin-right: 3px;
      cursor: pointer;
      background-color: rgb(49, 49, 49);;
      border-radius: 50%;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  nextStage.addEventListener("click", function () {
    if (
      offsetStage ==
      +widthStage.slice(0, widthStage.length - 2) * (slidesStage.length - 1)
    ) {
      offsetStage = 0;
    } else {
      offsetStage += +widthStage.slice(0, widthStage.length - 2);
    }

    slidesFieldStage.style.transform = `translateX(-${offsetStage}px)`;

    if (slideIndexStage == slidesStage.length) {
      slideIndexStage = 1;
    } else {
      slideIndexStage++;
    }

    if (slideIndexStage === slidesStage.length) {
      nextStage.style.opacity = ".5";
    } else {
      nextStage.style.opacity = "1";
    }

    if (slideIndexStage === 1) {
      prevStage.style.opacity = ".5";
    } else {
      prevStage.style.opacity = "1";
    }

    // if (slidesStage.length < 10) {
    //   currentStage.textContent = `0${slideIndexStage}`;
    // } else {
    //   currentStage.textContent = slideIndexStage;
    // }
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndexStage - 1].style.opacity = 1;
  });
  prevStage.addEventListener("click", function () {
    if (offsetStage == 0) {
      offsetStage =
        +widthStage.slice(0, widthStage.length - 2) * (slidesStage.length - 1);
    } else {
      offsetStage -= +widthStage.slice(0, widthStage.length - 2);
    }

    slidesFieldStage.style.transform = `translateX(-${offsetStage}px)`;

    if (slideIndexStage == 1) {
      slideIndexStage = slidesStage.length;
    } else {
      slideIndexStage--;
    }

    if (slideIndexStage === 1) {
      prevStage.style.opacity = ".5";
    } else {
      prevStage.style.opacity = "1";
    }

    if (slideIndexStage === slidesStage.length) {
      nextStage.style.opacity = ".5";
    } else {
      nextStage.style.opacity = "1";
    }
    // if (slidesStage.length < 10) {
    //   currentStage.textContent = `0${slideIndexStage}`;
    // } else {
    //   currentStage.textContent = slideIndexStage;
    // }

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndexStage - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function (e) {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndexStage = slideTo;
      offsetStage = +widthStage.slice(0, widthStage.length - 2) * (slideTo - 1);

      slidesFieldStage.style.transform = `translateX(-${offsetStage}px)`;

      // if (slidesStage.length < 10) {
      //   currentStage.textContent = `0${slideIndexStage}`;
      // } else {
      //   currentStage.textContent = slideIndexStage;
      // }

      dots.forEach((dot) => (dot.style.opacity = ".5"));
      dots[slideIndexStage - 1].style.opacity = 1;
    });
  });
});
