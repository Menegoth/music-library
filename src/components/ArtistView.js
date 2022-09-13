import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtistView() {
    const { id } = useParams();
    const [artistData, setArtistData] = useState([]);

    return (
        <div>
            <h2>ID: {id}</h2>
            <p>artist data</p>
        </div>
    )
}

export default ArtistView;