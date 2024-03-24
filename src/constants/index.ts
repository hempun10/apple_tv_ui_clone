export const PRICING = [
  {
    subHeadText: "Buy an Apple device",
    headingText: "3 months free.",
    desc: "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.2",
    btnText: "Check eligibility",
  },
  {
    subHeadText: "Free 7-day trial",
    headingText: "$9.99/mo.",
    desc: "A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family.",
    btnText: "Try it free",
  },
  {
    subHeadText: "Free 1‑month trial",
    headingText: "Apple One",
    desc: "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less. ",
    btnText: "Try Apple One free",
  },
];

export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster: "/assets/airplane.webp",
    name: "Airplane",
  },
  {
    poster: "/assets/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/assets/laboratory.webp",
    name: "Laboratory",
  },
  {
    poster: "/assets/napoleon.webp",
    name: "Napoleon",
  },
  {
    poster: "/assets/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/assets/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/assets/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
