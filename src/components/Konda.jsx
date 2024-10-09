import React from "react";
import './Konda.css'
import Woman from '../image-react/woman.png'
import sli from '../image-react/03 1.png'

const Konda = () => {
    const handleClick = () => {
    const question = "Как вас зовут?";
    const answer = window.prompt(question);
    if (answer) {
      alert(`Ожидайте ваш заказ в скором времени будет принят, ${answer}!`);
    } else {
      alert("Вы не ввели имя.");
    }
  };

    return (
        <div className="Konda">
                <div className="cont-konda">
                    <div className="knda">
                        <div className="bobing">
                    <button className="Btn-good">Кто будет готовить?</button>
                    <h1>Лично приготовлю  и всё красиво упакую  для вашего события</h1>
                       </div>
                       <div id='text-text'>
                            <p id="text-p">Проконсультирую по выбору капкейков и придумаю нестандартную идею</p>
                             <p id="text-p">Приготовлю капкейки для вашего события,  которые обязательно всем понравятся </p>
                              <p id="text-p">Аккуратно и красиво всё упакую, если  вы хотите сделать приятный подарок</p>
                       </div>
                    </div>
                     <div>
      <button onClick={handleClick} id='button-tnt'>Задать вопрос Юлии</button>
    </div>
                </div>
                <img src={Woman} alt='Фото' id='photo'></img>
                <img src={sli} alt="Фото" id='mot'></img>
        </div>
    )
}

export default Konda;