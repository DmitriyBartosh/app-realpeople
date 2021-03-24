export default [
  {
    id: '1',
    name: 'This Is My Lashes',
    description: 'Ресницы и брови',
    avatar: require('../../assets/img/beauty/service/eyebrow/avatar/1.webp'),
    links: [
      {
        key: '1',
        title: 'Instagram',
        link: 'https://www.instagram.com/thisis_mylashes/'
      },
      {
        key: '2',
        map: true,
        title: 'This Is My Lashes',
        description: 'БЦ Евразия, офис 304А',
        coordinate: {
          latitude: 56.009975,
          longitude: 92.870547,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        },
      },
    ],
    story: [
      {
        key: '1',
        url: require('../../assets/img/beauty/service/eyebrow/story/1/1.webp'),
      },
      {
        key: '2',
        url: require('../../assets/img/beauty/service/eyebrow/story/1/2.webp'),
      },
      {
        key: '3',
        url: require('../../assets/img/beauty/service/eyebrow/story/1/3.webp'),
      },
      {
        key: '4',
        url: require('../../assets/img/beauty/service/eyebrow/story/1/4.webp'),
      },
      {
        key: '5',
        url: require('../../assets/img/beauty/service/eyebrow/story/1/5.webp'),
      },
    ],
    price: [
      {
        key: '1',
        service: 'Классика',
        cost: '1250'
      },
      {
        key: '2',
        service: '1.5D ресницы',
        cost: '1500р'
      },
      {
        key: '3',
        service: '2D ресницы',
        cost: '1550'
      },
      {
        key: '4',
        service: '2.5D ресницы',
        cost: '1800'
      },
      {
        key: '5',
        service: '3D ресницы',
        cost: '1850'
      }
    ]
  },
]