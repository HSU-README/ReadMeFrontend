import React,{useRef} from 'react';
import ShowPortfolio from './EditPortfolio.js';
import ReactToPrint from 'react-to-print';

const SimpleComponent = props => { const { printRef } = props; return <div ref={printRef}>아주 간단한 컴포넌트입니다.</div>; };


const ExportPdf=()=>{
    const componentRef = useRef(null);
    return(
        <div>   
        <ReactToPrint trigger={() => <button>프린트하기</button>} content={() => componentRef.current} />

        <ShowPortfolio printRef={componentRef} />
        </div>
    );
}

export default ExportPdf;