import React, { useContext, useEffect, useState } from 'react';
import './NewsDetails.css'
import { CircularProgress, TextField } from '@material-ui/core';
import { isImage, isVideo } from '../../helpers/functions';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { newsContext } from '../../contexts/NewsContext';
import NavBar from '../NavBar/NavBar';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ReactVideo } from "reactjs-media";
import videoPoster from '../../assets/images/video_poster.png'

const NewsDetails = (props) => {

    const { getNewsDetails, newsDetails } = useContext(newsContext);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getNewsDetails(props.match.params.id);
    }, []);

    useEffect(() => {
        if (newsDetails?.media) {
            setImages(newsDetails.media.filter(elem => isImage(elem)));
            setVideos(newsDetails.media.filter(elem => isVideo(elem)));
        }
        console.log('Updating images');
    }, [newsDetails]);


    return (
        <>
            <NavBar />
            <div className="news-details__container">
                {
                    newsDetails ? (
                        <>
                            <span className="news-details__title">{newsDetails.title}</span>
                            <span className="news-details__date"><AccessTimeIcon style={{ fontSize: 30, color: 'orange', marginRight: '2px' }} /> {newsDetails.date}</span>
                            <pre dangerouslySetInnerHTML={{ __html: newsDetails.description }} className="news-details__description"></pre>
                            {
                                images ?
                                    <Carousel autoPlay='true' dynamicHeight="true">
                                        {
                                            images.map(elem => (
                                                <div key={elem}>
                                                    <img src={elem} />
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                    : ''
                            }
                            <span className="news-details__title">{newsDetails.subTitle}</span>
                            <pre dangerouslySetInnerHTML={{ __html: newsDetails.additionalDescription }} className="news-details__description"></pre>
                            {
                                videos &&
                                videos.map(video => (
                                    <div key={video} style={{ marginTop: '4vh' }}>
                                        <ReactVideo
                                            src={video}
                                            primaryColor="transparent"
                                            poster={videoPoster}
                                        />
                                    </div>
                                ))
                            }
                        </>
                    )
                        :
                        (
                            <CircularProgress />
                        )
                }
            </div>
        </>
    );
};

export default NewsDetails;