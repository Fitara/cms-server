const { User, Post } = require("../models");
const bcrypt = require("bcryptjs");

async function insertData() {
  await User.bulkCreate([
    {
      username: "Customer",
      email: "customer@mail.com",
      password: bcrypt.hashSync("12345", 8),
      role: "Customer",
      phoneNumber: "12346555",
      address: "Pondok Indah",
    },
  ]);

  await Post.bulkCreate({
    page: 3,
    posts: [
      {
        id: 1,
        title: "Billboard",
        content:
          "Stay up to date with the latest music industry news and updates on the Billboard. Billboard is the world's most influential music media brand, with an unmatched authority among artists, fans and the industry.",
        imgUrl:
          "https://yt3.googleusercontent.com/ytc/AL5GRJVGq_rekadyFyZkwS-O1eV5TIijx5t0ORx7EtkBgXU=s900-c-k-c0x00ffffff-no-rj",
        categoryId: 1,
        authorId: 1,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 1,
          name: "Music",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 2,
        title: "TechCrunch",
        content:
          "Reporting on the business of technology, startups, venture capital funding, and Silicon Valley. Technology news and analysis with a focus on founders and startup teams.",
        imgUrl:
          "https://techcrunch.com/wp-content/uploads/2020/06/NSussman_Techcrunch_TCList-intro_v3-XL.jpg?w=730&crop=1",
        categoryId: 2,
        authorId: 2,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 2,
          name: "Tech",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 3,
        title: "WIRED",
        content:
          "WIRED is where tomorrow is realized. You'll get the latest in tech news, science, business, gear, security, and geek culture.",
        imgUrl:
          "https://pbs.twimg.com/profile_images/1166701357702795264/rhyCnbTC_400x400.jpg",
        categoryId: 3,
        authorId: 1,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 3,
          name: "Geeks",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 4,
        title: "Mashable",
        content:
          "Mashable is a global, multi-platform media and entertainment company. Mashable is the leading source for news, information and resources for the connected generation.",
        imgUrl: "https://mashable.com/images/mashable-logomark.png",
        categoryId: 4,
        authorId: 2,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 4,
          name: "News",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 5,
        title: "TMZ.com",
        content:
          "TMZ, Thirty Mile Zone, is one of the most cited entertainment news sources in the world. It is the first entertainment news magazine to cover Hollywood as it really is... and celebrities as they really are.",
        imgUrl:
          "https://t3.ftcdn.net/jpg/04/53/22/32/360_F_453223270_ePcOlumARBbVVa75XWvh5WCmnaEN2jTZ.jpg",
        categoryId: 5,
        authorId: 1,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 5,
          name: "Celebrity",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 6,
        title: "Gizmodo",
        content:
          "Gizmodo is a news and opinion website about gadgets, technology, science, environmental news, entertainment, and culture.",
        imgUrl:
          "https://st.depositphotos.com/1105977/4129/i/450/depositphotos_41295259-stock-photo-spring-letter-g.jpg",
        categoryId: 6,
        authorId: 2,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 6,
          name: "Gadget",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 7,
        title: "The Verge",
        content:
          "The intersection of technology, science, art, and culture. Offers in-depth reporting & long-form feature stories, breaking news coverage, product information, and community content in a unified and cohesive manner.",
        imgUrl:
          "https://seeklogo.com/images/T/the-verge-logo-262950FD04-seeklogo.com.png",
        categoryId: 2,
        authorId: 1,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 2,
          name: "Tech",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
      {
        id: 8,
        title: "Perez Hilton",
        content:
          "Since 2004, Hollywood's most sassy website has been delivering the juiciest celebrity gossip. The blog is the go-to source for daily happenings in Hollywood.",
        imgUrl:
          "https://pbs.twimg.com/profile_images/668939771914223616/EYUGQdtq_400x400.jpg",
        categoryId: 7,
        authorId: 2,
        status: null,
        createdAt: "2023-04-02T08:42:30.353Z",
        updatedAt: "2023-04-02T08:42:30.353Z",
        Category: {
          id: 7,
          name: "Entertainment",
          createdAt: "2023-04-02T08:42:30.344Z",
          updatedAt: "2023-04-02T08:42:30.344Z",
        },
      },
    ],
  });
}

module.exports = { insertData };
