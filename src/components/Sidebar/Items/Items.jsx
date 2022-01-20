import react from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = () => {
    return (
        <div className='items'>
            <Link to="/bashkiria/kurai_content"><p className="item">Башкортостан</p></Link>
            <Link to="/bashkiria/skot_content"><p className="item">Скотоводство</p></Link>
            <Link to="/bashkiria/muz_content"><p className="item">Музыка</p></Link>
            <Link to="/bashkiria/med_content"><p className="item">Башкирский мёд</p></Link>
            <Link to="/bashkiria/lit_content"><p className="item">Литература</p></Link>
            <Link to="/bashkiria/prazd_content"><p className="item">Праздники</p></Link>
            <Link to="/bashkiria/teatr_content"><p className="item">Театры</p></Link>
        </div>
    );
};

export default Items;
