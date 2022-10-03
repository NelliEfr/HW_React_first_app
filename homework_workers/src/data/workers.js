export const workers = [
    {
        id: 1,
        firstname: 'Joe',
        lastname: 'Biden',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        position: [
            {
                in_office: false
            }
        ],

        todo: [
            {
              id: 1,
              title: 'Купить хлеб',
              done: true
            },
            {
              id: 2,
              title: 'Забрать документы',
              done: false
            },
            {
              id: 3,
              title: 'Продать хлеб дороже',
              done: false
            }
        ]
    },

    {
        id: 2,
        firstname: 'Boris',
        lastname: 'Johnson',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        position: [
            {
                in_office: true
            }
        ],
        todo: [
            {
              id: 1,
              title: 'Купить хлеб',
              done: true
            },
            {
              id: 2,
              title: 'Забрать документы',
              done: true
            },
            {
              id: 3,
              title: 'Продать хлеб дороже',
              done: false
            },
          ]
    },

    {
        id: 3,
        firstname: 'Emmanuel',
        lastname: 'Macron',
        position: [
            {
                in_office: true
            }
        ]
    }
]