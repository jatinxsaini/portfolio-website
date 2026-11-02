'use client';

import React, { useState } from 'react';
import { Download, ExternalLink, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface ResumePdfViewerProps {
  name: string;
  pdfUrl: string;
}

export const ResumePdfViewer: React.FC<ResumePdfViewerProps> = ({ name, pdfUrl }) => {
  const [zoom, setZoom] = useState(100);
  const [reloadKey, setReloadKey] = useState(0);
  const fileName = `${name.replace(/\s+/g, '_')}_Resume.pdf`;
  const pdfSource = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=${zoom}`;

  return (
    <section className="resume-viewer" aria-label="Résumé PDF viewer">
      <div className="resume-viewer__toolbar">
        <span className="resume-viewer__filename">{fileName}</span>

        <div className="resume-viewer__controls" aria-label="PDF controls">
          <button
            type="button"
            className="resume-viewer__control"
            onClick={() => setZoom((current) => Math.max(50, current - 10))}
            disabled={zoom <= 50}
            aria-label="Zoom out"
            title="Zoom out"
          >
            <ZoomOut aria-hidden="true" />
          </button>
          <span className="resume-viewer__zoom" aria-live="polite">{zoom}%</span>
          <button
            type="button"
            className="resume-viewer__control"
            onClick={() => setZoom((current) => Math.min(150, current + 10))}
            disabled={zoom >= 150}
            aria-label="Zoom in"
            title="Zoom in"
          >
            <ZoomIn aria-hidden="true" />
          </button>
          <span className="resume-viewer__divider" aria-hidden="true" />
          <button
            type="button"
            className="resume-viewer__control"
            onClick={() => {
              setZoom(100);
              setReloadKey((current) => current + 1);
            }}
            aria-label="Reset PDF view"
            title="Reset view"
          >
            <RotateCcw aria-hidden="true" />
          </button>
          <a
            className="resume-viewer__control"
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open résumé PDF in a new tab"
            title="Open in new tab"
          >
            <ExternalLink aria-hidden="true" />
          </a>
          <a
            className="resume-viewer__download"
            href={pdfUrl}
            download={fileName}
          >
            <Download aria-hidden="true" />
            <span>Download</span>
          </a>
        </div>
      </div>

      <iframe
        key={reloadKey}
        className="resume-viewer__document"
        src={pdfSource}
        title={`${name} résumé PDF`}
      />
      <p className="sr-only">
        If the PDF viewer is unavailable, use the download or open-in-new-tab link above.
      </p>
    </section>
  );
};
