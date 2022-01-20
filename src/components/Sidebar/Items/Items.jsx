import react from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = () => {
    return (
        <div className='items'>
            <Link to="/kurai_content"><p className="item">Башкортостан</p></Link>
            <Link to="/skot_content"><p className="item">Скотоводство</p></Link>
            <Link to="/muz_content"><p className="item">Музыка</p></Link>
            <Link to="/med_content"><p className="item">Башкирский мёд</p></Link>
            <Link to="/lit_content"><p className="item">Литература</p></Link>
            <Link to="/prazd_content"><p className="item">Праздники</p></Link>
            <Link to="/teatr_content"><p className="item">Театры</p></Link>
        </div>
    );
};

export default Items;
