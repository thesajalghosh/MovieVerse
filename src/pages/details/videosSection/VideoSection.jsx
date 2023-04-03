import React, { useState } from 'react'
import './VideoSection.css'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import VideoPopup from '../../../components/videoPopup/VideoPopup'
import { PlayIcon } from '../Playbtn'


const VideoSection = ({data, loading}) => {

    const [show, setshow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    console.log(show)

    const loadingSkeleton = () =>{
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        )
    }

  return (
    <div className='videoSection'>
    <div className='sectionHeading'>Official Videos</div>
    <ContentWrapper>
       
        
        {!loading ? (
            <div className='videos'>
                {
                    data?.results?.map((video) =>{
                        return(
                            <div key={video.id} className='videoItem'
                            onClick={() =>{
                            setVideoId(video.key)
                            setshow(true)
                            
                            }}>
                                <div className='videoThumbnail'>
                                    <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt={video.name}/>
                                    <PlayIcon/>
                                </div>
                                <div className='videoTitle'>{video.name}</div>
                            </div>
                        )
                    })
                }
               
            </div>
            
            
            ) : (
                <div className='videoSkeleton'>
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                    {loadingSkeleton()}
                </div>
            )}
           
    </ContentWrapper>

    <VideoPopup
                show={show}
                setshow={setshow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
      
    </div>
  )
}

export default VideoSection
