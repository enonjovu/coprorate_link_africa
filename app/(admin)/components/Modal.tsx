'use client';

type modalProps = {
    isOpen: boolean;
    message: string;
    onClose: () => void;
};

const Modal = ({ isOpen, message, onClose }: modalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50"
            style={{ zIndex: '1000' }}
        >
            <div className="w-1/3 rounded bg-white shadow-lg">
                <div className="border-b p-3 text-center text-lg">
                    <h5 className="font-bold text-black">{message}</h5>
                </div>
                <div className="p-5 text-center">
                    <p className="text-black">Operation Completed</p>
                </div>
                <div className="flex justify-end border-t p-3">
                    <button
                        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:outline-none"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
