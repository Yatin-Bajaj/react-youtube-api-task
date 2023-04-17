import React, { Component } from "react";
import CardList from "../UI/CardList";
import classes from "./Youtube.module.css";
import fetchData from "../../util/fetchdata";
import debounce from "../../util/debounce";

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtubeData: [],
            loading: false,
        };
        this.getYoutubeData = debounce(this.getYoutubeData.bind(this), 1000);
    }

    async getYoutubeData(searchQuery) {
        const data = await fetchData(searchQuery);
        this.setState(() => {
            return {
                youtubeData: data.items,
                loading: false,
            };
        });
    }

    async componentDidMount() {
        this.setState((prevState) => {
            return {
                ...prevState,
                loading: true,
            };
        });
        this.getYoutubeData(this.props.searchQuery);
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.searchQuery !== prevProps.searchQuery) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    loading: true,
                };
            });
            this.getYoutubeData(this.props.searchQuery);
        }
    }

    render() {
        return (
            <div className={classes["card_container"]}>
                {this.state.loading ? (
                    <img
                        width={200}
                        src="https://www.grandecoreia.com.br/assets/img/ajax-loader_big.gif"
                        alt="loader"
                    />
                ) : (
                    <CardList youtubeData={this.state.youtubeData} />
                )}
            </div>
        );
    }
}

export default Youtube;
