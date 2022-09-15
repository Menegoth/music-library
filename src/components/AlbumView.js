import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavButtons from "./NavButtons";

function AlbumView() {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`;
        async function fetchData() {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setAlbumData(resData.results);
            console.log(resData.results)
        }
        fetchData();
    }, [id]);

    const songs = albumData.filter(entry => entry.wrapperType === "track");
    const renderSongs = songs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    });

    return (
        <div>
            {albumData.length > 0 ? <Link to={`/artist/${albumData[0].artistId}`}><h2>{albumData[0].artistName}</h2></Link> : <h2>Loading...</h2>}
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>Loading...</h2>}
            <NavButtons />
            {renderSongs}
        </div>
    )
}

export default AlbumView;