import react from "react";
import "./KuraiContent.css";
import KuraiArticleContent from "./KuraiArticleContent/KuraiArticleContent.jsx";

const KuraiContent = () => {
    return (
        <div className="kurai_content">
            <div className="kurai_header">Башкортостан</div>
            <div className="kurai_content_div">
                <img
                    className="kurai_img_content"
                    src="https://old.hcsalavat.ru/upload/medialibrary/a34/a348804aeed2ff5a3e3f8920635279e9.png"
                />
                <h2 className="bashkir_item">БАШКОРТОСТАН</h2>
                <h2 className="burzyan_item">БУРЗЯН</h2>
                <h2 className="tamyan_item">ТАМЬЯН</h2>
                <h2 className="tangaur_item">ТАНГАУР</h2>
                <h2 className="usergan_item">УСЕРГАН</h2>
                <h2 className="kara_item">КАРА-КЫПСАК</h2>
                <h2 className="sankem_item">САНКЕМ-КЫПСАК</h2>
                <h2 className="kypsak_item">КЫПСАК</h2>
                <KuraiArticleContent />
            </div>
        </div>
    );
};

export default KuraiContent;