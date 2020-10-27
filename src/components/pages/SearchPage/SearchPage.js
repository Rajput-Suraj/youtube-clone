import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import ChannelRow from "../../ChannelRow/ChannelRow";
import VideoRow from "../../VideoRow/VideoRow";

const SearchPage = () => {
    let desc =
        "Stark Industries, later also known as Stark International, Stark Innovations, Stark Enterprises and Stark Resilient, is a fictional company appearing in American comic books published by Marvel Comics.";
    let dots = ".....";
    let descs = desc.concat("", dots);
    let description = descs.substring(0, 120);
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/en/d/dd/Stark_Industries_Logo.png"
                channel="Stark Industries"
                verified
                subs="660K"
                noOfVideos={382}
                description={desc}
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="660K"
                description=""
                timestamp="59 seconds ago"
                channel="Stark Industries"
                title="Let's Build a Youtube Clone"
                image="https://upload.wikimedia.org/wikipedia/en/d/dd/Stark_Industries_Logo.png"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description=""
                timestamp="59 seconds ago"
                channel="Stark Industries"
                title="Let's Build a Youtube Clone"
                image="https://upload.wikimedia.org/wikipedia/en/d/dd/Stark_Industries_Logo.png"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description=""
                timestamp="59 seconds ago"
                channel="Stark Industries"
                title="Let's Build a Youtube Clone"
                image="https://upload.wikimedia.org/wikipedia/en/d/dd/Stark_Industries_Logo.png"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description=""
                timestamp="59 seconds ago"
                channel="Stark Industries"
                title="Let's Build a Youtube Clone"
                image="https://upload.wikimedia.org/wikipedia/en/d/dd/Stark_Industries_Logo.png"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description=""
                timestamp="59 seconds ago"
                channel="Stark Industries"
                title="Let's Build a Youtube Clone"
                image="https://upload.wikimedia.org/wikipedia/en/d/dd/Stark_Industries_Logo.png"
            />
        </div>
    );
};

export default SearchPage;
