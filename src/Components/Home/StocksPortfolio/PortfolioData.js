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
        text: 'Портфель "Акции роста". В него входят ценные бумаги компаний, у которох динамично растет выручка и они обладают существенным потенциалом для роста котировок в будущем. Бумаги таких эмитентов обычно растут быстрее акций стоимости, которые принадлежат большим и устойчивым компаниям, но представители акций роста редко платят дивиденды и могут сильно упасть при возникновении финансовых проблем. Рекомендуемый срок инвестирования — от 6 мес.'
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
        text: 'Портфель "Дивидендные аристократы". В него входят компании из индекса МосБиржи, которые в течение двух лет подряд занимали позицию не ниже 25-й по годовой дивидендной доходности. Вес компании в индексе определяется пропорционально дивидендной доходности за прошедший год. Дивидендные акции считаются хорошим выбором на время волатильности на рынках. Полученные дивиденды можно вывести или вложить заново в ценные бумаги. Рекомендуемый срок инвестирования — от 3 лет.'
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
        text: 'Портфель "Умеренный портфель". Стратегия данного портфеля нацелена на возможное получение дохода значительно выше инфляции и депозитных ставок. Акции данного портфеля равномерно распределены относительно крупных и надёжных - государственных и частных компаний. Диверсификация портфеля предполагает покупку бумаг компаний из разных секторов экономики — тогда есть вероятность, что они не будут одинаково реагировать на одни и те же события и синхронно расти или падать. Существует вероятность снижения стоимости инвестиционного портфеля в случае стрессовых ситуаций на фондовом рынке в течение года. Рекомендуемый срок инвестирования — от 3 лет.'
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
        text: 'Портфель "Счастливая пенсия". Для данного портфеля важны два качества: надежность и предсказуемость.Надежность предполагает, что вложенные средства будут в безопасности долгие годы. Предсказуемость нужна, чтобы точно знать, что к моменту выхода на пенсию в портфеле будет достаточно средств, чтобы обеспечить комфортный образ жизни. Акции данного портфеля равномерно распределены относительно крупных и надёжных - государственных компаний. Диверсификация портфеля предполагает покупку бумаг компаний из разных секторов экономики — тогда есть вероятность, что они не будут одинаково реагировать на одни и те же события и синхронно расти или падать. Рекомендуемый срок инвестирования — от 6 лет.'
    }
]