import React from 'react';
import main__img1 from '../assets/img/main__img1.jpg';
import main__img2 from '../assets/img/main__img2.jpg';
import robot_img from '../assets/img/robot-img.jpg';
import scratch__img1 from '../assets/img/scratch__img1.jpg';
import scratch__img2 from '../assets/img/scratch__img2.jpg';
import scratch__img3 from '../assets/img/scratch__img3.jpg';
import game__img1 from '../assets/img/games__img1.png';
import game__img2 from '../assets/img/games__img2.png';
import game__img3 from '../assets/img/games__img3.png';
import web__img1 from '../assets/img/web__img1.jpg';
import android__img1 from '../assets/img/android__img1.png';
import android__img2 from '../assets/img/android__img2.png';
import android__img3 from '../assets/img/android__img3.jpg';
import instagram_img from '../assets/img/instagram_img.svg';
import facebook_img from '../assets/img/facebook_img.svg';
import youtube_img from '../assets/img/youtube_img.svg';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

let data = [
     // 0
    [
        {
            id:1,
            name_uz: "Robototexnika | 9 oy",
            name_ru: "Робототехника | 9 месяцев"
        },
        {
            id:2,
            name_uz: "Scratch | 3 oy",
            name_ru: "Scratch | 3 месяца"
        },
    ],
    // 1
    [
        {
            id:3,
            name_uz: "Kompyuter savodxonligi | 2 oy",
            name_ru: "Компьютерная грамотность | 2 месяца"
        },
    ],
    // 2
    [
            {
                id:4,
                name_uz: "Mobil o'yin yaratish | 3 oy",
                name_ru: "Создание мобильной игры | 3 месяца"
            },
            {
                id:5,
                name_uz: "Video montaj | 3 oy",
                name_ru: "Монтаж видео | 3 месяца"
            },
        ],
    // 3
    [
        {
            id:6,
            name_uz: "Web dasturlash | 3 oy",
            name_ru: "Веб программирование | 3 месяца"
        },
        {
            id:7,
            name_uz: "Android dasturlash | 3 oy",
            name_ru: "Андроид-программирование | 3 месяца"
        }
    ],
]
let item = [
    // 0
    [
        {
            id: 1,
            name_uz: "1 - bosqich | 1 oy",
            name_ru: "1 - этап | 1 месяц",
            child : [
                {
                    id:1,
                    detail_item_uz: "Robototexnika asoslari",
                    detail_item_ru: "Основы робототехники",
                },
                {
                    id:2,
                    detail_item_uz: "Lego mexanikasi bilan ishlash",
                    detail_item_ru: "Работа с Лего механикой",
                },
                {
                    id:3,
                    detail_item_uz: "Lego Mindstorm EV3",
                    detail_item_ru: "Лего Mindstorm EV3",
                }
            ]
        },
        {
            id: 2,
            name_uz: "2 - bosqich | 6 oy",
            name_ru: "2 - этап | 6 месяц",
            child: [
                {
                    id:1,
                    detail_item_uz: "Elektron va elektronika asoslari",
                    detail_item_ru: "Основы электроники и электроники",
                },
                {
                    id:2,
                    detail_item_uz: "Mikrokontroller bilan ishlash",
                    detail_item_ru: "Работа с микроконтроллерами",
                },
                {
                    id:3,
                    detail_item_uz: "Arduino kursi",
                    detail_item_ru: "Курс ардуино",
                }
            ]
        },
        {
            id: 3,
            name_uz: "3 - bosqich | 2 oy",
            name_ru: "3 - этап | 2 месяц",
            child: [
                {
                    id:1,
                    detail_item_uz: "3D modellashtirish",
                    detail_item_ru: "3D моделирование",
                },
                {
                    id:2,
                    detail_item_uz: "Murakkab mexanik modellarni ishlab chiqish",
                    detail_item_ru: "Разработка сложных механических моделей",
                },
                {
                    id:3,
                    detail_item_uz: "Dasturlash kursi",
                    detail_item_ru: "Курс программирования",
                }
            ]
        },
    ],
    // 1
    [
        {
            id: 1,
            name_uz: "1 - bosqich | 2 oy",
            name_ru: "1 - этап | 2 месяц",
            child : [
                {
                    id:1,
                    detail_item_uz: "Scratch dasturi interfeysi",
                    detail_item_ru: "Scratch интерфейс программного обеспечения",
                },
                {
                    id:2,
                    detail_item_uz: "Scratch muxitida ishni boshlash",
                    detail_item_ru: "Начните работу в среде нуля",
                },
                {
                    id:3,
                    detail_item_uz: "Scratch dasturini asosiy skriptlari",
                    detail_item_ru: "Базовые скрипты программы Scratch",
                }
            ]
        },
        {
            id: 2,
            name_uz: "2 - bosqich | 2 oy",
            name_ru: "2 - этап | 2 месяц",
            child : [
                {
                    id:1,
                    detail_item_uz: "Bir nechta obyektlar bilan ishlash. Ularning ishini sinxronlashtirish",
                    detail_item_ru: "Работа с несколькими объектами. Синхронизируйте их работу",
                },
                {
                    id:2,
                    detail_item_uz: "Mini-o'yinlarni yaratishda Scratch dasturidan foydalanish",
                    detail_item_ru: "Использование Scratch для создания мини-игр",
                },
                {
                    id:3,
                    detail_item_uz: "Ijodiy loyihalarni ishlab chiqish",
                    detail_item_ru: "Разработка творческих проектов",
                }
            ]
        },
    ],
    // 2
    [
        {
            id: 1,
            name_uz: "1 - bosqich | 1 oy",
            name_ru: "1 - этап | 1 месяц",
            child : [
                {
                    id:1,
                    detail_item_uz: "Buildbox dasturi imkoniyatlari",
                    detail_item_ru: "Варианты программы Buildbox",
                },
                {
                    id:2,
                    detail_item_uz: "Buildbox yordamchi vositalari bilan ishlash",
                    detail_item_ru: "Работа с утилитами Buildbox",
                },
                {
                    id:3,
                    detail_item_uz: "Buildbox dasturida o'yin yaratish",
                    detail_item_ru: "Создать игру в Buildbox",
                }
            ]
        },
        {
            id: 2,
            name_uz: "2 - bosqich | 2 oy",
            name_ru: "2 - этап | 2 месяц",
            child : [
                {
                    id:1,
                    detail_item_uz: " O'yinni APK format qilish",
                    detail_item_ru: "Отформатируйте игру APK",
                },
                {
                    id:2,
                    detail_item_uz: "Blender dasturi bilan tanishing",
                    detail_item_ru: "Знакомство с программой Blender",
                },
                {
                    id:3,
                    detail_item_uz: "O'yinni Google Play-ga joylash",
                    detail_item_ru: "Загрузите игру в Google Play",
                }
            ]
        }
    ],
    // 3
    [
        {
            id:1,
            detail_item_uz: "Dasturlash asoslari",
            detail_item_ru: "Основы программирования",
        },
        {
            id:2,
            detail_item_uz: "Web saytlar qurilish jarayoni",
            detail_item_ru: "Процесс создания сайта",
        },
        {
            id:3,
            detail_item_uz: "HTML & CSS",
            detail_item_ru: "HTML & CSS",
        },
        {
            id:4,
            detail_item_uz: "Sayt sxemasini qurish",
            detail_item_ru: "Составьте схему сайта",
        },
        {
            id:5,
            detail_item_uz: "Saytning ko'rinishini qilishda yangi texnologiyalardan foydalanish",
            detail_item_ru: "Использование новых технологий в дизайне сайта",
        },
        {
            id:6,
            detail_item_uz: "Javascript, Jquery",
            detail_item_ru: "Javascript, Jquery",
        },
        {
            id:7,
            detail_item_uz: "Real proektlar ustida ishlash",
            detail_item_ru: "Работа над реальными проектами",
        },
        {
            id:8,
            detail_item_uz: "Jamoa bo'lib ishlash qoidalari",
            detail_item_ru: "Правила работы в команде",
        },
    ],
    // 4
    [
        {
            id:1,
            detail_item_uz: "Dasturlash asoslari",
            detail_item_ru: "Основы программирования",
        },
        {
            id:2,
            detail_item_uz: "AndroidStudio'da ishlash",
            detail_item_ru: "Работать в AndroidStudio",
        },
        {
            id:3,
            detail_item_uz: "Dastur dizaynini yasash",
            detail_item_ru: "Создание дизайна программы",
        },
        {
            id:4,
            detail_item_uz: "Java dasturlash tili Java, OOP",
            detail_item_ru: "Язык программирования Java, ООП",
        },
        {
            id:5,
            detail_item_uz: "Real proektlar ustida ishlash",
            detail_item_ru: "Работа над реальными проектами",
        },
        {
            id:6,
            detail_item_uz: "Jamoa bo'lib ishlash",
            detail_item_ru: "Работы в команде",
        },
    ]
]

