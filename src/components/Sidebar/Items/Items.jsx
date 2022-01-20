import react from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = () => {
    return (
        <div className='items'>
            <Link to="/bashkortostan/kurai_content"><p className="item">Башкортостан</p></Link>
            <Link to="/bashkortostan/skot_content"><p className="item">Скотоводство</p></Link>
            <Link to="/bashkortostan/muz_content"><p className="item">Музыка</p></Link>
            <Link to="/bashkortostan/med_content"><p className="item">Башкирский мёд</p></Link>
            <Link to="/bashkortostan/lit_content"><p className="item">Литература</p></Link>
            <Link to="/bashkortostan/prazd_content"><p className="item">Праздники</p></Link>
            <Link to="/bashkortostan/teatr_content"><p className="item">Театры</p></Link>
        </div>
    );
};

export default Items;
