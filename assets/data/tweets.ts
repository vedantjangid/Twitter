const tweets = [
  {
    id: 't0',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Can you please check if the Subscribe button on Youtube works?',
    image:
      'https://i.pinimg.com/originals/b4/6c/00/b46c006814f3d668bd495ebfece21405.gif',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: '111111111',
    createdAt: '2023-04-28T08:30:00.000Z',
    user: {
      id: '123456789',
      name: 'Jeff B',
      username: 'bezos',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
    },
    content:
      'Just had a great workout at the gym! 💪 #fitness #healthylifestyle',
    numberOfComments: 2,
    numberOfRetweets: 5,
    numberOfLikes: 25,
    impressions: 500,
  },
  {
    id: '222222222',
    createdAt: '2023-04-27T19:45:00.000Z',
    user: {
      id: '987654321',
      name: 'Zuck',
      username: 'zuck',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    },
    content: 'Had an amazing surf session this morning',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/8.jpg',
    numberOfComments: 10,
    numberOfRetweets: 20,
    numberOfLikes: 100,
    impressions: 1000,
  },
  {
    id: '333333333',
    createdAt: '2023-04-26T12:00:00.000Z',
    user: {
      id: '123456789',
      name: 'Jane Smith',
      username: 'janesmith',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
    },
    content:
      'Excited to announce that I will be speaking at the upcoming tech conference in San Francisco! 🎉 #womenintech',
    numberOfComments: 5,
    numberOfRetweets: 10,
    numberOfLikes: 50,
    impressions: 1000,
  },
  {
    id: 't1',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: 't2',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't3',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Hello World',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't4',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't5',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't6',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  //add some random tweets with some gifs

  {
    id: 't7',
    user: {
      id: 'u1',
      username: 'Vedant01',
      name: 'Vedant',
      image:
        'https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Hello World',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  
    {
      "id": "t1",
      "user": {
        "id": "u1",
        "username": "Vedant01",
        "name": "Vedant",
        "image": "https://i.pinimg.com/564x/d4/19/00/d41900d6d2f0ce97a62ac7785de9fcdd.jpg"
      },
      "createdAt": "2020-08-27T12:00:00.000Z",
      "content": "Hello World",
      "numberOfComments": 4,
      "numberOfRetweets": 11,
      "numberOfLikes": 99
    },
    {
      "id": "t2",
      "user": {
        "id": "u2",
        "username": "Alice_23",
        "name": "Alice",
        "image": "https://i.pinimg.com/564x/81/f6/0b/81f60b01dbad8d6b36df11f3b8faff67.jpg"
      },
      "createdAt": "2023-07-23T09:30:00.000Z",
      "content": "Just saw an amazing movie last night! 🎬😍 #MovieNight",
      "numberOfComments": 10,
      "numberOfRetweets": 25,
      "numberOfLikes": 150
    },
    {
      "id": "t3",
      "user": {
        "id": "u3",
        "username": "JohnDoe82",
        "name": "John Doe",
        "image": "https://i.pinimg.com/564x/b4/d8/f1/b4d8f1f6cfb0c8123c4d944f8736ff0c.jpg"
      },
      "createdAt": "2023-07-22T18:45:00.000Z",
      "content": "Enjoying the beautiful weather! ☀️🌸 #SummerVibes",
      "numberOfComments": 5,
      "numberOfRetweets": 8,
      "numberOfLikes": 75
    },
    {
      "id": "t4",
      "user": {
        "id": "u4",
        "username": "GIFMaster",
        "name": "Max",
        "image": "https://i.pinimg.com/564x/59/5d/f2/595df27680e89b6d10a172fe324ca68e.jpg"
      },
      "createdAt": "2023-07-21T14:20:00.000Z",
      "content": "Check out this awesome GIF! 😄🎉 #GIFParty",
      "numberOfComments": 15,
      "numberOfRetweets": 50,
      "numberOfLikes": 300
    },
    {
      "id": "t5",
      "user": {
        "id": "u5",
        "username": "Bookworm88",
        "name": "Emily",
        "image": "https://i.pinimg.com/564x/9c/36/f6/9c36f679ec7846476af9b89e7a685d58.jpg"
      },
      "createdAt": "2023-07-20T20:10:00.000Z",
      "content": "Just finished reading an amazing fantasy novel! 📚🐉 #BookLover",
      "numberOfComments": 12,
      "numberOfRetweets": 30,
      "numberOfLikes": 200
    },
    {
      "id": "t6",
      "user": {
        "id": "u6",
        "username": "MovieBuff",
        "name": "Tom",
        "image": "https://i.pinimg.com/564x/a2/f7/54/a2f7540d0d3336d388c44aa1fda9d9ab.jpg"
      },
      "createdAt": "2023-07-19T08:55:00.000Z",
      "content": "Just watched the latest action movie! It was mind-blowing! 🔥🍿 #ActionMovie",
      "numberOfComments": 8,
      "numberOfRetweets": 20,
      "numberOfLikes": 120
    },
    {
      "id": "t7",
      "user": {
        "id": "u7",
        "username": "TravelAddict",
        "name": "Sarah",
        "image": "https://i.pinimg.com/564x/2a/95/8a/2a958a22ac1093b3130a7436ef6192ea.jpg"
      },
      "createdAt": "2023-07-18T16:30:00.000Z",
      "content": "Wanderlust kicking in! Can't wait to travel again! 🌍✈️ #TravelLove",
      "numberOfComments": 6,
      "numberOfRetweets": 15,
      "numberOfLikes": 90
    },
    {
      "id": "t8",
      "user": {
        "id": "u8",
        "username": "TechGeek",
        "name": "Alex",
        "image": "https://i.pinimg.com/564x/80/2a/72/802a72fb21f0b50c515c5164e91cd8cc.jpg"
      },
      "createdAt": "2023-07-17T12:15:00.000Z",
      "content": "The new smartphone features are impressive! 📱💡 #TechNews",
      "numberOfComments": 7,
      "numberOfRetweets": 18,
      "numberOfLikes": 110
    },
    {
      "id": "t9",
      "user": {
        "id": "u9",
        "username": "FoodieLife",
        "name": "Emma",
        "image": "https://i.pinimg.com/564x/19/79/65/197965c625207e037aaf03b2b1ce229f.jpg"
      },
      "createdAt": "2023-07-16T21:05:00.000Z",
      "content": "Tried a new recipe today, and it turned out delicious! 🍲👩‍🍳 #FoodLove",
      "numberOfComments": 9,
      "numberOfRetweets": 22,
      "numberOfLikes": 130
    },
    {
      "id": "t10",
      "user": {
        "id": "u10",
        "username": "FitnessFreak",
        "name": "Michael",
        "image": "https://i.pinimg.com/564x/59/29/09/5929095b4a7df372a124dd9db636e03f.jpg"
      },
      "createdAt": "2023-07-15T17:40:00.000Z",
      "content": "Had an intense workout today! Feeling energized! 💪🏋️‍♂️ #FitnessGoals",
      "numberOfComments": 11,
      "numberOfRetweets": 28,
      "numberOfLikes": 180
    }
  
  
];

export default tweets;
