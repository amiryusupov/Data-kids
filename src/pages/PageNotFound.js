import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function PageNotFound() {
    let lang = useSelector(state => state.lang.lang);
    return (
        <div>
            <div className="container">
                <div className="notfound">
                    <span className="notfound-num">404</span>
                    <span className="notfound-text">{lang === "uz" ? "OOPS! Hech narsa topilmadi" : "Упс! НИЧЕГО НЕ НАЙДЕНО"}</span>
                    <span className="notfound-desc">{lang === "uz" ? "Siz izlayotgan sahifa nomi o'zgartirilgan yoki vaqtincha mavjud bo'lmaganda olib tashlangan bo'lishi mumkin. " : "Страница, которую вы ищете, возможно, была удалена из-за изменения ее названия или временно недоступна. "}</span>
                    <Link className="notfound-link" to={"/"}>{lang === "uz" ? " BOSH SAHIFAGA QAYTISH" : " ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ"}</Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;