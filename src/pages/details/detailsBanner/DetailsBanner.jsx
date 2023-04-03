import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

import './DetailsBanner.css'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import CircleRating from '../../../components/circleRating/CircleRating'
import Img from '../../../components/lazyLoadingImage/Img'
import PosterFallback from "../../../assets/no-poster.png"
import { PlayIcon } from '../Playbtn'
import VideoPopup from '../../../components/videoPopup/VideoPopup'



const DetailsBanner = ({ video, crew }) => {
    const [show, setshow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`)

    const { url } = useSelector((state) => state.home);

    const director = crew?.filter((f) => f.job === "Director")
    const writer = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer")

    console.log(director)


    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`
    }
    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <>

                            {/* <div className='backdrop-img'>
                                <Img src={url.backdrop + data?.backdrop_path} />
                            </div>
                       */}


                            <div className='detailsBanner__content'>
                                <div className='detailsBanner__left'>
                                    {data.poster_path ? (
                                        <div className='detailsBanner__posterImg'>
                                            <img src={url.backdrop + data.poster_path}  alt={data?.name}/></div>
                                    ) : (
                                        <div className='detailsBanner__posterImg'>
                                            <Img className='detailsBanner__posterImg'
                                                src={PosterFallback} /></div>
                                    )}
                                </div>
                                <div className='detailsBanner__right'>
                                    <div className='detailBanner__title'>
                                        {`${data.name || data.title}(${dayjs(data?.release_data).format("YYYY")})`}
                                    </div>
                                    <div className='detailBanner__subtitle'>
                                        {data.tagline}
                                    </div>
                                    <div className='detailsBanner__row'>
                                        <div className='row__circularRating'>
                                            <CircleRating rating={data.vote_average.toFixed(1)} />
                                        </div>
                                        <div className='playbtn'
                                        onClick={()=>{
                                            setshow(true)
                                            setVideoId(video.key)}}>
                                            <PlayIcon />
                                            <span className='text'>Watch Trailer</span>
                                        </div>
                                    </div>
                                    <div className='overview'>
                                        <div className='overview__heading'>Overview</div>
                                        <div className='description'>
                                            {data.overview}
                                        </div>
                                    </div>
                                    <div className='info'>
                                        {data.status && (
                                            <div className='infoItem'>
                                                <span className='infoText bold'>Status:{" "}</span>
                                                <span className="infoText">{data.status}</span>
                                            </div>
                                        )}
                                        {data.release_date && (
                                            <div className='infoItem'>
                                                <span className='infoText bold'>Release Date:{" "}</span>
                                                <span className="infoText">{dayjs(data.release_date).format("MMM D, YYYY")}</span>
                                            </div>
                                        )}
                                        {data.runtime && (
                                            <div className='infoItem'>
                                                <span className='infoText bold'>Runtime:{" "}</span>
                                                <span className="infoText">{toHoursAndMinutes(data.runtime)}</span>
                                            </div>
                                        )}
                                    </div>
                                    {director?.length > 0 && (
                                    <div className='info'>
                                        <span className='infoText bold'>Director: {" "}</span>
                                        <span  className='infoText'>
                                            {director.map((d, i) =>{ return(
                                                <span key={i}>
                                                    {d.name}
                                                    {director?.length -1 !== i && ", "}
                                                </span>)
                                            })}
                                        </span>
                                    </div>)}
                                    {writer?.length > 0 && (
                                    <div className='info'>
                                        <span className='infoText bold'>Writer: {" "}</span>
                                        <span  className='infoText'>
                                            {writer.map((d, i) =>{ return(
                                                <span key={i}>
                                                    {d.name}
                                                    {writer?.length -1 !== i && ", "}
                                                </span>)
                                            })}
                                        </span>
                                    </div>)}
                                    {data?.created_by?.length > 0 && (
                                    <div className='info'>
                                        <span className='infoText bold'>Creater: {" "}</span>
                                        <span  className='infoText'>
                                            {data?.created_by.map((d, i) =>{ return(
                                                <span key={i}>
                                                    {d.name}
                                                    {data?.created_by?.length -1 !== i && ", "}
                                                </span>)
                                            })}
                                        </span>
                                    </div>)}

                                </div>
                            </div>

                            <VideoPopup 
                            show={show}
                            setshow={setshow}
                            videoId={videoId}
                            setVideoId={setVideoId}
                            />
                        </>
                    )

                    }
                </>
            ) : (
                <div className='detailsBannerSkeleton'>
                    <ContentWrapper>
                        <div className='left skeleton'>
                            <div className='right'>
                                <div className='row skeleton'></div>
                                <div className='row skeleton'></div>
                                <div className='row skeleton'></div>
                                <div className='row skeleton'></div>
                                <div className='row skeleton'></div>
                                <div className='row skeleton'></div>
                                <div className='row skeleton'></div>
                            </div>
                        </div>
                    </ContentWrapper>
                </div>
            )}

        </div>
    )
}

export default DetailsBanner
