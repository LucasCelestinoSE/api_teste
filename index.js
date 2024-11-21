const express = require('express');

const app = express();
const port = 3000;

const notifications = [
    {
        "id": "977a466b-3701-4bd5-93ba-ec6c35ce9846",
        "tipo": "INFO",
        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
        "titulo": "Senha Alterada",
        "mensagem": "Sua senha foi alterada com sucesso.",
        "enviadaEm": "2024-11-16T14:12:41.755",
        "lida": true,
        "conteudo": [
            {
                "tipoElemento": "IMAGE",
                "value": "https://media.istockphoto.com/id/1356364287/pt/foto/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=612x612&w=0&k=20&c=febtBieTOAo1mrPf4Bp8hJ78R-2pUnivYfvIaZhVzkc=",
                "extras": null
            },
            {
                "tipoElemento": "SUBTITLE",
                "value": "Lorem ipsum",
                "extras": null
            },
            {
                "tipoElemento": "TEXT",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec purus.",
                "extras": null
            },
            {
                "tipoElemento": "SPACER",
                "value": "32",
                "extras": null
            },
            {
                "tipoElemento": "BUTTON",
                "value": "Clique aqui",
                "extras": [
                    {
                        "key": "link",
                        "value": "https://www.google.com"
                    }
                ]
            }
        ],
        "deepLink": null,
        "deepLinkExtras": null
    },
    // Adicione mais objetos de notificação conforme necessário
];
const notificationPages = [

    {
        "idUsuario": "userId",
        "numNotificacoesNaoLidas": 3,
        "secoes": [
            {
                "titulo": "Hoje",
                "notificacoes": [
                    {
                        "id": "1b42a5b7-c7be-494d-9bb9-a23d55251a0a",
                        "tipo": "DEEP_LINK",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Nova Mensagem",
                        "mensagem": "Você tem uma nova mensagem.",
                        "enviadaEm": "2024-11-20T15:06:52.717",
                        "lida": false,
                        "deepLink": "https://www.google.com",
                        "deepLinkExtras": [
                            {
                                "key": "param1",
                                "value": "value1"
                            },
                            {
                                "key": "param2",
                                "value": "value2"
                            }
                        ],
                        "tempoAtras": "uma hora atrás"
                    },
                    {
                        "id": "438a94c4-8c9f-4d39-8a23-472171b00341",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Pedido Enviado",
                        "mensagem": "Seu pedido foi enviado.",
                        "enviadaEm": "2024-11-20T14:16:52.719",
                        "lida": false,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "2 horas atrás"
                    }
                ]
            },
            {
                "titulo": "Ontem",
                "notificacoes": [
                    {
                        "id": "17fad945-0aea-49c7-88fb-b73498ec74af",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Bem-vindo",
                        "mensagem": "Bem-vindo ao nosso serviço!",
                        "enviadaEm": "2024-11-19T15:16:52.719",
                        "lida": false,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "ontem"
                    },
                    {
                        "id": "22b434a3-574e-44ab-98a2-e5592d4ea702",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Novo Convite",
                        "mensagem": "Você recebeu um novo convite.",
                        "enviadaEm": "2024-11-19T09:16:52.719",
                        "lida": true,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "ontem"
                    },
                    {
                        "id": "1e229525-ed59-4951-a638-59c8b2e85502",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Pagamento Confirmado",
                        "mensagem": "Seu pagamento foi confirmado.",
                        "enviadaEm": "2024-11-19T03:16:52.719",
                        "lida": true,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "ontem"
                    }
                ]
            },
            {
                "titulo": "Últimos 7 dias",
                "notificacoes": [
                    {
                        "id": "05dc6e4b-f936-48e5-9bc5-4e1bf3a1ab1f",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Senha Alterada",
                        "mensagem": "Sua senha foi alterada com sucesso.",
                        "enviadaEm": "2024-11-15T15:16:52.719",
                        "lida": true,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "5 dias atrás"
                    },
                    {
                        "id": "104b460e-7c4d-4869-ba74-b6c22f6cf117",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Novo Convite",
                        "mensagem": "Você recebeu um novo convite.",
                        "enviadaEm": "2024-11-13T15:16:52.719",
                        "lida": true,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "7 dias atrás"
                    }
                ]
            },
            {
                "titulo": "Últimos 30 dias",
                "notificacoes": [
                    {
                        "id": "d4c08bc9-cfec-491d-ad56-1c1a295c4390",
                        "tipo": "INFO",
                        "avatarUrl": "https://media.gettyimages.com/id/1344512181/pt/vetorial/icon-red-loudspeaker.jpg?s=612x612&w=gi&k=20&c=YkZZ1ya23rrqqeEaFMZ3HHVRZ2Iy4gz-ScIGbgIh57E=",
                        "titulo": "Pagamento Confirmado",
                        "mensagem": "Seu pagamento foi confirmado.",
                        "enviadaEm": "2024-10-26T15:16:52.719",
                        "lida": true,
                        "deepLink": null,
                        "deepLinkExtras": null,
                        "tempoAtras": "25 dias atrás"
                    }
                ]
            }
        ]
    }





]

app.get('/v1/notificacoes', (req, res) => {
    const paginationInfo = {
        page: 1,
        pageCount: 8,
        pageSize: 8,
        hasNext: false
    };

    res.set('X-Pagination', JSON.stringify(paginationInfo));
    return res.json(notificationPages[0]);
});
app.get('/v1/notificacoes/:id', (req, res) => {
    const id = req.params.id;
    const notification = notifications[Math.floor(Math.random() * notifications.length)];
    notification.id = id;
    return res.json(notification);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});