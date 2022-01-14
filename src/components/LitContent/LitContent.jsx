import react from "react";
import "./LitContent.css"
import LitArticleContent from "./LitArticleContent/LitArticleContent";

const LitContent = () => {
    return (
        <div className="lit_content">
            <LitArticleContent />
            <img 
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/e/ea/MAkmulla.jpg/140px-MAkmulla.jpg"
                alt="Ooops..." 
                className="akmulla_img"
            />
            <img 
                src="https://u7a.ru/assets/images/pojjjar/Ural.gif" 
                alt="Ooops..." 
                className="uralbatyr_img"
            />
        </div>
    )
}

export default LitContent;