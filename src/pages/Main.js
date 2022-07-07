import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {images} from "../helpers/images";
import {data} from "../helpers/data";
import {item} from "../helpers/data";
function Main() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <>
            <div className="main" id="main">
            <div className="container">
                <div className="main__row">
                    <div className="main__text">
                        <span className="main__text-item1" >{lang === "uz" ? "\"DATA Kids\" o'quv markazimizga xush kelibsiz!" : "Добро пожаловать в наш учебный центр DATA Kids!"}</span>
                        <span className="main__text-item2">{lang === "uz" ? "Bizning maqsadimiz - kelajak yoshlarini kashf qilish" : "Наша цель открыть для себя молодежь будущего"}</span>
                        <span className="main__text-item3">{lang === "uz" ? "Biz O‘zbekistonda yangi texnologiyalarni qo‘llash orqali jamiyat taraqqiyotiga hissa qo‘shishni, o‘quvchilarimizga sifatli ta’lim berish, bilim olish uchun ijodiy, zamonaviy va eng qulay muhit yaratish uchun eng tajribali va bilimli o‘qituvchilar bilan hamkorlik qilishni istaymiz!" : "Мы хотим внести свой вклад в развитие общества, используя новые технологии в Узбекистане, сотрудничать с самыми опытными и образованными учителями, чтобы обеспечить нашим ученикам качественное образование, создать творческую, современную и максимально комфортную среду для получения знаний!"}</span>
                    </div>
                    <div className="main__img">
                        <div className="main__img1">
                            <img src={images.main__img1} alt=""/>
                        </div>
                        <div className="line-circle-1">
                            <div className="line-circle-2"></div>
                        </div>
                        <div className="main__img2">
                            <img src={images.main__img2} alt=""/>
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
                                <Link to={"/robototexnika"} className="direction__robot-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></Link>
                            </div>
                            <div className="direction__robot-img">
                                <img src={images.robot_img} alt=""/>
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
                                    <img src={images.scratch__img1} alt=""/>
                                    <img src={images.scratch__img3} alt=""/>
                                </div>
                                    <div className="direction__scratch-shape1">
                                        <div className="direction__scratch-shape2"></div>
                                    </div>
                                <div className="direction__scratch-img3">
                                    <img src={images.scratch__img2} alt=""/>
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
                                <Link to={"/mobileGame"} className="direction__game-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></Link>
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
                                    <img src={images.game__img2} alt=""/>
                                    <img src={images.game__img1} alt=""/>
                                </div>
                            </div>
                            <div className="direction__game-detail-img">
                                <img src={images.game__img3} alt=""/>
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
                            <Link to={"/web"} className="direction__scratch-text-btn button"><span>{lang === "uz" ? "Batafsil tanishish" : "Узнать больше"}</span></Link>
                        </div>
                        <div className="direction__web-img">
                            <img src={images.web__img1} alt=""/>
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
                                <img src={images.android__img1} alt=""/>
                                <img src={images.android__img2} alt=""/>
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
                                <img src={images.android__img3} alt=""/>
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
            <div className="detail">
                <div className="container">
                    <div className="detail__row">
                        <div className="detail__text">
                            <div className="detail__text-title">
                                <span>Nega aynan biz?</span>
                            </div>
                            <div className="detail__text-desc">
                                <div className="detail__text-desc-row">
                                    <img src={images.detail__img2} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Darslarni <span className="detail__text-desc-red">tajribaga </span>mutaxassislar olib borishadi</span> : <span>Занятия проводят <span className="detail__text-desc-red">опытные</span> специалисты</span>};</span>
                                </div>
                                <div className="detail__text-desc-row">
                                    <img src={images.detail__img3} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Har bir kurs davomiyligi <span className="detail__text-desc-red">2-9 oy</span></span> : <span>Продолжительность каждого курса <span className="detail__text-desc-red">2-9 месяцев</span></span>};</span>
                                </div>
                                <div className="detail__text-desc-row">
                                    <img src={images.detail__img4} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Darslar haftada <span className="detail__text-desc-red">3 kun, 3 soatdan</span></span> : <span>Занятия <span className="detail__text-desc-red">3 дня по 3 часа</span>в неделю</span>};</span>
                                </div>
                                <div className="detail__text-desc-row" >
                                    <img src={images.detail__img5} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Guruhga <span className="detail__text-desc-red">10 nafar</span> qatnashuvchi qabul qilinadi</span> : <span>В группу будут допущены <span className="detail__text-desc-red">10 участников</span></span>};</span>
                                </div>
                                <div className="detail__text-desc-row">
                                    <img src={images.detail__img6} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Darslar <span className="detail__text-desc-red">kompyuterlar</span> bilan jihozlangan xonada bo'lib o'tadi</span> : <span>Занятия проходят в помещении, оборудованном <span className="detail__text-desc-red">компьютерами</span></span>};</span>
                                </div>
                                <div className="detail__text-desc-row">
                                    <img src={images.detail__img7} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Dars davomida <span className="detail__text-desc-red">o'quv qurollari</span> va <span className="detail__text-desc-red">kofe-choy</span> bepul beriladi</span> : <span><span className="detail__text-desc-red">Учебные пособия, кофе и чай </span>предоставляются бесплатно во время курса.</span>};</span>
                                </div>
                                <div className="detail__text-desc-row">
                                    <img src={images.detail__img8} alt=""/>
                                    <span className="detail__text-desc-content">{lang === "uz" ? <span>Kurs yakunida <span className="detail__text-desc-red">sertifikat</span> beriladi</span> : <span>По окончанию курса выдается <span className="detail__text-desc-red">сертификат</span></span>};</span>
                                </div>
                            </div>
                        </div>
                        <div className="detail__img">
                                <div className="detail__img1">
                                    <img src={images.detail__img10} alt=""/>
                                </div>
                                <div className="detail__shape1">
                                    <div className="detail__shape2"></div>
                                </div>
                            <div className="detail__img2"><img src={images.detail__img9} alt=""/></div>
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
                            <Link to={{ pathname: "https://www.instagram.com/data_learning_centre/" }} target="_blank"><img src={images.instagram_img} className="map-card-icon" alt="Instagram"/></Link>
                            <Link to={{ pathname: "https://facebook.com/" }} target="_blank"><img src={images.facebook_img} className="map-card-icon" alt="Facebook"/></Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UCiW3qlI3WWth77AeudQgVGw?view_as=subscriber/" }} target="_blank"><img src={images.youtube_img} className="map-card-icon" alt="Youtube"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;