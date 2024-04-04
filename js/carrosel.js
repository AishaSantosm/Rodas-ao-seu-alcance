const carrousel = document.getElementsByClassName("card-deck");
console.log(carrousel);
$(carrousel).slick({
  slidesToShow: 3,
  accessibility: true,
  autoplay: false,
  arrow: true,
  infinite: true,
  useCSS: true,
});
