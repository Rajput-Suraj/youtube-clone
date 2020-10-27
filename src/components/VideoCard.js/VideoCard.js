import React from "react";
import "./VideoCard.css";

const VideoCard = ({
    image,
    title,
    channel,
    views,
    timestamp,
    channelImage,
}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="videoCard__info">
                <img
                    className="videoCard__avatar"
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    alt="avatar"
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
