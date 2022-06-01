import React, {useState , useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../redux/reducers/LangReducer";



function Navbar() {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.lang.lang)
  const handleLangChange = ({target}) =>  {
    localStorage.setItem("lang", target.value)
    dispatch(setLang(target.value))
  }

  let [ activeBtn, setActiveBtn ] = useState(false)

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 110) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="header">
      <div className="navbar">
        <div className="container">
          <div className="navbar__row">
            <Link to="/" className="navbar__logo">
              <span className="navbar__logo-text">DATA</span>
              <div className="navbar__logo-item">
                <span className="navbar__logo-item1">K</span>
                <span className="navbar__logo-item2">I</span>
                <span className="navbar__logo-item3">D</span>
                <span className="navbar__logo-item4">S</span>
              </div>
            </Link>
            <div className="navbar__location">
              <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
              <div className="navbar__location-text">
                <span>{lang === "uz" ? "Xorazm viloyati, Urganch shahar" : "Хорезмская область, город Ургенч"}</span>
                <span>{lang === "uz" ? "V.Fayozova, 3-uy" : "В.Файозова, 3 дом"}</span>
                <span>{lang === "uz" ? "Ish vaqtlari 9:00 - 19:00" : "Время работы с 9:00 до 19:00"}</span>
              </div>
            </div>
            <div className="navbar__contact">
              <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
              <div className="navbar__contact-item">
                <span>+998(99) 759-88-86</span>
                <a href="tel:+998997598886">Qayta bog'lanaylikmi?</a>
              </div>
            </div>
            <div className="navbar__burger" onClick={()=> setActiveBtn(!activeBtn)}>
              <i className={activeBtn ?  "fa fa-bars fa-2x active" :  "fa fa-bars fa-2x"} aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`${activeBtn ? "navbar__nav active" : "navbar__nav"} ${scrolling && 'sticky'}`}>
        <div className="container">
          <div className="navbar__nav-row">
            <ul className="navbar__nav-ul">
              <li className="navbar__nav-li">
                <Link className="navbar__nav-text">
                  {lang === "uz" ? "Kirish" : "Введение"}
                </Link>
              </li>
              <li className="navbar__nav-li">
                <Link className="navbar__nav-text">
                  {lang === "uz" ? "Yo'nalishlar" : "Направления"}
                </Link>
              </li>
              <li className="navbar__nav-li">
                <Link className="navbar__nav-text">
                  {lang === "uz" ? "Jamoa" : "Команда"}
                </Link>
              </li>
              <li className="navbar__nav-li">
                <Link className="navbar__nav-text">
                  {lang === "uz" ? "Galereya" : "Галерея"}
                </Link>
              </li>
              <li className="navbar__nav-li">
                <Link className="navbar__nav-text">
                  {lang === "uz" ? "Tarix" : "История"}
                </Link>
              </li>
              <li className="navbar__nav-li">
                <Link className="navbar__nav-text">
                  {lang === "uz" ? "Aloqa" : "Вызов"}
                </Link>
              </li>
            </ul>
            <div className="navbar__lang">
              <div className="navbar__lang-text">
                {lang === "uz" ? "Til :" : "Язык :"}
              </div>
              <select onChange={handleLangChange}>
                <option selected={lang === "uz" ? true : false} value="uz">UZ</option>
                <option selected={lang === "ru" ? true : false} value="ru">RU</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;