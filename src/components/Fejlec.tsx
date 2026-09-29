interface FejlecProps{
    cim: string;
    alcim: string;

}

export function Fejlec(props: FejlecProps){
    return <>
        <h1>{props.cim}</h1>
        <p>{props.alcim}</p>
       </>
}