import react from 'react';
import './Sidebar.css';
import Items from "./Items/Items";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Items />
            <img 
                className="kurai_img" 
                alt='Ooops...'
                src="https://old.hcsalavat.ru/upload/medialibrary/a34/a348804aeed2ff5a3e3f8920635279e9.png" 
            />
        </div>
    )
}

export default Sidebar;