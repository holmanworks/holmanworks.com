import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="min-w-[480px] bg-white rounded-[12px] relative">

        <div className="flex justify-between items-center pr-2 pl-5 py-2">
          {title && <h2 className="text-lg font-semibold text-black">{title}</h2>}

          <Button 
            onClick={onClose} // Call the onClose function when clicked
            variant="icon" 
            size="icon" 
            color="black"
            icon={<XMarkIcon className="w-5 h-5" />} 
            className='w-8 h-8'
          />
        </div>

        <div className='p-5'>
          {children}
        </div>

      </div>
    </div>
  );
};

export { Modal };
