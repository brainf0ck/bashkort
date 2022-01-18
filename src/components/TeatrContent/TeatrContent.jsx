import react from "react";
import TeatrArticleContent from "./TeatrArticleContent/TeatrArticleContent";
import "./TeatrContent.css"

const TeatrContent = () => {
    return (
        <div className="teatr_content">
            <div className="teatr_header">Театры</div>
            <div className="teatr_content_div">
                <TeatrArticleContent />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzeMjrbevHwgXTKX-ukozU3QKZVfuhGzw3w&usqp=CAU"
                    alt="Ooops..."
                    className="teatr1_img"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZ9thaq8ARPsNNUldWYAgIS4DP1LnTNiC7Q&usqp=CAU"
                    alt="Ooops..."
                    className="teatr2_img"
                />
            </div>
        </div>
    )
}

export default TeatrContent;