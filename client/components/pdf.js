import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    // Fetch the PDF file from the internet
    axios
      .get(url, { responseType: 'arraybuffer' })
      .then((response) => {
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfData(pdfUrl);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
  }, [url]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdf-viewer'>
      <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
        <Flex>
          {Array.from(new Array(numPages), (el, index) => (
            <Flex margin={"10px"}>
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
            </Flex>
          ))}
        </Flex>
      </Document>
    </div>
  );
}

export default PDFViewer;
