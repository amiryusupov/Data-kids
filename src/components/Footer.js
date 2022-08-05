import React from 'react';
import logo_img from '../assets/img/datakids-logo.png';
import instagram_img from '../assets/img/instagram_img.svg';
import facebook_img from '../assets/img/facebook_img.svg';
import telegramm_img from '../assets/img/telegramm_img.svg';
import youtube_img from '../assets/img/youtube_img.svg';

import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Footer() {
    let data = [
        {
            id:1,
            title_uz: "Ma'lumotlar",
            title_ru: "ИНФОРМАЦИЯ",
            child: [
                {
                    id: 1,
                    name_uz: "Kirish",
                    name_ru: "Введение",
                    link: "#main"
                },
                {
                    id: 2,
                    name_uz: "Yo'nalishlar",
                    name_ru: "Направления",
                    link: "#course"
                },
                {
                    id: 3,
                    name_uz: "Rasmlar",
                    name_ru: "Рисунки",
                    link: "#images"
                },
                {
                    id: 4,
                    name_uz: "Aloqa",
                    name_ru: "Вызов",
                    link: "#contact"
                },
            ]
        },
        {
            id: 2,
            title_uz: "Kurslar",
            title_ru: "Курсы",
            child: [
                {
                    id: 1,
                    name_uz: "Robototexnika",
                    name_ru: "Робототехника",
                    link: "#robot"
                },
                {
                    id: 2,
                    name_uz: "Kompyuter savodxonligi",
                    name_ru: "Компьютерная грамотность",
                    link: "#foundation"
                },
                {
                    id: 3,
                    name_uz: "Mobil o'yin yaratish",
                    name_ru: "Создание мобильных игр",
                    link: "#game"
                },
                {
                    id: 4,
                    name_uz: "Web dasturlash",
                    name_ru: "Веб-программирование",
                    link: "#web"
                },
            ],
        },
        {
            id: 3,
            title_uz: "Bizning loyihalar",
            title_ru: "Наши проекты",
            child: [
                {
                    id: 1,
                    name_uz: "Data learning centre",
                    name_ru: "Data learning centre",
                    link: "https://www.instagram.com/data_learning_centre/"
                },
                {
                    id: 2,
                    name_uz: "Data kids",
                    name_ru: "Data kids",
                    link: "https://www.instagram.com/data_kids_/"
                },
                {
                    id: 3,
                    name_uz: "Data language centre",
                    name_ru: "Data language centre",
                    link: "https://www.instagram.com/data_language_centre/"
                },
                {
                    id: 4,
                    name_uz: "Data soft",
                    name_ru: "Data soft",
                    link: "https://www.instagram.com/datasoft.uz/"
                },
            ],
        },

    ]
    const lang = useSelector(state => state.lang.lang)
  return (
      <div className="footer">
        <div className="container">
            <div className="footer__row">
                <div className="footer__top">
                    <div className="footer__top-about">
                        <img src={logo_img} alt="logo-img"/>
                        <p className="footer__top-desc">{lang === "uz" ? "Biz O‘zbekistonda yangi texnologiyalarni qo‘llash orqali jamiyat taraqqiyotiga hissa qo‘shishni, o‘quvchilarimizga sifatli ta’lim berish, bilim olish uchun ijodiy, zamonaviy va eng qulay muhit yaratish uchun eng tajribali va bilimli o‘qituvchilar bilan hamkorlik qilishni istaymiz!" : "Мы хотим внести свой вклад в развитие общества, используя новые технологии в Узбекистане, сотрудничать с самыми опытными и образованными учителями, чтобы обеспечить нашим ученикам качественное образование, создать творческую, современную и максимально комфортную среду для получения знаний!"}</p>
                    </div>
                    <div className="footer__top-text">
                        {
                            data.map((item) => {
                                return (
                                    <div className="footer__top-right" key={item.id}>
                                        <span className="footer__top-title">{lang === "uz" ? item.title_uz : item.title_ru}</span>
                                        {item.child.map((el) => {
                                            return (
                                                <a href={el.link} className="footer__top-span" key={el.id}>{lang === "uz" ? el.name_uz : el.name_ru}</a>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-copy">
                        <span className="footer__bottom-copy-text">
                            © DATA KIDS, 2022
                        </span>
                        <span className="footer__bottom-copy-text">
                            {lang === "uz" ? "Barcha huquqlar himoyalangan." : "Все права защищены."}
                        </span>
                    </div>
                    <div className="footer__bottom-social">
                        <div className="footer__bottom-map">
                            <span className="footer__bottom-map-text">
                                {lang === "uz" ? "Xorazm viloyati, Urganch shahar V.Fayozova, 3-uy" : "Хорезмская область, город Ургенч В.Файозова, 3 дом"}
                            </span>
                            <span className="footer__bottom-map-text">
                            </span>
                        </div>
                        <div className="footer__bottom-social-apps">
                            <span className="footer__bottom-social-apps-text">
                                {lang === "uz" ? "Sahifalarimiz" : "Социальные сети"}
                            </span>
                            <div className="footer__bottom-social-img">
                                <Link to={{ pathname: "https://www.instagram.com/data_learning_centre/" }} target="_blank"><img src={instagram_img} alt="instagram"/></Link>
                                <Link to={{ pathname: "https://facebook.com/" }} target="_blank"><img src={facebook_img} alt="facebook"/></Link>
                                <Link to={{ pathname: "https://t.me/data_learning_centre" }} target="_blank"><img src={telegramm_img} className="footer__bottom-app-tel" alt="telegram"/></Link>
                                <Link to={{ pathname: "https://www.youtube.com/channel/UCiW3qlI3WWth77AeudQgVGw?view_as=subscriber/" }} target="_blank"><img src={youtube_img} alt="youtube"/></Link>
                            </div>
                        </div>
                        <div className="footer__bottom-social-num">
                            <span>{lang === "uz" ? "Telefon raqami:" : "Номер телефона:"}</span>
                            <a href="tel:+998997598886"> +998(99) 759-88-86</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__created">
            <span className="footer__created-text">Created by <Link to={{ path: "http://amir.uz/"}}>Amir Yusupov</Link></span>
        </div>
      </div>
  )
}

export default Footer;