// import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";

// /**
//  * Posts can be added here.
//  * You can add default posts of your wish with different attributes
//  * */

// export const posts = [
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adarshbalika",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "shubhamsoni",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
// ];

import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    title:'How can I take care of my heart naturally?',
    postImage:"https://quizizz.com/media/resource/gs/quizizz-media/questions/27fffd9d-f874-4383-a55b-79e5a557248e?w=90&h=90",
    content:
      "How can I take care of my heart naturally? \n To help prevent heart disease, you can: \n 1.Eat healthy. \n 2.Get active. \n 3.Stay at a healthy weight. \n 4.Quit smoking and stay away from secondhand smoke. \n 5.Control your cholesterol and blood pressure. \n 6.Drink alcohol only in moderation. \n 7.Manage stress.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "balika@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "karishma@gmail.com",
        text: "Tnformative!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "hemant@gmail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ritesh@gmail.com",
        text: "Nice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    title:'Benefits of technology in healthcare',
    postImage:"https://media.istockphoto.com/photos/doctor-with-medical-healthcare-icon-interface-picture-id949812138?k=20&m=949812138&s=612x612&w=0&h=zQKckR3bFo8M_D5CsOAHwlPyTHo5r51UsyO6t-ilZdQ=",
    content: "Health information technology presents numerous opportunities for improving and transforming healthcare which includes; reducing human errors, improving clinical outcomes, facilitating care coordination, improving practice efficiencies, and tracking data over time.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hemant@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Looks good to me!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ritesh@gmail.com",
        text: "informative!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:'The Best Glucometer in India - ACCU-CHEK ACTIVE GLUCOMETER KIT (WITH FREE 10 STRIPS)',
    postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmq9v5_jMBiTB7Z_z7ZcH_bGPrpDbytgMK1Q&usqp=CAU",
    content: "To get quick results within 4-5 seconds, choose Accu-Chek Active Glucometer that comes with 10 complimentary strips. This device needs to be used in combination with the Accu Check Active Strips to determine the glucose level in the blood approximately. It is a handy self-testing kit that you can easily use at home or even when you are travelling. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "balika@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "hemant@gmail.com",
        text: "nice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ritesh@gmail.com",
        text: "really nice product, i use it regularly",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:'5 Ways to Keep Your Lungs Healthy and Whole',
    postImage:'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/idiopathic-pulmonary-fibrosis/1296x728_5_Ways_to_Keep_Your_Lungs_Healthy_and_Strong.jpg?w=1575',
    content: "But by adopting certain healthy habits, you can better maintain the health of your lungs, and keep them working optimally even into your senior years. \n 1. Don't smoke or stop smoking. \n 2.Exercise to breathe harder. \n 3.Avoid exposure to pollutants. \n 4.Prevent infections..\n 5.Breathe deeply.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ritesh@gmail.com",
    bookmark: [],
    comments: [],
    createdAt: "2022-02-25T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:'Best source of protein',
    postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXlTTJJMp8QcJnSCPr9_0jZZorAr2a_vsdg&usqp=CAU",
    content: "Animal-based foods (meat, poultry, fish, eggs, and dairy foods) tend to be good sources of complete protein, while plant-based foods (fruits, vegetables, grains, nuts, and seeds) often lack one or more essential amino acid.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ritesh@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:"6 Food items people with diabetes should avoid",
    postImage:"http://caresathome.in/wp-content/uploads/2019/06/foods_to_avoid_in_diabetes-1080x675.jpg",
    content:
      "6 foods you should avoid if you have diabetes: \n To maintain a healthy lifestyle, a healthy diet is compulsory and knowing what to eat and not is important. Here are a few of the foods you should avoid if you have diabetes: \n 1. Sweetened Yogurt or curd: \n 2.Processed food items\n3.Dried fruits\n4.Red meat\n5.Burgers and other fast foods\n6.White bread and White rice",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karishma@gmail.com",
    bookmark: [],

    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "very informative!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: 1647076844,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:"What to Eat on an Empty Stomach in the Morning",
    postImage:"https://blog.medplusmart.com/wp-content/uploads/2019/10/Foods-to-Eat-on-Empty-Stomach.jpg",
    content: "However, here is a full list of the best foods to eat on an empty stomach: \n 1.Honey + Water + Lemon \n2.Fresh Fruits\n3.Oatmeal\n4.Soaked Almonds:\n5.Amla Juice:\n6.Egg\n7.Dates",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hemant@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-01T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:"Here are 11 healthy foods that help you burn fat",
    postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLC9b7GBxMfl8t9LE4jj4ohjBSttXusXYLw&usqp=CAU",
    content:
      "Here are 11 healthy foods that help you burn fat.\n1.Fatty Fish. Fatty fish is delicious and incredibly good for you.\n2.MCT Oil. MCT oil is made by extracting MCTs from palm oil.\n3.Coffee. Coffee is one of the most popular beverages worldwide. ...\n4.Eggs.\n5.Green Tea.\n6.Whey Protein.\n7.Apple Cider Vinegar.\n8.Chili Peppers.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ritesh@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2021-04-30T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:"Diabeties symptoms",
    postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiQ77VjxIGHBxY-3TtFZwiCl6DMGYVjc9ow&usqp=CAU",
    content:"",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshBalika123",
    comments: [],

    bookmark: [],
    createdAt: "2022-03-14T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title:'What is insulin pump?',
    postImage:'https://www.rcpjournals.org/content/clinmedicine/13/3/244/F1.large.jpg?width=800&height=600&carousel=1',
    content:
      "Insulin pump therapy, also known as continuous subcutaneous insulin infusion therapy (CSII) is used in patients with T1DM to improve glucose control and/or reduce the risk of hypoglycaemia.1,2 It was first introduced over 30 years ago,3 although early pumps were bulky and prone to technical problems. Modern insulin pumps are portable and discrete (being similar in size to a mobile phone), and utilise smart technologies, such as Bluetooth transmission of capillary glucose level from glucometer to pump, and the ability to download pump data to a computer for analysis. However, contrary to the hopes of many individuals with T1DM, the pump is not a fully automatic ‘artificial pancreas’  and requires a high level of user involvement.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ritesh@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "best for type1 diabetics!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "hemant@gmail.com",
        text: "love insulin pumps",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    bookmark: [],
    createdAt: "2022-05-13T10:38:12+05:30",
    updatedAt: formatDate(),
  },
];
