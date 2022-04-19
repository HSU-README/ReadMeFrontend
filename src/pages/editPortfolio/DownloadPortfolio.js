
import React,{useState} from 'react';
import ShowPortfolio from './ShowPortfolio';
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExportPdf from './ExportPdf.js'
const DownloadPortfolio=()=>{
    const [title, setTitle] = useState("")
    return(
        
        <div className="App container">
            <ExportPdf/>
        </div>
    )
}

export default DownloadPortfolio;