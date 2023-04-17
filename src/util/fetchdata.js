import { defaultSearchQuery } from "../components/constData";

const fetchData = async (searchQuery) => {
    searchQuery = searchQuery.length > 0 ? searchQuery : defaultSearchQuery;

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_YOUTUBE_DATA_URL}
                ${process.env.REACT_APP_YOUTUBE_API_KEY}
                ${process.env.REACT_APP_YOUTUBE_DATA_QueryParam}
                ${searchQuery}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            const videoIds = data.items.map((item) => item.id.videoId).join(",");
            const newResponse = await fetch(
                `${process.env.REACT_APP_YOUTUBE_STATS_URL}
                ${process.env.REACT_APP_YOUTUBE_API_KEY}
                &id=${videoIds}${process.env.REACT_APP_YOUTUBE_STATS_QueryParam}`
            );
            if (!newResponse.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const dataWithStats = await newResponse.json();
            resolve(dataWithStats);
        } catch (error) {
            reject(error);
        }
    });
};

export default fetchData;
