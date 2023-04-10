import CardItem from "./CardItem";
import convertDateFormat from "../../util/convertDateFormat";
import convertViewsCount from "../../util/convertViewCount";

const CardList = ({ youtubeData }) => {
    return (
        <>
            {youtubeData.map((item) => {
                return (
                    <CardItem
                        imageUrl={item?.snippet?.thumbnails?.high}
                        title={item?.snippet?.title}
                        description={item?.snippet?.description}
                        publishedAt={convertDateFormat(item?.snippet?.publishedAt)}
                        viewCount={convertViewsCount(item?.statistics?.viewCount)}
                        key={item.id}
                        videoUrl={`https://www.youtube.com/watch?v=${item.id}`}
                    />
                );
            })}
        </>
    );
};

export default CardList;
