import React, { useState } from "react";

const RenameModal = ({ pokemon, onRename, onClose }) => {
  const [nickname, setNickname] = useState("");

  const handleRename = () => {
    onRename(nickname || pokemon.name);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" tabIndex="-1">
      <div className="bg-gray-600 border-2 p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">You caught a Pokémon!</h2>
        <p className="mb-4">Do you want to rename {pokemon.name}?</p>
        <input
          type="text"
          placeholder="Enter nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <div className="w-full">
          <button
            onClick={handleRename}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          >
            OK
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>

        <i className="text-sm">
          *you can to not give a nickname with click "ok" without fill the
          nickname
        </i>
      </div>
    </div>
  );
};

export default RenameModal;
