"use client"
import { useState } from "react";
import Modal from "../../components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      <Modal
        show={showModal}
        onClose={closeModal}
      >
        <h2 className="text-2xl mb-4">Modal Title</h2>
        <p className="mb-4">This is the modal content.</p>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
