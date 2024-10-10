import React from "react";
import './Footer.css'
import Foot from '../image-react/05 1.png'

const Footer = () => {
const handleOrder = () => {
    alert("Заказ успешно оформлен!");
  };

    return (
        <div className="Footer">
            <img src={Foot} alt="Подвал"></img>
            <div className="Num">
                    <div className="Text-TXT">
                            <h1>Чтобы сделать заказ, укажите ваш телефон</h1>
                            <p>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</p>
                    </div>
                    <div className="num-pas">
                            <div className="button-num">
                                    <input className='NUMBER' placeholder="Номер телефона"></input>
                                        <button onClick={handleOrder} id='btn-BTN'>
                                                       Сделать заказ
                                        </button>
                                        <h4>Нажамая на кнопку, вы соглашаетесь с условиями обработки персональных данных</h4>
                            </div>
                    </div>
            </div>
                    <div className="txt-txt-txt">
                            <div className="OPO">
                                <h5 id='n6'>Согласие на обработку данных</h5>
                                <h5 id='n6'>Служба поддержки</h5>
                                <h5 id='n6'>Политика конфиденциальности</h5>
                            </div>
                        <h3>© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</h3>
                    </div>
        </div>
    )
}

export default Footer;