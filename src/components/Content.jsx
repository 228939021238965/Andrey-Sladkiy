import React from "react";
import './Content.css';
import Cont from '../image-react/01 1.png';
import Sas from '../image-react/02 1.png'
import Tot from '../image-react/phone 1.png'
import { useState } from "react";


const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsOpen(false); 
    }
  };

    return (
        <div className="content">
            <img src={Cont} alt="Облачко"></img>
            <img src={Tot} alt="Рука" id="btn-Priv"></img>
            <img src={Sas} alt="Облачко" id="Ob-Btn"></img>
                <div className="text-text">
                    <div className="btn-btn">
                       <button className="button">Не нашли то что нужно?</button>
                            <div id="txt-cash">
                                Приготовим заказ любой сложности  по фото или эскизу
                            </div>
                                <div id='nbt-nbt'>
                                    Загрузите фотографию или эскиз капкейков  и мы рассчитаем стоимость за 30 минут
                                </div>   

                                <div>
      <button onClick={() => setIsOpen(true)} id="upload-button">
        Загрузить фотографию
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <h2>Выберите фотографию</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Загрузить</button>
          </div>
        </div>
      )}
    </div>
                    </div>
                </div>
        </div>
    )
};

export default Content;