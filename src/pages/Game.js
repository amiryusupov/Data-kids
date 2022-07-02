import React from 'react';
import {useSelector} from "react-redux";
import {game} from "../helpers/data"
import {images} from "../helpers/images"

function Game() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <div className='game'>
            <div className="container">
                <div className="game__row">
                    <div className="game__shape">
                        <div className="game__shape1"></div>
                        <div className="game__shape2"></div>
                    </div>
                    <div className="game__text">
                        <div className="game__text-title">
                            {lang === "uz" ? "Eng ko`p beriladigan savollar:" : "Часто задаваемые вопросы:"}
                        </div>
                        <div className="game__div">
                            {
                                game.map((item) => {
                                    return (
                                        <div className="game__text-item">
                                            <div className="game__text-content">
                                                {lang === "uz" ? item.name_uz : item.name_ru}
                                            </div>
                                            <div className="game__text-desc">
                                                {lang === "uz" ? item.desc_uz : item.desc_ru}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="game__teacher">
                    <div className="game__teacher-img">
                        <div className="game_teacher-div">
                            <img src={images.teacher1}></img>
                        </div>
                    </div>
                    <div className="game__teacher-text">
                        <span className="game__teacher-title">
                            {lang === "uz" ? "Baxtiyor Atajanov" : "Бахтёр Атаджанов"}
                        </span>
                        <span className="game__teacher-course">
                            {lang === "uz" ? "Mobil o'yin yaratish kursi mentori" : "Ментор курса по созданию мобильных игр"}
                        </span>
                        <span className="game__teacher-desc">
                            {lang === "uz" ? "Vizual effektlar sohasida 2 yillik tajribaga ega.VFX ustasi, VR texnologiyasi bo'yicha mutaxassis, o'yinni ishlab chiquvchi. Kariyerasi davomida u ko'plab yirik loyihalarda ishtirok etdi.Texnologik malaka-Adobe Premiere Pro, Adobe after Effects, Cinema4D va h.k" : "Имеет 2-летний опыт работы в области визуальных эффектов.Мастер VFX, специалист по технологиям VR, разработчик игр. За свою карьеру он участвовал во многих крупных проектах.Технологическая квалификация-Adobe Premiere Pro, Adobe After Effects, Cinema4D и другие"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;