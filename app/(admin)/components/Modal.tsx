"use client";

type modalProps = {
  isOpen:boolean,
  message:string,
  onClose:()=>void
}

const Modal = ({ isOpen, message, onClose }:modalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50" style={{zIndex: '1000'}}>
      <div className="bg-white rounded shadow-lg w-1/3">
        <div className="border-b p-3 text-center text-lg">
          <h5 className="font-bold text-black">{message}</h5>
        </div>
        <div className="p-5 text-center">
          <p className='text-black'>Blog created successfully</p>
        </div>
        <div className="flex justify-end p-3 border-t">
          <button className="px-3 py-1 rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>

  );
};

export default Modal;
