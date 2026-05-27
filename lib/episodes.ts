export type Episode = {
  id: string;
  number: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  releaseDate: string;
  youtubeId: string;
};

export const episodes: Episode[] = [
  {
    id: "ep-01",
    number: 1,
    title: "Will Rap For Food Show EP. 1",
    guest: "Tom G & Chef LeeLee",
    guestRole: "Tampa MC & In-Studio Chef",
    duration: "Episode 1",
    releaseDate: "Watch on YouTube",
    youtubeId: "Lq5oLUudoXM",
  },
  {
    id: "wrff-commercial",
    number: 2,
    title: "The Social Media Commercial",
    guest: "Will Rap For Food",
    guestRole: "Official Podcast Trailer",
    duration: "Trailer",
    releaseDate: "Watch on YouTube",
    youtubeId: "4YohmDp6RMY",
  },
  {
    id: "wrff-challenge-beat",
    number: 3,
    title: "#WillRapForFoodChallenge",
    guest: "Free Instrumental",
    guestRole: "Beat drop — rap it, post it, tag us",
    duration: "Instrumental",
    releaseDate: "Watch on YouTube",
    youtubeId: "YtYXC_D_Sd0",
  },
];
