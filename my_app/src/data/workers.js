export const workers = [
    {
      id: 1,
      firstname: 'Ivan',
      lastname: 'Ivanov',
      position: 'programmer',
      in_office: false,
      avatar: './media/face_1.png',
      tasks: [
          {
              id: 1,
              task: 'coding',
              done: false
          },
          {
            id: 2,
            task: 'code reading',
            done: true
        },
        {
            id: 3,
            task: 'pick up documents',
            done: false
        }
      ]
    },
    {
      id: 2,
      firstname: 'Lena',
      lastname: 'Lenina',
      position: 'manager',
      in_office: true,
      tasks: []
    },
    {
      id: 3,
      firstname: 'Irina',
      lastname: 'Fedorova',
      position: 'driver',
      in_office: false,
      avatar: './media/face_3.png',
      tasks: []
    },
    {
      id: 4,
      firstname: 'Maria',
      lastname: 'Wilson',
      position: 'CEO',
      in_office: true,
      tasks: [
           {
            id: 1,
            task: 'Prepare for the meeting',
            done: true
           }
          ]
    }
  ]