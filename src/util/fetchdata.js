const fetchData = async (searchQuery) => {
    searchQuery = searchQuery.length > 0 ? searchQuery : "epam";
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_YOUTUBE_DATA_URL}${searchQuery}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            const videoIds = data.items.map((item) => item.id.videoId).join(",");
            const newResponse = await fetch(
                `${process.env.REACT_APP_YOUTUBE_STATS_URL}${videoIds}&part=snippet,statistics`
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
