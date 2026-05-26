export type Episode = {
  id: string;
  number: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  releaseDate: string;
  artworkInitials: string;
  artworkBg: string;
};

export const episodes: Episode[] = [
  {
    id: "ep-47",
    number: 47,
    title: "Trap Houses to Penthouses",
    guest: "Big Mello",
    guestRole: "Atlanta MC, Founder of GoldChain Records",
    duration: "1h 18m",
    releaseDate: "May 21, 2026",
    artworkInitials: "BM",
    artworkBg: "from-[#3a2418] to-[#1a0f08]",
  },
  {
    id: "ep-46",
    number: 46,
    title: "The Producer Who Doesn't Sleep",
    guest: "Kaze",
    guestRole: "Producer, Sample Architect",
    duration: "54m",
    releaseDate: "May 14, 2026",
    artworkInitials: "KZ",
    artworkBg: "from-[#1a2638] to-[#0b1320]",
  },
  {
    id: "ep-45",
    number: 45,
    title: "Bars Over Branding",
    guest: "Jay Reign",
    guestRole: "Brooklyn Lyricist, Indie Label Operator",
    duration: "1h 02m",
    releaseDate: "May 7, 2026",
    artworkInitials: "JR",
    artworkBg: "from-[#2a1a2a] to-[#120912]",
  },
];
