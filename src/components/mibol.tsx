interface KartaProps {
  cim: string;
  elemek: string[];
}

export function Mibol(props: KartaProps) {
  return (
    <>
      <div className="col-sm-12 kartya mb-3">
        <h2>{props.cim}</h2>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>{props.elemek[0]}</td>
              <td>{props.elemek[1]}</td>
              <td>{props.elemek[2]}</td>
            </tr>

            <tr>
              <td>{props.elemek[3]}</td>
              <td>{props.elemek[4]}</td>
              <td>{props.elemek[5]}</td>
            </tr>

            <tr>
              <td>{props.elemek[6]}</td>
              <td>{props.elemek[7]}</td>
              <td>{props.elemek[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      []
    </>
  );
}
