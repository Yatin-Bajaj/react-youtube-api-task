function convertDateFormat(currentDate = new Date()) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(currentDate).toLocaleDateString("en-US", options);
}

export default convertDateFormat;
