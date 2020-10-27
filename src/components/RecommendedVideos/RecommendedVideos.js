import React from "react";
import VideoCard from "../VideoCard.js/VideoCard";
import "./RecommendedVideos.css";

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended Videos</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Start with Web Development"
                    image="https://images.unsplash.com/photo-1543185377-99cd16011803?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    channel="Dev World"
                />
                <VideoCard
                    title="Trending Videos on Youtube"
                    image="https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    channel="Youtube"
                />
                <VideoCard
                    title="Latest games in 2020"
                    image="https://images.unsplash.com/photo-1567606404839-dea8cec4d278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    channel="Gamers World"
                />
                <VideoCard
                    title="Customize your windows desktop"
                    image="https://images.unsplash.com/photo-1542039375-28138150cc31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    channel="Windows"
                />
                <VideoCard
                    title="Top 10 IOS Apps"
                    image="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    channel="Technical Stack"
                />
                <VideoCard
                    title="Become a Web Developer in 1hr"
                    image="https://images.unsplash.com/photo-1563986768817-257bf91c5753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://images.unsplash.com/photo-1554774853-b415df9eeb92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    channel="Dark Industries"
                />
            </div>
        </div>
    );
};

export default RecommendedVideos;
