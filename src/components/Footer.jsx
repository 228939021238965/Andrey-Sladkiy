import React from "react";
import './Footer.css'
import Foot from '../image-react/05 1.png'

const Footer = () => {
    return (
        <div className="Footer">
            <img src={Foot} alt="Подвал"></img>
            <div className="Num">
                    <div className="Text-TXT">
                            <h1>Чтобы сделать заказ, укажите ваш телефон</h1>
                            <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer;