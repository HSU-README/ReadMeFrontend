import ShowPortfolio from "./ShowPortfolio";
import { PDFDownloadLink } from "@react-pdf/renderer";
const EditPortFolio=()=>{
    return(
        <div>
            <div>
                <PDFDownloadLink document={<ShowPortfolio />} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
                </PDFDownloadLink>
            </div>
        </div>
    )
}

export default EditPortFolio;