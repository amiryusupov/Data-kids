import React from 'react';
import {useSelector} from "react-redux";
import images from "../helpers/images";

function Foundation() {
    let lang = useSelector(state => state.lang.lang)
    return (
        <div className="foundation">
            <div className="container">
               <div className="foundation__row">
                   <div className="foundation__text">
                       <span className="foundation__text-title">{lang === "uz" ? "Jaloladdin Yusupov" : "Жалоладдин Юсупов"}</span>
                       <span className="foundation__text-course">{lang === "uz" ? "Kompyuter savodxonligi kursi mentori" : "Наставник курса компьютерной грамотности"}</span>
                       <span className="foundation__text-desc">{lang === "uz" ? "Oliy ma'lumotli. Tizim adminstratorligi bo'yicha 2 yillik tajribaga ega. Xorazm viloyati Yer tuzish qadastri Urganch tuman filialida ishlagan. Xozirda \"DATA\" o'quv markazimizda tizim adminstratori bo'lib faoliyat yuritadi. Kompyuterning ko'plab dasturlarida professional darajada ishlay oladi." : "Высокообразованный. Имеет 2 года опыта системного администрирования. Работал в филиале Ургенчского районного отдела землеустройства Хорезмской области. В настоящее время работает системным администратором в нашем учебном центре «ДАТА». Умение профессионально работать во многих компьютерных программах."}</span>
                   </div>
                   <div className="foundation__img">
                       <img src={images.teacher5} alt=""/>
                       <div className="foundation__img-shape1"></div>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default Foundation;