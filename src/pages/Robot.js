import React from 'react';
import {useSelector} from "react-redux";
import {robot} from "../helpers/data";

function Robot() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <div className="robot">
            <div className="container">
                <div className="robot__row">
                    <div className="robot__text">
                        <span className="robot__text-title">
                            { lang === "uz" ? "Kurs davomida quyidagilarga erishiladi:" : "В ходе курса будет достигнуто следующее:" }
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
            </div>
        </div>
    );
}

export default Robot;