const comments = [
    {
        master: "Анна Коваленко",
        comments: [
            {
                customerName: "Ольга Шевченко",
                customerPhone: "0671234567",
                service: "Кератинове випрямлення",
                rating: 5,
                reviewText: "Чудова робота! Волосся просто неймовірне.",
                date: "2024-09-25",
            },
            {
                customerName: "Марія Коваль",
                customerPhone: "0509876543",
                service: "Плетіння кіс",
                rating: 4,
                reviewText: "Все сподобалось, але трішки довго.",
                date: "2024-09-28",
            },
            {
                customerName: "Ірина Мельник",
                customerPhone: "0631237890",
                service: "Вечірня зачіска",
                rating: 5,
                reviewText: "Зачіска вийшла кращою, ніж я очікувала. Дякую!",
                date: "2024-10-01",
            },
        ],
    },
    {
        master: "Олександр Ткаченко",
        comments: [
            {
                customerName: "Петро Савченко",
                customerPhone: "0972345678",
                service: "Масаж обличчя",
                rating: 5,
                reviewText: "Масаж дуже сподобався, справжній професіонал!",
                date: "2024-09-26",
            },
            {
                customerName: "Іван Іванов",
                customerPhone: "0668765432",
                service: "Антицелюлітний масаж",
                rating: 4,
                reviewText: "Ефект від масажу помітний, рекомендую.",
                date: "2024-09-29",
            },
        ],
    },
    {
        master: "Марина Дорошенко",
        comments: [
            {
                customerName: "Катерина Петрова",
                customerPhone: "0986543210",
                service: "Манікюр класичний",
                rating: 5,
                reviewText: "Манікюр виконаний дуже акуратно, задоволена.",
                date: "2024-09-27",
            },
            {
                customerName: "Світлана Кузьменко",
                customerPhone: "0939876543",
                service: "Покриття гель-лаком",
                rating: 4,
                reviewText:
                    "Все добре, але хотілося б більше варіантів кольорів.",
                date: "2024-09-30",
            },
        ],
    },
    {
        master: "Ірина Савченко",
        comments: [
            {
                customerName: "Оксана Ткач",
                customerPhone: "0682345678",
                service: "Макіяж денний",
                rating: 5,
                reviewText: "Макіяж дуже гарний, якраз для роботи.",
                date: "2024-09-27",
            },
            {
                customerName: "Лілія Бондаренко",
                customerPhone: "0501234567",
                service: "Весільний макіяж",
                rating: 5,
                reviewText: "Весільний макіяж був неперевершений! Дякую!",
                date: "2024-09-30",
            },
            {
                customerName: "Наталія Кравченко",
                customerPhone: "0671112223",
                service: "Ламінування вій",
                rating: 4,
                reviewText: "Все супер, тільки трохи довго.",
                date: "2024-10-02",
            },
        ],
    },
    {
        master: "Андрій Мельник",
        comments: [
            {
                customerName: "Валентин Вовк",
                customerPhone: "0958765432",
                service: "Чистка обличчя",
                rating: 5,
                reviewText: "Обличчя стало значно чистішим, дуже задоволений.",
                date: "2024-09-28",
            },
            {
                customerName: "Наталія Дорошенко",
                customerPhone: "0975678901",
                service: "Маска для обличчя",
                rating: 4,
                reviewText:
                    "Маска сподобалась, але результат не відразу помітний.",
                date: "2024-10-01",
            },
            {
                customerName: "Андрій Коваленко",
                customerPhone: "0981234567",
                service: "Масаж обличчя",
                rating: 5,
                reviewText: "Масаж дуже розслабив, відчуття неймовірні.",
                date: "2024-10-02",
            },
        ],
    },
    {
        master: "Катерина Іванова",
        comments: [
            {
                customerName: "Сергій Іваненко",
                customerPhone: "0508765432",
                service: "Стрижка чоловіча",
                rating: 5,
                reviewText: "Швидко і якісно, майстер своєї справи.",
                date: "2024-09-25",
            },
            {
                customerName: "Марина Олексієнко",
                customerPhone: "0679876543",
                service: "Фарбування волосся",
                rating: 4,
                reviewText: "Колір вийшов гарний, але трохи не те, що хотіла.",
                date: "2024-09-29",
            },
            {
                customerName: "Анна Петрова",
                customerPhone: "0957654321",
                service: "Укладка волосся",
                rating: 5,
                reviewText: "Дуже гарна укладка, дякую!",
                date: "2024-10-02",
            },
        ],
    },
    {
        master: "Олексій Петров",
        comments: [
            {
                customerName: "Андрій Шевченко",
                customerPhone: "0631234567",
                service: "Масаж спини",
                rating: 5,
                reviewText: "Позбувся болю в спині після одного сеансу.",
                date: "2024-09-27",
            },
            {
                customerName: "Дмитро Кравченко",
                customerPhone: "0509876543",
                service: "Релакс-масаж",
                rating: 4,
                reviewText: "Все добре, але ціна трохи завищена.",
                date: "2024-09-30",
            },
        ],
    },
    {
        master: "Вікторія Лисенко",
        comments: [
            {
                customerName: "Олена Павленко",
                customerPhone: "0971234567",
                service: "Манікюр класичний",
                rating: 5,
                reviewText:
                    "Манікюр виконаний на вищому рівні, майстер професіонал!",
                date: "2024-09-26",
            },
            {
                customerName: "Світлана Левченко",
                customerPhone: "0506543210",
                service: "Парафінотерапія",
                rating: 4,
                reviewText: "Руки стали м'якими, але хотілося б довший ефект.",
                date: "2024-09-28",
            },
        ],
    },
    {
        master: "Дмитро Сидоренко",
        comments: [
            {
                customerName: "Надія Шевченко",
                customerPhone: "0672345678",
                service: "Макіяж денний",
                rating: 4,
                reviewText:
                    "Макіяж гарний, але під кінець дня трохи зіпсувався.",
                date: "2024-09-29",
            },
            {
                customerName: "Олена Гончаренко",
                customerPhone: "0508765432",
                service: "Перманентний макіяж очей",
                rating: 5,
                reviewText:
                    "Робота виконана чудово, результат перевершив очікування.",
                date: "2024-10-01",
            },
            {
                customerName: "Марія Зайцева",
                customerPhone: "0935678901",
                service: "Вечірній макіяж",
                rating: 5,
                reviewText: "Макіяж протримався всю ніч! Дуже дякую!",
                date: "2024-10-03",
            },
        ],
    },
    {
        master: "Тетяна Зайцева",
        comments: [
            {
                customerName: "Ольга Василенко",
                customerPhone: "0501234567",
                service: "Стрижка жіноча",
                rating: 5,
                reviewText: "Дуже задоволена стрижкою, обов'язково прийду ще.",
                date: "2024-09-26",
            },
            {
                customerName: "Марина Лисенко",
                customerPhone: "0686543210",
                service: "Укладка волосся",
                rating: 4,
                reviewText: "Гарна укладка, але трішки зіпсувалась на вітрі.",
                date: "2024-09-28",
            },
            {
                customerName: "Світлана Савченко",
                customerPhone: "0938765432",
                service: "Ламінування волосся",
                rating: 5,
                reviewText: "Волосся стало дуже гладким і блискучим.",
                date: "2024-09-30",
            },
        ],
    },
];

export default comments;