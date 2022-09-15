import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavButtons from "./NavButtons";

function SongView() {
    const { id } = useParams();
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/track/${id}`;
        async function fetchData() {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setSongData(resData.results);
            console.log(resData.results)
        }
        fetchData();
    }, [id]);

    return (
        <div>
            {songData.length > 0 ? <h2>{songData[0].trackName}</h2> : <h2>Loading...</h2>}
            {songData.length > 0 ? <Link to={`/artist/${songData[0].artistId}`}><h3>{songData[0].artistName}</h3></Link> : <h2>Loading...</h2>}
            {songData.length > 0 ? <Link to={`/album/${songData[0].collectionId}`}><h3>{songData[0].collectionName}</h3></Link> : <h2>Loading...</h2>}
            <NavButtons />
        </div>
    )
}

export default SongView;