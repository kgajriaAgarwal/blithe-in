import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Karishma",
    lastName: "Gajria Agarwal",
    username: "karishma@gmail.com",
    password: "abc@123",
    userHandler: "karishma-gajria-768107138",
    bio: "Software developer (react js) at LMS Solutions (India) Pvt. Ltd.",
    link: "https://www.linkedin.com/in/karishma-gajria-768107138/",
    profilePic: "https://media-exp1.licdn.com/dms/image/C4D03AQEzoWzVUUpqMw/profile-displayphoto-shrink_200_200/0/1517496782090?e=1658361600&v=beta&t=ENUIdUSsc6H5bBBLnlTJtZUg4cZD9dm0uc8FAGQU7s8",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "balika@gmail.com",
    userHandler: "adarshbalika",
    password: "adarshBalika123",
    bio: "this is my bio balika",
    link: "https://adarshbalika.netlify.app",
    profilePic:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/woman_ojbd7v.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dr Hemant",
    lastName: "Patel",
    username: "hemant@gmail.com",
    userHandler: "dr-hemant-patel-568aba19b",
    password: "abc@123",
    bio: "Mbbs and managing director at health care hospital",
    link: "https://www.linkedin.com/in/dr-hemant-patel-568aba19b/",
    profilePic:
      "https://media-exp1.licdn.com/dms/image/D5603AQEMPo6wTKVQdg/profile-displayphoto-shrink_200_200/0/1642091037911?e=1658361600&v=beta&t=aWfwzEbOzteBGkjkxF26CiaHZ8uf1_Q2bA5NdVOxpPE",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dr Ritesh",
    lastName: "Malik",
    username: "ritesh@gmail.com",
    userHandler: "drriteshmalik",
    password: "abc@123",
    bio: "Entrepreneurship Development in India | Coworking | Angel Investment | Innovation | Management | Strategy | Healthcare | Technology | Wearables | Hardware | Education | Motivation | Inspiration",
    link: "https://www.linkedin.com/in/drriteshmalik/",
    profilePic:
      "https://media-exp1.licdn.com/dms/image/C5103AQGgQQ--JYft5w/profile-displayphoto-shrink_200_200/0/1578826017486?e=1658361600&v=beta&t=YC63kY3G1mU0PbiKSGmXtiQ4j_OXPRI2IEIgG5gRq8M",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // {
  //   _id: uuid(),
  //   firstName: "Omkar",
  //   lastName: "Shah",
  //   username: "omkar@gmail.com",
  //   userHandler: "Omkar123",
  //   password: "111",
  //   bio: "this is my bio omkar",
  //   link: "https://omkar.netlify.app",
  //   profilePic:
  //     "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Gaurav",
  //   lastName: "Verma",
  //   username: "gaurav@gmail.com",
  //   userHandler: "Gaurav123",
  //   password: "111",
  //   bio: "this is my bio gaurav",
  //   link: "https://gaurav.netlify.app",
  //   profilePic:
  //     "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/hacker_jednhr.png",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Sunil",
  //   lastName: "Agarwal",
  //   username: "sunil@gmail.com",
  //   userHandler: "Sunil123",
  //   password: "111",
  //   bio: "this is my bio suil",
  //   link: "https://sunil.netlify.app",
  //   profilePic:
  //     "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457645/baatchit/man_rp4ore.png",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
];
