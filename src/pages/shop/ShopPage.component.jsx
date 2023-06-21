import { useState } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview.component";

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <>
            <div className="shop-page">
                {collections.map((collection) => {
                    return (
                        <CollectionPreview
                            key={collection.id}
                            title={collection.title}
                            itemsDetail={collection.items}
                        />);
                })}
            </div>
        </>
    );
};

export default ShopPage;
