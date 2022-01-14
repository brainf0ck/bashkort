import react from "react";
import TeatrArticleContent from "./TeatrArticleContent/TeatrArticleContent";
import "./TeatrContent.css"
import { Link } from "react-router-dom";

const TeatrContent = () => {
    return (
        <div className="teatr_content">
            <TeatrArticleContent />
            <img 
                src="https://cf2.ppt-online.org/files2/slide/f/FXBeywlq5kAuWHKOjfPnghc6L2JzmMtNZrTE9x7bYQ/slide-5.jpg" 
                alt="Ooops..."
                className="teatr1_img" 
            />
            <Link to="/" className="home_page_link">Вернуться на главную страницу.</Link>
        </div>
    )
}

export default TeatrContent;