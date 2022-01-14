import react from "react";
import SkotArticleContent from "./SkotArticleContent/SkotArticleContent";
import "./SkotContent.css";

const SkotContent = () => {
    return (
        <div className="skot_content">
            <img 
                src="https://avatars.mds.yandex.net/get-zen_doc/4303710/pub_60a6432ba28a8d16480e4fdc_60a643443733570555922410/scale_1200" 
                alt="Ooops..." 
                className="skot_content_img"
            />
            <img 
                src="https://posredi.ru/wp-content/uploads/2017/10/Naperegonki.jpg" 
                alt="Ooops..." 
                className="skot_content_img"
            />
            <img 
                src="https://posredi.ru/wp-content/uploads/2017/10/SH100417_2.jpg" 
                alt="Ooops..."
                className="skot_content_img" 
            />
            <SkotArticleContent />
        </div>
    );
};

export default SkotContent;