function Main() {
    const lang = useSelector(state => state.lang.lang)
    return (
        <>
            <div className="main" id="main">
            <div className="container">
                <div className="main__row">
                    <div className="main__text">
                        <span className="main__text-item1" >{lang === "uz" ? "\"DATA\" o'quv markazimizga xush kelibsiz!" : "Добро пожаловать в наш учебный центр DATA!"}</span>
                        <span className="main__text-item2">{lang === "uz" ? "Bizning maqsadimiz - kelajak yoshlarini kashf qilish" : "Наша цель открыть для себя молодежь будущего"}</span>
                        <span className="main__text-item3">{lang === "uz" ? "Biz O‘zbekistonda yangi texnologiyalarni qo‘llash orqali jamiyat taraqqiyotiga hissa qo‘shishni, o‘quvchilarimizga sifatli ta’lim berish, bilim olish uchun ijodiy, zamonaviy va eng qulay muhit yaratish uchun eng tajribali va bilimli o‘qituvchilar bilan hamkorlik qilishni istaymiz!" : "Мы хотим внести свой вклад в развитие общества, используя новые технологии в Узбекистане, сотрудничать с самыми опытными и образованными учителями, чтобы обеспечить нашим ученикам качественное образование, создать творческую, современную и максимально комфортную среду для получения знаний!"}</span>
                    </div>
                    <div className="main__img">
                        <div className="main__img1">
                            <img src={main__img1} alt=""/>
                        </div>
                        <div className="line-circle-1">
                            <div className="line-circle-2"></div>
                        </div>
                        <div className="main__img2">
                            <img src={main__img2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="course">
                <div className="container">
                    <div className="course__items">
                        <div className="course__item">
                            <span className="course__item-title">
                                {lang === "uz" ? "Bizning o'quv kurslarimiz" : "Наши учебные курсы"}
                            </span>
                            <div className="course__item-shape"></div>
                        </div>
                        <div className="course__items_small">
                            <span className="course__items-num">
                                {lang === "uz" ? "7 - 11 yoshgacha" : "от 7 - до 11 лет"}
                            </span>
                            <div className="course__item">
                                <div className="course__item_div">
                                    {data[0].map((item) => {
                                        return (
                                            <div className="course__item_div-item text-item">
                                                <span className="course__item_div-num">{item.id}</span>
                                                <span className="course__item_div-text">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="course__item_div">
                                    {data[1].map((item) => {
                                        return (
                                        <div className="course__item_div-item text-item">
                                            <span className="course__item_div-num">{item.id}</span>
                                            <span className="course__item_div-text">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                        </div>
                                        )
                                    })}
                                </div>
                        </div>
                        </div>
                        <div className="course__items_big">
                            <span className="course__items-num">
                                {lang === "uz" ? "11 - 15 yoshgacha" : "от 11 - до 15 лет"}
                            </span>
                            <div className="course__item">
                                <div className="course__item_div">
                                    {data[2].map((item) => {
                                    return (
                                        <div className="course__item_div-item text-item">
                                            <span className="course__item_div-num">{item.id}</span>
                                            <span className="course__item_div-text">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                        </div>
                                    )
                                    })}
                                </div>
                                <div className="course__item_div">
                                {data[3].map((item) => {
                                    return (
                                        <div className="course__item_div-item text-item">
                                            <span className="course__item_div-num">{item.id}</span>
                                            <span className="course__item_div-text">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="direction"  id="yo'nalishlar">
                <div className="container">
                    <span className="direction-title">
                        {lang === "uz" ? "Yo'nalishlar" : "Направления"}
                    </span>
                    <div className="direction__robot">
                        <div className="direction__robot-course">
                            <div className="direction__robot-texts">
                                <span className="direction__robot-title">{lang === "uz" ? "Robototexnika" : "Робототехника"}</span>
                                <span className="direction__robot-text">{lang === "uz" ? "kursi" : "курс"}</span>
                                <span className="direction__robot-desc">{lang === "uz" ? "Robototexnika kelajakning eng istiqbolli sohalaridan biridir. U avtomatlashtirish va texnik tizimlarni yaratish bilan shug'ullanadi va elektronika, mexanika, dasturlash va matematikaning sintezidir. Zamonaviy bolalar buni oson va ishtiyoq bilan o'rganadilar. Ular interaktivlikni yaxshi ko'radilar va fanga katta qiziqish bildiradilar. Bola zamonaviy texnologiyalardan foydalangan holda murakkab muammolarni hal qilishni o'rganadi." : "Робототехника – одно из самых перспективных направлений будущего. Он занимается созданием автоматики и технических систем и представляет собой синтез электроники, механики, программирования и математики. Современные дети учатся этому легко и с азартом. Они любят интерактивность и проявляют большой интерес к науке. Ребенок учится решать сложные задачи с использованием современных технологий."}</span>
                                <button className="direction__robot-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></button>
                            </div>
                            <div className="direction__robot-img">
                                <img src={robot_img} alt=""/>
                            </div>
                        </div>
                        <div className="direction__robot-detail">
                            <div className="direction__robot-detail-items">
                                {item[0].map((item) => {
                                    return (
                                        <div className="direction__robot-detail-item" key={item.id}>
                                            <div className="direction__robot-detail-item-num">
                                                <span className="direction__robot-detail-item-nums">
                                                    {item.id}
                                                </span>
                                                <span className="direction__robot-detail-item-content">
                                                    {lang === "uz" ? item.name_uz : item.name_ru}
                                                </span>
                                            </div>
                                            <div className="direction__robot-detail-item-text">
                                                {item.child.map((el) => {
                                                    return (
                                                        <span className="direction__robot-detail-item-span text-item" key={el.id}><i className="fa fa-arrow-right" aria-hidden="true"></i>{lang === "uz" ? el?.detail_item_uz : "\n" +
                                                            el?.detail_item_ru}</span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="direction__robot-detail-shape">
                            </div>
                        </div>
                    </div>
                    <div className="direction__scratch">
                        <div className="direction__scratch-items">
                            <div className="direction__scratch-img">
                                <div className="direction__scratch-img1">
                                    <img src={scratch__img1} alt=""/>
                                    <img src={scratch__img3} alt=""/>
                                </div>
                                    <div className="direction__scratch-shape1">
                                        <div className="direction__scratch-shape2"></div>
                                    </div>
                                <div className="direction__scratch-img3">
                                    <img src={scratch__img2} alt=""/>
                                </div>
                            </div>
                            <div className="direction__scratch-text">
                                <span className="direction__scratch-text-title">
                                    Scratch
                                </span>
                                <span className="direction__scratch-text-texts">
                                    {lang === "uz" ? "kursi" : "курс"}
                                </span>
                                <span className="direction__scratch-text-desc">
                                    { lang === "uz" ? "Scratch - bu asosan kodni o'rganishda yordam beradigan 7-16 yoshgagi bolalarga mo'ljallangan blokli vizual dasturlash tili va veb-sayti. Sayt foydalanuvchilari internetda blokga o'xshash interfeys yordamida loyihalar yaratishlari mumkin. Xizmat MIT Media Lab tomonidan ishlab chiqilgan, 70 dan ortiq tillarga tarjima qilingan va dunyoning aksariyat qismlarida qo'llaniladi" : "Scratch — это блочный визуальный язык программирования и веб-сайт, предназначенный в первую очередь для детей в возрасте от 7 до 16 лет, чтобы помочь им в изучении кода. Пользователи сайта могут создавать проекты, используя интерфейс, подобный блокчейну, в Интернете. Сервис разработан MIT Media Lab, переведен более чем на 70 языков и используется в большинстве стран мира."}
                                </span>
                                <button className="direction__scratch-text-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></button>
                                <div className="direction__scratch-detail">
                                    {
                                        item[1].map((item) => {
                                            return (
                                                <div className="direction__scratch-detail-item">
                                                    <div className="direction__scratch-detail-text">
                                                        <span className="direction__scratch-detail-num">{item.id}</span>
                                                        <span className="direction__scratch-detail-content">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                                    </div>
                                                    <div className="direction__scratch-detail-texts">
                                                        {
                                                            item.child.map((el) => {
                                                                return (
                                                                    <span className="direction__scratch-detail-content text-item">
                                                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                                                        {lang === "uz" ? el.detail_item_uz : el.detail_item_ru}
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="direction__game">
                        <div className="direction__game-text">
                            <div className="direction__game-text-content">
                                <span className="direction__game-title">{lang === "uz" ? "Mobil o'yin yaratish" : "Создание мобильных игр"}</span>
                                <span className="direction__game-texts">{lang === "uz" ? "kursi" : "курс"}</span>
                                <span className="direction__game-desc">{lang === "uz" ? "Buildbox dasturi yordamida o'yinlar yaratish juda oson. Dasturlash shart emas. Chegaralar faqat sizning tasavvuringizda bo'lishi mumkin. Uning yordami bilan o'yinlarni bir necha kun yoki hatto bir necha soat ichida loyihalash va qurish mumkin." : "Создавать игры с помощью программы Buildbox очень просто. Программирование не требуется. Границы могут быть только в вашем воображении. С его помощью игры можно разрабатывать и создавать за считанные дни или даже часы."}</span>
                                <button className="direction__game-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></button>
                            </div>
                            <div className="direction__game-shape">
                                <div className="direction__game-shape-circle"></div>
                            </div>
                        </div>
                        <div className="direction__game-detail">
                            <div className="direction__game-detail-content">
                                <div className="direction__game-detail-content-text">
                                    {item[2].map((item) => {
                                        return (
                                            <div className="direction__game-detail-content-item" key={item.id}>
                                                <div className="direction__game-detail-content-month">
                                                    <span className="direction__game-detail-content-num">{item.id}</span>
                                                    <span className="direction__game-detail-content-title">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                                </div>
                                                {
                                                    item.child.map((el) => {
                                                        return (
                                                            <span className="direction__game-detail-content-learn text-item">
                                                                <i className="fa fa-arrow-right" aria-hidden="true"></i> {lang === "uz" ? el.detail_item_uz : el.detail_item_ru}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="direction__game-detail-content-img">
                                    <img src={game__img2} alt=""/>
                                    <img src={game__img1} alt=""/>
                                </div>
                            </div>
                            <div className="direction__game-detail-img">
                                <img src={game__img3} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="direction__web">
                        <div className="direction__web-text">
                            <span className="direction__web-title">
                                {lang === "uz" ? "Web dasturlash" : "Веб-программирование"}
                            </span>
                            <span className="direction__web-texts">
                                {lang === "uz" ? "kursi" : "курс"}
                            </span>
                            <span className="direction__web-desc">
                                {lang === "uz" ? "Veb-dasturchi - boshlovchi dasturchilar uchun eng oson va shu bois eng ommalashgan yo'nalish hisoblanadi. Ishlash uchun istalgan matn muharriri va brauzer etarli bo'ladi, chuqurlashgan darajada algoritmni o'rganish shart emas. Dasturni yozishning har bir bosqichi natijasi ko'rinib turadi. Umumman olganda, ustunligi anchagina. Veb-dasturchi bo'lishning muhim jihati, bu Javascript' ni o'zlashtirish hisoblanadi" : "Веб-программист — самое простое и поэтому самое популярное направление для начинающих программистов. Для работы подойдет любой текстовый редактор и браузер, не нужно глубоко изучать алгоритм. Результат каждого шага написания программы виден. В общем, преимущество значительное. Важным аспектом работы веб-разработчика является освоение Javascript."}
                            </span>
                            <div className="direction__web-detail">
                                <div className="direction__web-detail-month">
                                    <span className="direction__web-detail-num">
                                        1
                                    </span>
                                    <span className="direction__web-detail-text">
                                        {lang === "uz" ? "3 oyga mo'ljallangan kurs davomida" : "в течение 3-х месячного курса"}
                                    </span>
                                </div>
                                {
                                    item[3].map((item) => {
                                        return (
                                            <span className="direction__web-detail-learn text-item"><i className="fa fa-arrow-right" aria-hidden="true"></i>{lang === "uz" ? item.detail_item_uz : item.detail_item_ru}</span>
                                        )
                                    })
                                }
                            </div>
                            <button className="direction__scratch-text-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></button>
                        </div>
                        <div className="direction__web-img">
                            <img src={web__img1} alt=""/>
                            <div className="direction__web-shapes">
                                <div className="direction__web-shape1"></div>
                                <div className="direction__web-shape2">
                                    <div className="circle1">
                                        <div className="circle2">
                                            <div className="circle3">
                                                <div className="circle4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="direction__web-shape3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="direction__android">
                        <div className="direction__android-text">
                            <div className="direction__android-content">
                                <span className="direction__android-title">{lang === "uz" ? "Android dasturlash" : "Андроид программирование"}</span>
                                <span className="direction__android-texts">{lang === "uz" ? "kursi" : "курс"}</span>
                                <span className="direction__android-desc">{lang === "uz" ? "Android dasturlash o'z android ilovalarini yaratishni maqsad qilgan bolalar uchun juda qulay yo'nalish hisobladi. Mobil dasturlash sohasi xozirgi kunning eng muhim sohalaridan biri. Bu sohani o'rganish orqali hozirda mobil qurilmalarga dastur yaratish imkoniga ega bo'lasiz." : "Андроид программирование считается очень удобным направлением для детей, стремящихся создавать свои собственные приложения для Android. Сфера мобильного программирования на сегодняшний день является одной из самых важных сфер. Изучив эту область, вы теперь сможете создавать приложения для мобильных устройств."}</span>
                            </div>
                            <div className="direction__android-text-img">
                                <img src={android__img1} alt=""/>
                                <img src={android__img2} alt=""/>
                            </div>
                            <div className="direction__android-text-detail">
                                <div className="direction__android-text-detail-month">
                                    <span className="direction__android-text-detail-num">1</span>
                                    <span className="direction__android-text-detail-text">{lang === "uz" ? "3 oyga mo'ljallangan kurs davomida" : "в течение 3 месяцев"}</span>
                                </div>
                                {
                                    item[4].map((item) => {
                                        return (
                                            <span className="direction__android-text-detail-learn text-item"><i className="fa fa-arrow-right" aria-hidden="true"></i>{lang === "uz" ? item.detail_item_uz : item.detail_item_ru}</span>
                                        )
                                    })
                                }
                            </div>
                            <div className="direction__android-text-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></div>
                        </div>
                        <div className="direction__android-img">
                            <div className="direction__android-imgs">
                                <img src={android__img3} alt=""/>
                            </div>
                            <div className="direction__android-shape">
                                <div className="direction__android-shape1"></div>
                                <div className="direction__android-shape2"></div>
                                <div className="direction__android-shape3">
                                    <div className="direction__android-shape-circle1">
                                        <div className="direction__android-shape-circle2">
                                            <div className="direction__android-shape-circle3">
                                                <div className="direction__android-shape-circle4">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="container">
                    <span className="map-title">
                        Karta
                    </span>
                </div>
                <div className="map-iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10041.860393774312!2d60.60349581488036!3d41.55922395122031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc99bb51d3df1%3A0x8fe79cbcf464fa6a!2sData%20learning%20centre!5e0!3m2!1sru!2s!4v1591542976104!5m2!1sru!2s" title="map" frameBorder="0"></iframe>
                </div>
                <div className="map-card">
                    <div className="container">
                        <span className="map-card-title">Biz bilan <span className="span-color">aloqa</span></span>
                        <div className="map-card-row">
                            <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                            <div className="map-card-text">
                                <Link to={{ pathname: "https://www.google.com/maps?ll=41.559897,60.607934&z=15&t=m&hl=ru&gl=US&mapclient=embed&cid=10369429002411899498" }} target="_blank" className="map-card-p">Xorazm viloyati, Urganch shahar
                                    V.Fayozova, 3-uy
                                </Link>
                                <p className="map-card-p">Ish vaqti <span
                                    className="map-card-text-bold">9:00 - 19:00</span></p>
                            </div>
                        </div>
                        <div className="map-card-row">
                            <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
                            <a href="tel:+998622277222" className="map-card-text-bold">+99862-227-72-22</a>
                        </div>
                        <div className="map-card-row">
                            <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                            <p className="map-card-a"><Link to={{ pathname: "https://mail.google.com/mail/u/0/#search/dataunionuz%40gmail.com" }} target="_blank">dataunionuz@gmail.com</Link></p>
                        </div>
                        <div className="map__image-link">
                            <Link to={{ pathname: "https://www.instagram.com/data_learning_centre/" }} target="_blank"><img src={instagram_img} className="map-card-icon" alt="Instagram"/></Link>
                            <Link to={{ pathname: "https://facebook.com/" }} target="_blank"><img src={facebook_img} className="map-card-icon" alt="Facebook"/></Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UCiW3qlI3WWth77AeudQgVGw?view_as=subscriber/" }} target="_blank"><img src={youtube_img} className="map-card-icon" alt="Youtube"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;