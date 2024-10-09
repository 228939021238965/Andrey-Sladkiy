import './Header.css';
import React, { useState } from 'react';
import Modal from './Modal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <header className='Header'>
        <div className="background-container">
            <div className='header-cont'>
                <div className='Header-container-path'>
                     <div className='overLay'>
                         <h2>Сладкий сундук</h2>
                     </div>
                     <div className='container-number'>
                        г. Санкт Петербург,ул. Куйбышева 31
                     </div>
                     <div className='container-adress'>
                        8 (812) 844-95-49
                        <div className='every-day'>
                            Ежедневно с 9:00 до 20:00
                        </div>
                     </div>
                </div>
            </div>
            <div className="catalog">
                <div className='vkusno'>
                      <button className='MyButton'>вкуснейшие</button>
                </div>
                <div className='rub-container'>
            Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
        </div>
        <div className='day-container'>
            Приготовим за 3 часа в день заказа. 
Доставка на авто в холодильнике.
<button onClick={openModal} id='my-btn'>Перейти в каталог</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className='vid-cont'>
        9 различных  видов на выбор
      </div>
            </div>
        </div>
            </div>
        </header>
    );
}
export default Header;