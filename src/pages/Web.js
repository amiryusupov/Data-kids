import React from 'react';
import {useSelector} from "react-redux";
import {web, web2} from "../helpers/data";
import {images} from "../helpers/images";

function Web() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <div className="web">
            <div className="container">
                <div className="web__row">
                    <div className="web__img">
                        <img src={images.web__img_data1} alt="web__img_data1"/>
                        <img src={images.web__img_data2} alt="web__img_data2"/>
                    </div>
                    <div className="web__text">
                        <div className="web__text-title">
                            {lang === "uz" ? "Eng ko`p beriladigan savollar:" : "Часто задаваемые вопросы:"}
                        </div>
                        <div className="web__div">
                            {
                                web2.map((item) => {
                                    return (
                                        <div className="web__text-item">
                                            <div className="web__text-content">
                                                {lang === "uz" ? item.title_uz : item.title_ru}
                                            </div>
                                            <div className="web__text-desc">
                                                {lang === "uz" ? item.desc_uz : item.desc_ru}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="web__row2">
                    <div className="web__title">
                        { lang === "uz" ? "\"Web dasturlash\" kursi odamlarga nima beradi?" : "Что дает людям курс \"веб-программирования?\"" }
                    </div>
                    <div className="web__text">
                        {
                            web.map((item) => {
                                return (
                                    <div className="web__text-item">
                                        <div className="web__text-item-title">
                                            {lang === "uz" ? item.title_uz : item.title_ru}
                                        </div>
                                        <div className="web__text-item-desc">
                                            {lang === "uz" ? item.desc_uz : item.desc_ru}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="web__teach">
                    <div className="web__teach-img">
                        <img src={images.teacher3} alt=""/>
                        <div className="web__teach-shape"></div>
                    </div>
                    <div className="web__teach-text">
                        <div className="web__teach-title">{lang === "uz" ? "Dilshodbek Abdullayev" : "Дилшодбек Абдуллаев"}</div>
                        <div className="web__teach-content">{lang === "uz" ? "\"Web dasturlash\" kursi mentori" : "Наставник курса по веб-программирования"}</div>
                        <div className="web__teach-desc">{lang === "uz" ? "Toshkent axborot texnologiyalari Universiteti 3 kurs talabasi. Web dasturlash yo'nalishida 2 yillik tajribaga ega. Html, Css Bootstrap, Javascript, Jquery, Node.js, Express.js, Typescript, Git, Handlebars dasturlash tillarida ishlay oladi. Onlayn frilans birjalarida faoliyat olib boradi." : "Студент 3 курса Ташкентского университета информационных технологий. Имеет 2-летний опыт работы в области веб-программирования. Html, Css Bootstrap, Javascript, Jquery, Node.DJs, Экспресс.может работать на языках программирования js, Typescript, Git, Handlebars. Работает на биржах фриланса онлайн."}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Web;