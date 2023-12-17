export const splideOptions = {
  autoplay: true,
  wheel: true,
  waitForTransition: true,
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "2rem",
  breakpoints: {
    1024: {
      perPage: 2,
    },
    768: {
      perPage: 1,
    },
  },
};
