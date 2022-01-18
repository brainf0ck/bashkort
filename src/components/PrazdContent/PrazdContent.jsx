import react from "react";
import PrazdArticleContent from "./PrazdArticleContent/PrazdArticleContent";
import "./PrazdContent.css"

const PrazdContent = () => {
    return (
        <div>
            <div className="prazd_header">Праздники</div>
            <div className="prazd_content_div">
                <PrazdArticleContent />
                <img
                    src="https://russia.travel/upload/uf/fe2/fe2b774cd19b6dc275425b7d3b242d48.jpg"
                    alt="Ooops..."
                    className="prazd1_img"
                />
                <img
                    src="https://st.volga.news/image/w1300/h900/max/b2e75748-d4a1-49d0-bafb-014edbb50bb6.jpg"
                    alt="Ooops..."
                    className="prazd2_img"
                />
            </div>
        </div>
    )
}

export default PrazdContent;