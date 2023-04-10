import { useState } from "react";
import Header from "./Header/Header";
import Youtube from "./Youtube/Youtube";

const Main = () => {
    const [searchQuery, setSearchQuery] = useState("epam");
    const searchHandler = (text) => {
        setSearchQuery(text);
    };
    return (
        <>
            <Header searchHandler={searchHandler} value={searchQuery} />
            <Youtube searchQuery={searchQuery} />
        </>
    );
};

export default Main;
