import { useState } from "react";
import Header from "./Header/Header";
import Youtube from "./Youtube/Youtube";
import { defaultSearchQuery } from "./constData";

const Main = () => {
    const [searchQuery, setSearchQuery] = useState(defaultSearchQuery);
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
