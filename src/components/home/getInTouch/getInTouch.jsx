import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const GetInTouch = () => {
    return (
        <section className="section-connect"> 
        <div className="site-section bg-image overlay">
          <div className="container">
            <div className="container__justify-content-center">
              <div className="container__content"> 
                <h2 className="container__title">Доверти уборку профессионалам </h2>
                <p className="text-white"> 
                 Если у вас есть вопросы свяжитесь с нами
                </p>
                <p className="text">
                  <Link className="get-in-touch-btn" to='/contactUs'>
                  ПОЗВОНИТЬ
                  </Link>
                </p> 
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default GetInTouch;