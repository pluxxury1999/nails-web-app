const categories = [
    {
        categoryTitle: "Догляд за руками",
        services: [
            {
                title: "Манікюр класичний",
                minPrice: 250,
            },
            {
                title: "Педикюр апаратний",
                minPrice: 400,
            },
            {
                title: "Педикюр класичний",
                minPrice: 350,
            },
            {
                title: "Нарощування нігтів",
                minPrice: 600,
            },
            {
                title: "Дизайн нігтів",
                minPrice: 350,
            },
            {
                title: "Покриття гель-лаком",
                minPrice: 300,
            },
            {
                title: "Парафінотерапія",
                minPrice: 200,
            },
            {
                title: "Spa-манікюр",
                minPrice: 400,
            },
            {
                title: "Масаж рук",
                minPrice: 150,
            },
            {
                title: "Зняття гель-лаку",
                minPrice: 100,
            },
        ],
        masters: [
            {
                name: "Марина Дорошенко",
                rating: 4.9,
                photo: "/img/marinaD.png",
                position: "Майстер манікюру",
            },
            {
                name: "Вікторія Лисенко",
                rating: 4.6,
                photo: "/img/viktoriaL.png",
                position: "Майстер манікюру",
            },
        ],
    },
    {
        categoryTitle: "Догляд за волоссям",
        services: [
            {
                title: "Стрижка жіноча",
                minPrice: 300,
            },
            {
                title: "Стрижка чоловіча",
                minPrice: 250,
            },
            {
                title: "Фарбування волосся",
                minPrice: 500,
            },
            {
                title: "Укладка волосся",
                minPrice: 200,
            },
            {
                title: "Кератинове випрямлення",
                minPrice: 700,
            },
            {
                title: "Плетіння кіс",
                minPrice: 250,
            },
            {
                title: "Нарощування волосся",
                minPrice: 1000,
            },
            {
                title: "Вечірня зачіска",
                minPrice: 400,
            },
            {
                title: "Ламінування волосся",
                minPrice: 300,
            },
            {
                title: "Зачіска на випускний",
                minPrice: 450,
            },
            {
                title: "Дитяча стрижка",
                minPrice: 150,
            },
            {
                title: "Маска для волосся",
                minPrice: 150,
            },
        ],
        masters: [
            {
                name: "Анна Коваленко",
                rating: 4.8,
                photo: "/img/annaK.png",
                position: "Перукар",
            },
            {
                name: "Катерина Іванова",
                rating: 4.7,
                photo: "/img/katerynaI.png",
                position: "Перукар",
            },
            {
                name: "Тетяна Зайцева",
                rating: 4.6,
                photo: "/img/tetianaZ.png",
                position: "Перукар",
            },
        ],
    },
    {
        categoryTitle: "Масаж",
        services: [
            {
                title: "Масаж обличчя",
                minPrice: 400,
            },
            {
                title: "Антицелюлітний масаж",
                minPrice: 600,
            },
            {
                title: "Релакс-масаж",
                minPrice: 500,
            },
            {
                title: "Спортивний масаж",
                minPrice: 700,
            },
            {
                title: "Лімфодренажний масаж",
                minPrice: 650,
            },
            {
                title: "Масаж голови",
                minPrice: 300,
            },
            {
                title: "Аромамасаж",
                minPrice: 550,
            },
            {
                title: "Медовий масаж",
                minPrice: 450,
            },
            {
                title: "Масаж спини",
                minPrice: 450,
            },
            {
                title: "Тайський масаж",
                minPrice: 700,
            },
            {
                title: "Рефлексотерапія",
                minPrice: 600,
            },
        ],
        masters: [
            {
                name: "Олександр Ткаченко",
                rating: 4.6,
                photo: "/img/oleksandrT.png",
                position: "Масажист",
            },
            {
                name: "Олексій Петров",
                rating: 4.5,
                photo: "/img/oleksiyP.png",
                position: "Масажист",
            },
        ],
    },
    {
        categoryTitle: "Макіяж та догляд за обличчям",
        services: [
            {
                title: "Макіяж денний",
                minPrice: 350,
            },
            {
                title: "Вечірній макіяж",
                minPrice: 500,
            },
            {
                title: "Весільний макіяж",
                minPrice: 800,
            },
            {
                title: "Корекція брів",
                minPrice: 150,
            },
            {
                title: "Фарбування брів",
                minPrice: 100,
            },
            {
                title: "Ламінування вій",
                minPrice: 450,
            },
            {
                title: "Ламінування брів",
                minPrice: 350,
            },
            {
                title: "Перманентний макіяж губ",
                minPrice: 1200,
            },
            {
                title: "Перманентний макіяж очей",
                minPrice: 1000,
            },
            {
                title: "Перманентний макіяж брів",
                minPrice: 1200,
            },
        ],
        masters: [
            {
                name: "Ірина Савченко",
                rating: 4.7,
                photo: "/img/irinaS.png",
                position: "Візажист",
            },
            {
                name: "Дмитро Сидоренко",
                rating: 4.4,
                photo: "/img/dmytroS.png",
                position: "Візажист",
            },
        ],
    },
    {
        categoryTitle: "Косметологія",
        services: [
            {
                title: "Догляд за обличчям",
                minPrice: 500,
            },
            {
                title: "Чистка обличчя",
                minPrice: 600,
            },
            {
                title: "Пілінг",
                minPrice: 400,
            },
            {
                title: "Масаж обличчя",
                minPrice: 350,
            },
            {
                title: "Антивіковий догляд",
                minPrice: 700,
            },
            {
                title: "Маска для обличчя",
                minPrice: 250,
            },
            {
                title: "Контурна пластика",
                minPrice: 1200,
            },
            {
                title: "Мезотерапія",
                minPrice: 800,
            },
            {
                title: "Ботокс",
                minPrice: 1500,
            },
            {
                title: "Плазмоліфтинг",
                minPrice: 1000,
            },
        ],
        masters: [
            {
                name: "Андрій Мельник",
                rating: 4.5,
                photo: "/img/andryiM.png",
                position: "Косметолог",
            },
            {
                name: "Олена Гончаренко",
                rating: 4.8,
                photo: "/img/olenaG.png",
                position: "Косметолог",
            },
        ],
    },
];

export default categories;