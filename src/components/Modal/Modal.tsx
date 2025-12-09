
import React from 'react';

export interface ModalProps {
  name: string;
  tags?: string[];
  onCreate?: () => void;
  onDelete?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  name,
  tags = [],
  onCreate,
  onDelete,
  onSave,
  onCancel,
}) => {
  return (
    <div className="bg-transparent flex flex-col gap-6 pb-6 border-b border-gray-300">
      {/* Top */}
      {/* <div className="flex items-start gap-6 mt-6"> */}
        <div className="flex flex-col items-center w-40">
          <h2 className="text-lg mt-3 text-left font-bold font-serif mb-1">{name}</h2>
        </div>
      {/* </div> */}

      {/* Tags */}
      {(onCreate || onDelete) && (
      <div className="flex items-start gap-6 mt-6">
        <div className="flex flex-wrap gap-3 mb-6 tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-md font-serif"
            >
              {tag} 
              {onDelete && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                  }}
                  className="px-2 py-1 text-xl font-bold rounded-3xl hover:text-[#FFFFFF] hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
                >
                  -
                </button>
              )}
            </span>
          ))}
          <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-md font-serif">
            {onCreate && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onCreate();
                }}
                className="px-2 py-1 text-xl font-bold rounded-3xl hover:text-[#FFFFFF] hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
              >
                +
              </button>
            )}
          </span>
        </div>
      </div>
      )}
      
      {/* ModalButtons */}
      {(onSave || onCancel) && (
        <div className="flex gap-4 mt-8">
          {onSave && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSave();
              }}
              className="px-6 py-2 text-xl font-light text-white bg-brand-800 rounded-3xl hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-800"
            >
              Spara
            </button>
          )}
          {onCancel && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onCancel();
              }}
              className="px-6 py-2 text-xl font-medium text-brand-800 bg-white border border-brand-800 rounded-3xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-800"
            >
              Avbryt
            </button>
          )}
        </div>
      )}
    </div>
  );
};
