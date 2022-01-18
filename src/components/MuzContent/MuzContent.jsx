import react from "react";
import MuzArticleContent from "./MuzArticleContent/MuzArticleContent";
import "./MuzContent.css";

const MuzContent = () => {
    return (
        <div className="muz_content">
            <div className="muz_header">Музыка</div>
            <div className="muz_content_div">
                <img
                    className="muzinst_img"
                    src="https://api.rbsmi.ru/attachments/039ad9cf0efb82c74a6cb43fd70a1b0776d54d5b/store/crop/0/0/800/451/800/0/0/242f13f7df541a8edb53c52bb6eeb5d42573e640d85bb27f2e5da93c1d60/2f2623ba6b9f4bd2fc2e183485b187df.jpg"
                    alt="Ooops..."
                />
                <img
                    className="muzinst_img"
                    src="https://realnoevremya.ru/uploads/articles/cf/27/094569345d444137.jpg"
                    alt="Ooops..."
                />
                <img
                    className="muzinst_img"
                    src="https://nashural.ru/assets/uploads/pic-20.jpg"
                    alt="Ooops..."
                />
                <MuzArticleContent />
            </div>
        </div>
    );
};

export default MuzContent;