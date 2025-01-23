import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/app/components/Button";

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
              <Button
                variant="secondary"
                size="sm"
                onClick={onCancel || (() => {})}
                className="hover:bg-gray-100"
              >
                {cancelText}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={onConfirm || (() => {})}
                className="hover:bg-[#00B3DD]/50"
              >
                {confirmText}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
