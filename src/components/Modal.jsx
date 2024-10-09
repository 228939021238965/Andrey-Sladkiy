import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 id='menu-btn'>Наше меню</h2>
        <ul className="li-pop">Кремовый замок</ul>
        <ul className="li-pop">Малиновый рай</ul>
        <ul className="li-pop">Шоколадный мир</ul>
        <ul className="li-pop">Слезы дракона</ul>
        <ul className="li-pop">Темный рыцарь</ul>
        <ul className="li">Цезарь с лососем</ul>
        <ul className="li-pop">Мыс безумия</ul>
        <ul className="li-pop">Летняя фантазия</ul>
        <ul className="li-pop">Кремовый замок</ul>
        <ul className="li-pop">Облачная сказка</ul>
        <button onClick={onClose} id='Next-btn'>Закрыть</button>
      </div>
    </div>
  );
};


const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

export default Modal;
