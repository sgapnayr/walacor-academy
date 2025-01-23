import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string | React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  content,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="relative m-4 p-4 w-full max-w-lg rounded-lg bg-white shadow-sm"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title */}
            <div className="text-xl font-medium text-slate-800 pb-4">
              {title}
            </div>

            {/* Content */}
            <div className="border-t border-slate-200 py-4 text-slate-600">
              {content}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end pt-4 space-x-2">
              <button
                onClick={onCancel}
                className="rounded-md border py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 transition-all"
              >
                {cancelText}
              </button>
              <button
                onClick={onConfirm}
                className="rounded-md bg-green-600 py-2 px-4 text-sm text-white shadow-md hover:bg-green-700 transition-all"
              >
                {confirmText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
