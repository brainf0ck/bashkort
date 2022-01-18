import react from "react";
import SkotArticleContent from "./SkotArticleContent/SkotArticleContent";
import "./SkotContent.css";

const SkotContent = () => {
    return (
        <div className="skot_content">
            <div className="skot_header">Скотоводство</div>
            <div className="skot_content_div">
                <SkotArticleContent />
                <img
                    src="https://posredi.ru/wp-content/uploads/2017/10/Naperegonki.jpg"
                    alt="Ooops..."
                    className="skot1_img"
                />
                <img
                    src="https://posredi.ru/wp-content/uploads/2017/10/SH100417_2.jpg"
                    alt="Ooops..."
                    className="skot2_img"
                />
            </div>
        </div>
    );
};

export default SkotContent;