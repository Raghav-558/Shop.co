import { FiveStarIcon, FourHalfStarIcon, FourStarIcon, ThreeHalfStarIcon, ThreeStarIcon } from "./icons";

export const HEADER_LIST = [
  {
    title: "Shop",
    link: "#shop",
    list: [
      { title: "item 1", link: "#item 1" },
      { title: "item 2", link: "#item 2" },
      { title: "item 3", link: "#item 3" },
    ],
  },
  {
    title: "On Sale",
    link: "#on-sale",
  },
  {
    title: "New Arrivals",
    link: "#new-arrivals",
  },
  {
    title: "Brands",
    link: "#brands",
  },
];

export const COUNT_LIST = [
  {
    description: "International Brands",
  },
  {
    description: "High-Quality Products",
  },
  {
    description: "Happy Customers",
  },
];

export const BRANDS_LIST = [
  {
    image: "/assets/images/webp/versace.webp",
  },
  {
    image: "/assets/images/webp/zara.webp",
  },
  {
    image: "/assets/images/webp/gucci.webp",
  },
  {
    image: "/assets/images/webp/prada.webp",
  },
  {
    image: "/assets/images/webp/calvin.webp",
  },
];

export interface ItemsList {
  image: string;
  title: string;
  stars: any;
  productRating: number;
  sellingPrice: string;
  discount: string;
  marketPrice: string;
}

export const NEW_ARRIVALS_LIST: ItemsList[] = [
  {
    image: "/assets/images/webp/new-arrivals-first.webp",
    title: "T-shirt with Tape Details",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    sellingPrice: "$120",
    marketPrice: "",
    discount: "",
  },
  {
    image: "/assets/images/webp/new-arrivals-second.webp",
    title: "Skinny Fit Jeans",
    stars: <ThreeHalfStarIcon />,
    productRating: 3.5,
    sellingPrice: "$240",
    marketPrice: "$260",
    discount: "-20",
  },
  {
    image: "/assets/images/webp/new-arrivals-third.webp",
    title: "Checkered Shirt",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    sellingPrice: "$180",
    marketPrice: "",
    discount: "",
  },
  {
    image: "/assets/images/webp/new-arrivals-fourth.webp",
    title: "Sleeve Striped T-shirt",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    sellingPrice: "$130",
    marketPrice: "$160",
    discount: "-30",
  },
];

export const TOP_SELLING_LIST: ItemsList[] = [
  {
    image: "/assets/images/webp/top-selling-first.webp",
    title: "Vertical Striped Shirt",
    stars: <FiveStarIcon />,
    productRating: 5,
    marketPrice: "$232",
    sellingPrice: "$212",
    discount: "-20",
  },
  {
    image: "/assets/images/webp/top-selling-second.webp",
    title: "Courage Graphic T-shirt",
    stars: <FourStarIcon />,
    productRating: 4,
    marketPrice: "",
    sellingPrice: "$145",
    discount: "",
  },
  {
    image: "/assets/images/webp/top-selling-third.webp",
    title: "Loose Fit Bermuda Shorts",
    stars: <ThreeStarIcon />,
    productRating: 3,
    marketPrice: "",
    sellingPrice: "$80",
    discount: "",
  },
  {
    image: "/assets/images/webp/top-selling-fourth.webp",
    title: "Faded Shinny Jeans",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    marketPrice: "",
    sellingPrice: "$210",
    discount: "",
  },
];

export const FOOTER_LIST = [
  {
    title: "Company",
    list: [
      { title: "About", link: "/about" },
      { title: "Features", link: "/features" },
      { title: "Works", link: "/works" },
      { title: "Career", link: "/career" },
    ],
  },
  {
    title: "Help",
    list: [
      { title: "Customer Support", link: "/customer-support" },
      { title: "Delivery-details", link: "/delivery-details" },
      { title: "Terms & Conditions", link: "/terms-conditions" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  {
    title: "FAQ",
    list: [
      { title: "Account", link: "/about" },
      { title: "Manage Deliveries", link: "/manage-deliveries" },
      { title: "Orders", link: "/orders" },
      { title: "Payments", link: "/payments" },
    ],
  },
  {
    title: "Resources",
    list: [
      { title: "Free eBooks", link: "/free-ebooks" },
      { title: "Development Tutorial", link: "/development-tutorial" },
      { title: "How to - Blog", link: "/how-to-blog" },
      { title: "Youtube Playlist", link: "/youtube-playlist" },
    ],
  },
];

export const PAYMENTS_COMPANY_LIST = [
  {
    image: "/assets/images/webp/visa.webp",
  },
  {
    image: "/assets/images/webp/mastercard.webp",
  },
  {
    image: "/assets/images/webp/paypal.webp",
  },
  {
    image: "/assets/images/webp/apple-pay.webp",
  },
  {
    image: "/assets/images/webp/google-pay.webp",
  },
];
