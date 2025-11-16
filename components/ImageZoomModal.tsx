import React from 'react';

interface ImageZoomModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl?: string;
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen || !imageUrl) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
        >
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-slate-300 transition-colors"
                aria-label="Close image zoom view"
            >
                &times;
            </button>
            <div className="relative max-w-screen-lg max-h-[90vh]">
                <img 
                    src={imageUrl} 
                    alt="Zoomed product view" 
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default ImageZoomModal;
