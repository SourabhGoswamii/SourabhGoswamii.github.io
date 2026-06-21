"use client";

import { useState } from "react";
import { Search, RotateCw, Download, Plus, Minus } from "lucide-react";

export default function ResumePage() {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const fileName = "Sourabh_Goswami_Resume.pdf";
  const fileUrl = "/Sourabh_Goswami_Resume.pdf";

  const handleZoomIn = () => setZoom((z) => Math.min(z + 10, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 10, 50));
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] py-4 px-4 md:px-0 max-w-5xl mx-auto">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-t-lg px-4 py-2.5">
        <span className="text-sm text-neutral-400 truncate">{fileName}</span>

        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomOut}
            aria-label="Zoom out"
            className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
          >
            <Minus size={16} />
          </button>

          <span className="text-sm text-neutral-400 w-12 text-center select-none">
            {zoom}%
          </span>

          <button
            onClick={handleZoomIn}
            aria-label="Zoom in"
            className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
          >
            <Plus size={16} />
          </button>

          <button
            aria-label="Search"
            className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors ml-1 hidden sm:block"
          >
            <Search size={16} />
          </button>

          <button
            onClick={handleRotate}
            aria-label="Rotate"
            className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors hidden sm:block"
          >
            <RotateCw size={16} />
          </button>

          <a
            href={fileUrl}
            download={fileName}
            aria-label="Download"
            className="flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="flex justify-center items-center w-full flex-1 bg-neutral-950 border border-t-0 border-neutral-800 rounded-b-lg overflow-hidden">
        <div
          className="w-full h-full transition-transform duration-200"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <iframe
            src={`${fileUrl}#toolbar=0&navpanes=0&zoom=${zoom}`}
            className="w-full h-full border-none bg-white"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}
