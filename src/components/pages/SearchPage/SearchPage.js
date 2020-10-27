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
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                timestamp="59 seconds ago"
                channel="Dev World"
                title="Start with Web Development"
                image="https://images.unsplash.com/photo-1543185377-99cd16011803?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                timestamp="59 seconds ago"
                channel="Youtube"
                title="Trending Videos on Youtube"
                image="https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                timestamp="59 seconds ago"
                channel="Gamers World"
                title="Latest games in 2020"
                image="https://images.unsplash.com/photo-1567606404839-dea8cec4d278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                timestamp="59 seconds ago"
                channel="Windows"
                title="Customize your windows desktop"
                image="https://images.unsplash.com/photo-1542039375-28138150cc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                timestamp="59 seconds ago"
                channel="Technical Stack"
                title="Top 10 IOS Apps"
                image="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />

            <VideoRow
                views="1.4M"
                subs="660K"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                timestamp="59 seconds ago"
                channel="Dark Industries"
                title="Become a Web Developer in 1hr"
                image="https://images.unsplash.com/photo-1563986768817-257bf91c5753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    );
};

export default SearchPage;
