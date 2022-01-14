import react from "react";
import "./KuraiArticleContent.css";

const KuraiArticleContent = () => {
    return (
        <div className="kurai_article_content">
            <img 
                src="https://www.votpusk.ru/country/ctimages/new/RU44.jpg"
                alt="Ooops..." 
                className="bash_img"
            />
            <div className="bash_article">
                Башкортостан - безусловно великая республика РФ. Она обладает богатой историей и культурой. Знаменитый символ Башкирии - растение курай. На флаге оно изображено с семью лепестками. Они означают семь родов, которые позже объединились в единый Башкортостан: Бурзян, Тамьян, Тангаур, Усерган, Кара-кыпсак, Санкем-кыпсак, Кыпсак.
            </div>
        </div>
    );
};

export default KuraiArticleContent;
