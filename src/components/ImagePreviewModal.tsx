// src/components/ImagePreviewModal.tsx
import { X } from "lucide-react";

type ImagePreviewModalProps = {
  src: string;
  isOpen: boolean;
  onClose: () => void;
};

const ImagePreviewModal = ({ src, isOpen, onClose }: ImagePreviewModalProps) => {
  if (!isOpen || !src) return null;

  return (
	<div
	  className="
		fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm
		flex items-center justify-center p-4
	  "
	  onClick={onClose}
	>
	  <div
		className="relative max-w-6xl w-full max-h-[95vh]"
		onClick={(e) => e.stopPropagation()}
	  >
		{/* Кнопка закрытия — ВНУТРИ модалки */}
		<button
		  onClick={onClose}
		  className="
			absolute top-3 right-3 text-white bg-black/40 
			hover:bg-black/60 rounded-full p-2 
			backdrop-blur transition-colors
		  "
		>
		  <X className="w-5 h-5" />
		</button>

		<img
		  src={src}
		  alt="Platform preview"
		  className="w-full max-h-[95vh] object-contain rounded-2xl shadow-xl"
		/>
	  </div>
	</div>
  );
};

export default ImagePreviewModal;