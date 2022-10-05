export const workers = [
    {
        id: 1,
        firstname: 'Oleg',
        lastname: 'Orlov',
        position: 'receptionist',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        in_office: true,
        tasks:[
            {
                id: 1,
                title: 'scan the documents',
                done: true
            },
            {
                id: 2,
                title: 'have the documents signed',
                done: true
            },
            {
                id: 3,
                title: 'order office paper',
                done: false
            }
        ]
    },

    {
        id: 2,
        firstname: 'Anton',
        lastname: 'Ivanov',
        position: 'CEO',
        // avatar: 'https://reqres.in/img/faces/3-image.jpg',
        in_office: true,
        tasks:[
            {
                id: 1,
                title: 'have a weekly employee meeting',
                done: true
            },
            {
                id: 2,
                title: 'have a meeting with a subsidiary',
                done: false
            },
            {
                id: 3,
                title: 'issue monthly awards',
                done: true
            }
        
        ]
    },

    {
        id: 3,
        firstname: 'Nikolai',
        lastname: 'Vasilev',
        position: 'regional sales manager',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        in_office: false,
    },
]