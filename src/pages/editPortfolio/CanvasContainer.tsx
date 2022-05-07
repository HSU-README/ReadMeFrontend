import React, {useCallback, useRef, useState} from "react";
import './Canvas.css';
export const CanvasContext = React.createContext<ICanvasContext>({});

export class ICanvasData{ //컴포넌트의 직접적인 데이터
    component?:string;
    id?:string;
    position?:{top:number, left:number};
    dimension?:{width:string, height:string};
    content?:string;
    type:string;
}

export interface ICanvasComponent{ //컴포넌트를 생성할시 기본 값들
    position?: {top:number, left:number};
    dimension?:{width:string, height:string};
    content?: string;
    id?:string;
    type:string;
    isReadOnly?:boolean;
}

export interface ICanvasContext{
    state?:{
        canvasData:ICanvasData[];
        activeSelection:Set<String>;
        enableQuillToolbar:boolean;
    };
    actions?:{
        setCanvasData:React.Dispatch<React.SetStateAction<ICanvasData[]>>;
        setActiveSelection: React.Dispatch<React.SetStateAction<Set<string>>>;
        //updateCanvasData: (data:Partial<ICanvasComponent>)=>void;
        //addElement:(type:string)=>void;
        setEnableQuillToolbar:(state:boolean)=>void;
    }
}
const CanvasContainer=()=>{
    const [canvasData,setCanvasData] = useState<ICanvasData[]>([]); //캔버스 내부 데이터 수정
    const [activeSelection,setActiveSelection] = useState<Set<string>>(new Set()); // 컴포넌트를 id로 검색하거나 불러옴.
    const [enableQuillToolbar,setEnableQuillToolbar] = useState<boolean>(false);//상위탭바 보여줄지 말지 결정
    const containerRef = useRef<HTMLDivElement>(null);
    const context:ICanvasContext={
        state:{
            canvasData,
            activeSelection,
            enableQuillToolbar
        },
        actions:{
            setCanvasData,
            setActiveSelection,
           // updateCanvasData,
            //addElement,
            setEnableQuillToolbar
        }
    }
    return(
        <div ref={containerRef}>
            <CanvasContext.Provider value={context}>
            <div className="convas-container">
                dsadasdasda
                {
                    canvasData.map((canvas)=>{
                        
                    })
                }
            </div>
            </CanvasContext.Provider>
        </div>
    )
}

export default CanvasContainer