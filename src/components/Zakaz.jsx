import React from "react";
import './Zakaz.css'
import Dod from '../image-react/Content + button.png'

const Zakaz = () => {
    return (
        <div className="Zakaz">
            <div className="text-txt-txt">
                <h1>Сделали более 3.000 заказов за 2 года</h1>
                <p>Посмотрите фото реальных заказов из нашего instagram</p>
            </div>
                <img src={Dod} alt="Заказы" id='Dod'></img>
        </div>
    )
}

export default Zakaz;