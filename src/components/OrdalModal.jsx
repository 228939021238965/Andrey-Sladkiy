import React from 'react';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Оформить заказ</h2>
        <p>Введите данные для заказа:</p>
        <form>
          <label>
            Имя:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Адрес:
            <input type="text" name="address" />
          </label>
          <br />
          <button type="submit">Отправить</button>
          <button type="button" onClick={onClose}>Закрыть</button>
        </form>
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',
  opacity: 2,
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

export default OrderModal;