import React from "react";
import MenuItem from "../MenuItem/MenuItem.component";
import "./Directory.styles.scss";

const Directory = () => {
    const sections = [
        {
            title: 'HATS',
            imageUrl: 'https://shorturl.at/ovwV6',
            id: 1,

        },
        {
            title: 'JACKETS',
            imageUrl: 'https://shorturl.at/dkxLN',
            id: 2,
        },
        {
            title: 'SNEAKERS',
            imageUrl: 'https://shorturl.at/klwDW',
            id: 3,
        },
        {
            title: 'WOMENS',
            imageUrl: 'https://shorturl.at/lFRU6',

            id: 4,
        },
        {
            title: 'MENS',
            imageUrl: 'https://shorturl.at/cpyEU',

            id: 5,

        }
    ];

    return (
        <div className='directory-menu'>
            {sections.map(({ title, imageUrl, id, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} />
            ))}
        </div>
    );
};

export default Directory;
