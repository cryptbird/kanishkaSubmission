const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".topdiv_text1 p", {
  ...scrollRevealOption,
  delay: 500,
});
