import React from 'react';
import {useSelector} from "react-redux";
import {web} from "../helpers/data";

function Web() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <div className="web">
            <div className="container">
                <div className="web__row">
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
            </div>
        </div>
    );
}

export default Web;