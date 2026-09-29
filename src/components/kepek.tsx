import banan from "../assets/images/Banán.jpg";
import Birsalma from "../assets/images/birsalma.jpg";
import Mogyoro from "../assets/images/mogyoro.jpg";
import Granatalma from "../assets/images/granatalma.jpg";


interface KepekProps {
    banan: string;
    bananleiras: string;

    birsalma: string;
    birsleiras: string;

    mogyoro: string;
    mogyoroleiras: string;

    granatalma: string;
    granatalmaleiras: string;
}

export function Kepek(props: KepekProps) {
    return (
        <>
            <div className="row mb-1">

                <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                    <h2>{props.banan}</h2>

                    <img src={banan} className="img-fluid" alt="Banán" />

                    <p className="mt-2">
                        {props.bananleiras}
                    </p>
                </div>


                <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                    <h2>{props.birsalma}</h2>

                    <img src={Birsalma} className="img-fluid" alt="Birsalma" />

                    <p className="mt-2">
                        {props.birsleiras}
                    </p>
                </div>


                <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                    <h2>{props.mogyoro}</h2>

                    <img src={Mogyoro} className="img-fluid" alt="Mogyoró" />

                    <p className="mt-2">
                        {props.mogyoroleiras}
                    </p>
                </div>


                <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                    <h2>{props.granatalma}</h2>

                    <img src={Granatalma} className="img-fluid" alt="Gránátalma" />

                    <p className="mt-2">
                        {props.granatalmaleiras}
                    </p>
                </div>

            </div>
        </>
    );
}
