
import React,{useState} from 'react';
import ShowPortfolio from './ShowPortfolio';
import { PDFDownloadLink } from "@react-pdf/renderer";
const DownloadPortfolio=()=>{
    const [title, setTitle] = useState("")
    return(
        
        <div>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <PDFDownloadLink document={<ShowPortfolio/>} filename={title}>
                {({loading})=>loading ?( <button>Loading Document...</button>)
                :
                (<button>Download</button>)}
            </PDFDownloadLink>
        </div>
    )
}

export default DownloadPortfolio;