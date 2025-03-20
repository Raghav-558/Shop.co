import {
  FacebookIcon,
  FiveStarIcon,
  FourHalfStarIcon,
  FourStarIcon,
  GithubIcon,
  GreenCheckedIcon,
  InstagramIcon,
  ThreeHalfStarIcon,
  ThreeStarIcon,
  TwitterIcon,
} from "./icons";

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
    sellingPrice: "120",
    marketPrice: "",
    discount: "",
  },
  {
    image: "/assets/images/webp/new-arrivals-second.webp",
    title: "Skinny Fit Jeans",
    stars: <ThreeHalfStarIcon />,
    productRating: 3.5,
    sellingPrice: "240",
    marketPrice: "260",
    discount: "-20",
  },
  {
    image: "/assets/images/webp/new-arrivals-third.webp",
    title: "Checkered Shirt",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    sellingPrice: "180",
    marketPrice: "",
    discount: "",
  },
  {
    image: "/assets/images/webp/new-arrivals-fourth.webp",
    title: "Sleeve Striped T-shirt",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    sellingPrice: "130",
    marketPrice: "160",
    discount: "-30",
  },
];

export const TOP_SELLING_LIST: ItemsList[] = [
  {
    image: "/assets/images/webp/top-selling-first.webp",
    title: "Vertical Striped Shirt",
    stars: <FiveStarIcon />,
    productRating: 5.0,
    marketPrice: "232",
    sellingPrice: "212",
    discount: "-20",
  },
  {
    image: "/assets/images/webp/top-selling-second.webp",
    title: "Courage Graphic T-shirt",
    stars: <FourStarIcon />,
    productRating: 4.0,
    marketPrice: "",
    sellingPrice: "145",
    discount: "",
  },
  {
    image: "/assets/images/webp/top-selling-third.webp",
    title: "Loose Fit Bermuda Shorts",
    stars: <ThreeStarIcon />,
    productRating: 3.0,
    marketPrice: "",
    sellingPrice: "80",
    discount: "",
  },
  {
    image: "/assets/images/webp/top-selling-fourth.webp",
    title: "Faded Shinny Jeans",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    marketPrice: "",
    sellingPrice: "210",
    discount: "",
  },
];

export const ALSO_LIKE_LIST: ItemsList[] = [
  {
    image: "/assets/images/webp/also-like-first.webp",
    title: "Polo eith Contrast Trims",
    stars: <FourStarIcon />,
    productRating: 4.0,
    marketPrice: "242",
    sellingPrice: "212",
    discount: "-20",
  },
  {
    image: "/assets/images/webp/also-like-second.webp",
    title: "Cradient Graphic T-shirt",
    stars: <ThreeHalfStarIcon />,
    productRating: 3.5,
    marketPrice: "",
    sellingPrice: "145",
    discount: "",
  },
  {
    image: "/assets/images/webp/also-like-third.webp",
    title: "Polo with Tripping Details",
    stars: <FourHalfStarIcon />,
    productRating: 4.5,
    marketPrice: "",
    sellingPrice: "180",
    discount: "",
  },
  {
    image: "/assets/images/webp/also-like-fourth.webp",
    title: "Black Striped T-shirt",
    stars: <FiveStarIcon />,
    productRating: 5,
    marketPrice: "150",
    sellingPrice: "210",
    discount: "-30",
  },
];

export const HAPPY_CUSTOMERS_LIST = [
  {
    rating: <FiveStarIcon />,
    name: "Sarah M.",
    icon: <GreenCheckedIcon />,
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    rating: <FiveStarIcon />,
    name: "Alex K.",
    icon: <GreenCheckedIcon />,
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    rating: <FiveStarIcon />,
    name: "James L.",
    icon: <GreenCheckedIcon />,
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    rating: <FiveStarIcon />,
    name: "Sarah M.",
    icon: <GreenCheckedIcon />,
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    rating: <FiveStarIcon />,
    name: "Alex K.",
    icon: <GreenCheckedIcon />,
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    rating: <FiveStarIcon />,
    name: "James L.",
    icon: <GreenCheckedIcon />,
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
];

export const FOOTER_SOCAL_MEDIA_LIST = [
  {
    icon: (
      <TwitterIcon myClass="group-hover:fill-white transtition-all duration-300" />
    ),
    link: "https://x.com/?lang=en",
  },
  {
    icon: (
      <FacebookIcon myClass="group-hover:fill-white transtition-all duration-300" />
    ),
    link: "https://x.com/?lang=en",
  },
  {
    icon: (
      <InstagramIcon myClass="group-hover:fill-white transtition-all duration-300" />
    ),
    link: "https://x.com/?lang=en",
  },
  {
    icon: (
      <GithubIcon myClass="group-hover:fill-white transtition-all duration-300" />
    ),
    link: "https://x.com/?lang=en",
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

export const DETAILS_TABS_LIST = [
  "Product Details",
  "Rating & Reviews",
  "FAQs",
];

export const USER_REVIEWS_LIST = [
  {
    rating: <FourHalfStarIcon />,
    userName: "Samantha D.",
    description:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    uploadDate: "Posted on August 14, 2023",
  },
  {
    rating: <FourStarIcon />,
    userName: "Alex M.",
    description:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    uploadDate: "Posted on August 15, 2023",
  },
  {
    rating: <ThreeHalfStarIcon />,
    userName: "Ethan R.",
    description:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    uploadDate: "Posted on August 16, 2023",
  },
  {
    rating: <FourStarIcon />,
    userName: "Olivia P.",
    description:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    uploadDate: "Posted on August 17, 2023",
  },
  {
    rating: <FourStarIcon />,
    userName: "Liam K.",
    description:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    uploadDate: "Posted on August 18, 2023",
  },
  {
    rating: <FourHalfStarIcon />,
    userName: "Ava H.",
    description:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    uploadDate: "Posted on August 19, 2023",
  },
];

export const SELECT_COLOR = ["bg-dark-brown", "bg-dark-green", "bg-dark-blue"];

export const SELECT_SIZE = ["Small", "Medium", "Large", "X-Large"];
