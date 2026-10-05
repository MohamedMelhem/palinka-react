interface FejlecProps{
    author: string;
    date: string;

}

export function Lablec(props: FejlecProps){
    return <>
     
<div className="col-sm-12 kartya mb-3">
          <p className="text-center">
            <b>Az oldalt készítette: </b>

            <i>{props.author}</i>
          </p>

          <p style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}> Készítés dátuma: </span>

            <span className="dolt"> {props.date} </span>
          </p>
        </div>
       </>
}




