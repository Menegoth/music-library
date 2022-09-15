import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavButtons from "./NavButtons";

function ArtistView() {
    const { id } = useParams();
    const [artistData, setArtistData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`;
        async function fetchData() {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setArtistData(resData.results);
        }
        fetchData();
    }, [id]);

    const albums = artistData.filter(entry => entry.collectionType === "Album");
    const renderAlbums = albums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    });

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            <NavButtons />
            {renderAlbums}
        </div>
    )
}

export default ArtistView;