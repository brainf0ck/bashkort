import react from "react";
import MedArticleContent from "./MedArticleContent/MedArticleContent";
import "./MedContent.css";

const MedContent = () => {
    return (
        <div>
            <MedArticleContent />
            <img 
                src="https://medrossii.ru/images/001/%D0%91%D0%B0%D1%88%D0%BA%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BC%D0%B5%D0%B4.jpg" 
                alt="Ooops..."
                className="med_img"
            />
        </div>
    );
};

export default MedContent;