import react from "react";
import "./LitContent.css"
import LitArticleContent from "./LitArticleContent/LitArticleContent";

const LitContent = () => {
    return (
        <div className="lit_content">
            <div className="lit_header">Литература</div>
            <div className="lit_content_div">
                <LitArticleContent />
                <img
                    src="https://bspu.ru/files/18825/thumb"
                    alt="Ooops..."
                    className="akmulla_img"
                />
                <img
                    src="https://u7a.ru/assets/images/pojjjar/Ural.gif"
                    alt="Ooops..."
                    className="uralbatyr_img"
                />
            </div>
        </div>
    )
}

export default LitContent;