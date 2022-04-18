import React from 'react';
import { Document,View, Text,PDFViewer,StyleSheet,Page,PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import DownloadPortfolio from './DownloadPortfolio.js';
const styles = StyleSheet.create({
  page: { padding: 60 },
  box: { width: '100%', marginBottom: 30, borderRadius: 5 },
  pageNumbers: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center'
  },
});

const ShowPortfolio=()=>{
  return(
    <div>
      <Document>
        <Page style={styles.page} size="A4" wrap>
          <Text>
        sadfdasfsdjkldsajbvlasdblkadshblvasdlbkvsdavlasdv;lasjdlk
        </Text>
      <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
  </div>
  );
}
export default ShowPortfolio;
