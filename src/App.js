import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import Ruy from './image-react/imgo.png'
import Ponch from './image-react/ponch.png'
import Slex from './image-react/imagepop.png'
import Black from './image-react/img 43.png'
import Red from './image-react/img (13).png'
import Mus from './image-react/img (10).png'
import Sum from './image-react/img (5).png'
import Drag from './image-react/sladko.png'
import Logo from './image-react/img.png';
import { useState } from 'react';
import OrderModal from './components/OrdalModal';
import Content from './components/Content';
import Konda from './components/Konda';
import Slide from './components/Slide';
import Zakaz from './components/Zakaz';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  

  return (
    <div className="App"> 
     <Header/>
     <Modal/>
     <main className='main'>
      <div className='people-cont'>
        Для любых событий и дорогих вам людей 
      </div>
           <div className='cafe-menu'>
                <div className='cafe-container'>
                    <div className='crem-container'>
                        <img src={Logo} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Кремовый замок
                                </div>
                                     <div id='txt-cont'>
                                       Нежный крем любого цвета на выбор, вафельная основа
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
<div className='crem-container'>
                        <img src={Ruy} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Малиновый рай
                                </div>
                                     <div id='txt-cont'>
                                      Воздушный крем, темная основа и ягода малины
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
<div className='crem-container'>
                        <img src={Ponch} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Фейерверк
                                </div>
                                     <div id='txt-cont'>
                                      Разноцветные крем,  с бисквитной основой
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
                </div>
<div className='cafe-container'>
                    <div className='crem-container'>
                        <img src={Slex} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Шоколадный мир
                                </div>
                                     <div id='txt-cont'>
                                       Ореховая стружка, нежный крем и шоколадная основа
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
<div className='crem-container'>
                        <img src={Drag} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Слезы дракона
                                </div>
                                     <div id='txt-cont'>
                                      Нежный крем любого цвета на выбор, вафельная основа
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
<div className='crem-container'>
                        <img src={Sum} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Летняя фантазия
                                </div>
                                     <div id='txt-cont'>
                                      Украшения в форме сердец, для любимого человека
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
                </div>
                <div className='cafe-container'>
                    <div className='crem-container'>
                        <img src={Mus} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Мыс безумия
                                </div>
                                     <div id='txt-cont'>
                                       Разноцветная основа, стружка и нежный крем
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
<div className='crem-container'>
                        <img src={Red} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Облачная сказка
                                </div>
                                     <div id='txt-cont'>
                                     Светлая основа, нежный крем со стружкой сверху
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
<div className='crem-container'>
                        <img src={Black} alt='Фото'></img>
                          <div className='text'>
                                <div id='txt'>
                                  Темный рыцарь
                                </div>
                                     <div id='txt-cont'>
                                      Тёмная основа, нежный крем и вкусные шарики
                                     </div>
                                      <div className='rub-cont-btn'>
                                    <div className='ruble'>
                                          150 ₽/шт. 
                                    </div>
                                    <button onClick={openModal} id='btnNext'>Заказать</button>
                                    <OrderModal isOpen={isModalOpen} onClose={closeModal} />                         
                                </div>
                          </div>
                    </div>
                </div>
           </div>
     </main>
     <Content/>
     <Konda/>
     <Slide/>
     <Zakaz/>
     <Footer/>
    </div>
  );
}

export default App;