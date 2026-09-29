interface KartaProps{
    cim: string;
    elemek: string[];

}

export function KisCard3(props: KartaProps){
    return <>
<div className="col-sm-4 kartya mb-2">
          <h2>{props.cim}</h2>

          <ol className="list-group list-group-numbered">
            <li className="list-group-item">{props.elemek[0]}</li>

            <li className="list-group-item">{props.elemek[1]}</li>

            <li className="list-group-item">{props.elemek[2]}</li>

            <li className="list-group-item">{props.elemek[3]}</li>

            <li className="list-group-item">{props.elemek[4]}</li>
          </ol>
        </div>
       </>
}
