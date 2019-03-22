import React from 'react';

const TabHeader = () => {
    
    let Names = ["Lacak Pengiriman", "Cara Belanja", "Tentang Kami", "Bantuan"]
    
    let Tab = Names.map(name => {
        return <a href="#" className="headerList">{name}</a>
    })

    return (
        <div>
            {Tab}
        </div>
    );
}

export default TabHeader;