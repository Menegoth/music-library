import { useState } from "react";
import { Link } from "react-router-dom";

function GalleryItem(props) {
    //state variable
    let [view, setView] = useState(false);

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
    }
    

    function simpleView() {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    function detailView() {
        return (
            <div style={detailStyle}>
                <h2>
                    <Link to={`/song/${props.item.trackId}`}>
                        {props.item.trackName}
                    </Link>
                </h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)} style={{"display": "inline-block"}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem;