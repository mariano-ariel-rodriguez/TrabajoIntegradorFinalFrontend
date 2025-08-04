const contacts = [
    {
        id: 1,
        name: 'Marty McFly',
        description: 'Nadie me llama gallina',
        avatar: 'https://i.blogs.es/9c0fbf/futuro-3/500_333.jpeg',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'OTRO',
                hora: '14:20',
                id: 1,
                texto: 'Oye, ¿viste mi patineta por ahí?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '14:22',
                id: 2,
                texto: 'Creo que la dejaste en casa del Doc',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '14:25',
                id: 3,
                texto: 'Genial, voy para allá. ¡Esto es muy pesado!',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Doc Brown',
        description: 'A donde vamos, no necesitamos caminos',
        avatar: 'https://costumeplaybook.com/wp-content/uploads/2013/09/Doc-Brown-Costumes-Back-to-the.jpg',
        lastConnection: '10:37',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '09:15',
                id: 1,
                texto: 'Doc, ¿cómo va el experimento?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '09:18',
                id: 2,
                texto: '¡Santa ciencia! Funcionó perfectamente',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '09:22',
                id: 3,
                texto: '¿No explotó nada esta vez?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '09:25',
                id: 4,
                texto: 'Solo un pequeño incendio... nada grave',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: 'Biff Tannen',
        description: '¿Hay alguien ahí?',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqxCpJSypzjn9qM2lb0NNJkMhGCe4T8N0rw&s',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'OTRO',
                hora: '18:45',
                id: 1,
                texto: 'Oye, ¿has visto a McFly?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '18:47',
                id: 2,
                texto: 'No, ¿para qué lo buscas?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '18:48',
                id: 3,
                texto: 'Me debe dinero ese gallina',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '18:52',
                id: 4,
                texto: 'Creo que está con el Doc',
                status: 'visto'
            }
        ]
    },
    {
        id: 4,
        name: 'George McFly',
        description: 'You are my density',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtpFtavW7K6iEDZzUzOzEmtWsGHVgGwIuQw&s',
        lastConnection: '22:43',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'OTRO',
                hora: '20:10',
                id: 1,
                texto: '¿Podrías leer mi nueva historia?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '20:12',
                id: 2,
                texto: '¡Por supuesto! Me encantan tus relatos',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '20:15',
                id: 3,
                texto: 'Es sobre un joven inventor del futuro',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '20:17',
                id: 4,
                texto: 'Suena fascinante, envíamela',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '20:18',
                id: 5,
                texto: 'Gracias, eres un gran amigo',
                status: 'visto'
            }
        ]
    },
    {
        id: 5,
        name: 'Lorraine McFly',
        description: 'En mis tiempos los jóvenes éramos más responsables',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhOT8skJb2aqZkzUficUDFOe6FsE04NoPqw&s',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'OTRO',
                hora: '13:30',
                id: 1,
                texto: 'Hola, ¿Marty está contigo?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '13:32',
                id: 2,
                texto: 'No, se fue con su patineta',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '13:33',
                id: 3,
                texto: 'Ese chico siempre llega tarde a todo',
                status: 'visto'
            }
        ]
    },
    {
        id: 6,
        name: 'Sr. Strickland',
        description: 'No tolero a los holgazanes',
        avatar: 'https://assets.mycast.io/characters/mr-strickland-800773-normal.jpg?1593927292',
        lastConnection: '11:16',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'OTRO',
                hora: '08:00',
                id: 1,
                texto: 'Joven, necesito hablar con usted',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '08:02',
                id: 2,
                texto: 'Buenos días Sr. Strickland',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '08:03',
                id: 3,
                texto: 'He notado que anda con McFly',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '08:05',
                id: 4,
                texto: 'Sí señor, somos amigos',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '08:06',
                id: 5,
                texto: 'Asegúrese de no convertirse en holgazán',
                status: 'visto'
            }
        ]
    }
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}