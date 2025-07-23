"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfPath = "/Resume.pdf";

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // We use clientWidth to get the viewable width of the element,
        // which excludes the vertical scrollbar and is perfect for this use case.
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    // Set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <div className="h-full w-full overflow-y-auto" ref={containerRef}>
        <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <div
              key={`page_container_${index + 1}`}
              className="flex justify-start w-full"
            >
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={containerWidth}
              />
            </div>
          ))}
        </Document>
      </div>
      <Link
        href={pdfPath}
        download="Resume.pdf"
        className="fixed bottom-8 right-8 bg-gray-400 hover:bg-gray-500 text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-10 ease-in-out"
        aria-label="Download PDF"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </Link>
    </div>
  );
};

export default PDFViewer;
