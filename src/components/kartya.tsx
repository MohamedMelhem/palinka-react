interface KartaProps{
    cim: string;
    content: string;

}

export function Katrya(props: KartaProps){
    return <>
    
        <div className="col-sm-12">
        <div className="card">
        <div className="card-header">{props.cim}</div>
        <div className="card-body">{props.content}</div> 
        </div>
        </div>
       </>
}


