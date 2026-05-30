export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Tees" | "Hoodies" | "Headwear" | "Accessories";
  tag?: "New Drop" | "Limited" | "Best Seller" | "Fan Fave";
  description: string;
  colors: string[];
  image?: string;
};

export const products: Product[] = [
  {
    id: "wrff-logo-tee",
    name: "WRFF Logo Tee",
    price: 35,
    category: "Tees",
    tag: "Best Seller",
    description:
      "Classic heavyweight tee with the iconic WRFF logo screenprinted on the chest. Available in S–3XL.",
    colors: ["#1a1a1a", "#E85D2C", "#F4E4C1"],
    image: "/IMG_3929.PNG",
  },
  {
    id: "no-pr-scripts-hoodie",
    name: '"No PR Scripts" Hoodie',
    price: 65,
    category: "Hoodies",
    tag: "New Drop",
    description:
      "Our motto, your fit. 400gsm fleece pullover with embroidered back graphic and kangaroo pocket.",
    colors: ["#0A0A0A", "#2d2d2d"],
  },
  {
    id: "stay-hungry-cap",
    name: "Stay Hungry Cap",
    price: 38,
    category: "Headwear",
    tag: "Limited",
    description:
      'Structured 6-panel with embroidered "stay hungry." in accent script. Adjustable strapback.',
    colors: ["#0A0A0A", "#E85D2C"],
  },
  {
    id: "wrff-wristband",
    name: "WRFF Wristband",
    price: 10,
    category: "Accessories",
    tag: "Fan Fave",
    description:
      "Silicone wristband repping the podcast loud. Durable, flexible, and 100% sauce.",
    colors: ["#E85D2C"],
    image: "/IMG_3927.PNG",
  },
  {
    id: "sticker-pack-vol1",
    name: "Sticker Pack Vol. 1",
    price: 12,
    category: "Accessories",
    description:
      "8 die-cut vinyl stickers. Laptop-proof, dishwasher-safe, full sauce. Ships flat.",
    colors: [],
  },
  {
    id: "fresh-off-mic-snapback",
    name: "Fresh Off The Mic Snapback",
    price: 45,
    category: "Headwear",
    tag: "New Drop",
    description:
      "Flat-brim snapback with woven patch logo and adjustable back closure. One size fits.",
    colors: ["#161616", "#E85D2C"],
    image: "/IMG_3928.PNG",
  },
  {
    id: "wrff-tote",
    name: "WRFF Tote Bag",
    price: 28,
    category: "Accessories",
    tag: "Fan Fave",
    description:
      "Heavy cotton canvas tote with the WRFF crest screenprinted large. Carry your bars and your groceries.",
    colors: ["#F4E4C1", "#0A0A0A"],
  },
];
