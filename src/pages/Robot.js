import React from 'react';
import {useSelector} from "react-redux";
import {robot} from "../helpers/data";
import teacher_img from "../assets/img/teacher-img4.png";

function Robot() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <div className="robot">
            <div className="container">
                <div className="robot__row">
                    <div className="robot__text">
                        <span className="robot__text-title">
                            { lang === "uz" ? "Kurs davomida quyлхidagilarga erishiladi:" : "В ходе курса будет достигнуто следующее:" }
                        </span>
                        <div className="robot__text-shape"></div>
                    </div>
                    <div className="robot__desc">
                        {robot.map((item) => {
                            return (
                                <div className="robot__desc-row">
                                    <span className="robot__desc-title">{lang === "uz" ? item.name_uz : item.name_ru}</span>
                                    <span className="robot__desc-text">{lang === "uz" ? item.desc_uz : item.desc_ru}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="robot__teach">
                    <div className="robot__teach-img">
                        <img src={teacher_img} alt=""/>
                        <div className="robot__teach-shape1"></div>
                        <div className="robot__teach-shape2"></div>
                    </div>
                    <div className="robot__teach-text">
                        <div className="robot__teach-title">{lang === "uz" ? "Mirzobek Atayev" : "Мирзобек Атаев"}</div>
                        <div className="robot__teach-content">{lang === "uz" ? "\"Robototexnika\" kursi mentori" : "Наставник курс робототехники"}</div>
                        <div className="robot__teach-desc">{lang === "uz" ? "Oliy ma'lumotli, sohada 6 yillik tajribaga ega. \"Turin\" politexnika universitetini tamomlagan. ERIELL kompaniyasida injiner (muhandis) bo'lib ishlagan. \"Int-tech\", \"Technolab\" MCHJ asoschisi. Bundan tashqari \"Smarthouse\" loyihasini asoschisi. O'quvchi dronlar loyihasi bilan shug'ullangan" : "Высшее образование, опыт работы по специальности 6 лет. Окончил Туринский политехнический университет. Работал инженером в ERIELL. Основатель Int-tech, ООО «Технолаб». Он также является основателем проекта Smarthouse. Студент был вовлечен в проект беспилотника"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Robot;