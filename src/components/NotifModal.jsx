import React from 'react';

const NotifModal = ({ massage, onClose }) => {
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" tabIndex="-1">
      <div className="bg-gray-600 p-6 rounded border-2 shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">wow!</h2>
        <p className="mb-4">{massage}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default NotifModal;
