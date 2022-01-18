import react from "react";
import MedArticleContent from "./MedArticleContent/MedArticleContent";
import "./MedContent.css";

const MedContent = () => {
    return (
        <div>
            <div className="med_header">Башкирский мёд</div>
            <div className="med_content_div">
                <MedArticleContent />
                <img
                    src="https://medrossii.ru/images/001/%D0%91%D0%B0%D1%88%D0%BA%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BC%D0%B5%D0%B4.jpg"
                    alt="Ooops..."
                    className="med1_img"
                />
                <img
                    src="https://s0.rbk.ru/v6_top_pics/media/img/0/82/755974647364820.jpg"
                    alt="Ooops..."
                    className="med2_img"
                />
            </div>
        </div>
    );
};

export default MedContent;