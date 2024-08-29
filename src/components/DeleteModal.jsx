import React from 'react';

const DeleteModal = ({ pokemon, onConfirm, onCancel }) => {
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" tabIndex="-1">
      <div className="bg-gray-700 border-2 p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p>Are you sure you want to release {pokemon.nickname || pokemon.name}?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
