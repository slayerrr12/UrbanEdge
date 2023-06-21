import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.styles.scss";

const CollectionPreview = (props) => {
    const itemData = props.itemsDetail;

    return (
        <>
            <div className="collection-preview">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <div className="preview">
                    {itemData
                        .filter((item) => item.id < 5)
                        .map((item) => {
                            return (
                                <CollectionItem
                                    key={item.id}
                                    name={item.name}
                                    imageUrl={item.imageUrl}
                                    price={item.price}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default CollectionPreview;
