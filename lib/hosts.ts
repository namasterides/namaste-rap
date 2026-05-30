export type Host = {
  id: string;
  name: string;
  handle: string;
  bio: string;
  gradient: string;
  image?: string;
};

export const hosts: Host[] = [
  {
    id: "host-1",
    name: "Karma",
    handle: "@karma",
    bio: "Former crate-digger turned interviewer. Spent a decade A&Ring before he picked up a mic of his own.",
    gradient: "from-[#2a1810] via-[#0f0a07] to-[#1a0e08]",
    image: "/karma.PNG",
  },
  {
    id: "host-2",
    name: "David Fif",
    handle: "@davidfif",
    bio: "Brooklyn-bred journalist who's been in the room since the blog era. Asks the question everyone else is scared to.",
    gradient: "from-[#181a28] via-[#0a0b14] to-[#101220]",
  },
];
