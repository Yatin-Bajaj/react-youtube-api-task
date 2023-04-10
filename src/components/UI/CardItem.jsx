import classes from "./Card.module.css";

const Card = ({
    imageUrl,
    title,
    description,
    author,
    publishedAt,
    viewCount,
    videoUrl,
}) => {
    return (
        <div className={classes.card}>
            <div>
                <figure className={classes["card_figure"]}>
                    <img src={imageUrl.url} alt={"movie"} width={200} height={200} />
                </figure>
            </div>
            <div className={classes["card_body"]}>
                <h3 className={classes["movie_title"]}>{title}</h3>
                <div className="movie_info">
                    <div className={classes["description"]}>
                        Description : <span>{description}</span>
                    </div>
                    <div className={classes["author"]}>
                        Author : <span>{author}</span>
                    </div>
                    <div className={classes["publish_date"]}>
                        Published At : <span>{publishedAt}</span>
                    </div>
                    <div className={classes["view_count"]}>
                        View Count : <span>{viewCount}</span>
                    </div>
                </div>
            </div>
            <div className={classes["link"]}>
                <a
                    href={videoUrl}
                    className={classes["link_btn"]}
                    target="_blank"
                    rel="noreferrer"
                >
                    Link
                </a>
            </div>
        </div>
    );
};

export default Card;
