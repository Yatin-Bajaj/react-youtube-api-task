import classes from "./Header.module.css";

const Header = ({ searchHandler, value }) => {
    const onChangeHandler = (event) => {
        searchHandler(event.target.value);
    };
    return (
        <header className={classes["header"]}>
            <div className={classes["logo"]}>
                <h3> Movie Hub </h3>
            </div>
            <div className={classes["search-container"]}>
                <div>
                    <input
                        value={value}
                        onChange={onChangeHandler}
                        className={classes["user_input"]}
                        type="search"
                        placeholder="Search......"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
