import React from 'react';
import {useSelector} from "react-redux";
import {game} from "../helpers/data"

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
            </div>
        </div>
    );
}

export default Game;