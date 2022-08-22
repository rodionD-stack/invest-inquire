export const portfolioDataArr = [
    {
        name: 'Акции роста',
        id: 'stocksH',
        data: {
            labels: ["Яндекс", "РусАква", "ГМКНорНик", "Полюс", "ФосАгро", "Магнит", "Газпрнефть"],
            datasets: [
                {
                    data: [20, 10, 20, 10, 10, 10, 10],
                    backgroundColor: ["#fa0505", "#031cfc", "#484e7d", "#f6fa05", "#e805fc", "#ff7d03", "#03fcec"],
                    hoverBackgroundColor: ["#fa4b4b", "#3c4ffa", "#53577a", "#f7f494", "#ea6ef5", "#faa75a", "#90fcf5"],
                    borderWidth: 1
                }
            ],
        },
    },
    {
        name: 'Дивидендные аристократы',
        id: 'stocksD',
        data: {
            labels: ["Лукойл", "Газпром", "ГМКНорНик", "Сбербанк", "Полюс", "ФосАфгро", "Новатэк", "X5 Retail"],
            datasets: [
                {
                    data: [10, 20, 20, 10, 10, 10, 10, 10],
                    backgroundColor: ["#fc0516", "#08b3fc", "#484e7d", "#05fc1e", "#f6fa05", "#070c8f", "#e805fc", "#1a7f0a"],
                    hoverBackgroundColor: ["#fc9299", "#83d8fc", "#53577a", "#6efa7c", "#f7f494", "#3d409c", "#ea6ef5", "#467f3d"],
                    borderWidth: 1
                }
            ],
        },
    },
    {
        name: 'Умеренный портфель',
        id: 'stocksM',
        data: {
            labels: ["Сбербанк", "Газпром", "Яндекс", "Северсталь", "Алроса", "ФосАгро", "РусАгро", "Ленэнерго"],
            datasets: [
                {
                    data: [20, 20, 10, 10, 10, 10, 10, 10],
                    backgroundColor: ["#05fc1e", "#08b3fc", "#fa0505", "#099484", "#9fa4d1", "#070c8f", "#f7f5a6", "#daf765"],
                    hoverBackgroundColor: ["#6efa7c", "#83d8fc", "#fa4b4b", "#478f86", "#b8bacf", "#3d409c", "#faf9d4", "#b1bf77"],
                    borderWidth: 1
                }
            ],
        },
    },
    {
        name: 'Счастливая пенсия',
        id: 'stocksO',
        data: {
            labels: ["Сбербанк", "Ростел", "ПИК", "Газпром", "Алроса", "НЛМК", "РусГидро", "НКНХ", "ИнтерРАО", "Роснефть", "ММК", "РусАгро"],
            datasets: [
                {
                    data: [20, 5, 5, 20, 5, 5, 5, 10, 5, 5, 5, 10],
                    backgroundColor: ["#05fc1e", "#fa02e1", "#9e6105", "#08b3fc", "#9fa4d1", "#3f5fa1", "#0579fc", "#6053ed", "#a0ba3a", "#b8a70d", "#430bbd", "#f7f5a6"],
                    hoverBackgroundColor: ["#6efa7c", "#f77eeb", "#a1793f", "#83d8fc", "#b8bacf", "#65789e", "#9fcbfc", "#9b94eb", "#acba73", "#b3ab68", "#6038b5", "#faf9d4"],
                    borderWidth: 1
                }
            ],
        },
    }
]