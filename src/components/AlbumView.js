import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumView() {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([]);

    return (
        <div>
            <h2>ID: {id}</h2>
            <p>album data</p>
        </div>
    )
}

export default AlbumView;