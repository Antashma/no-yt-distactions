import { useState } from 'react';

import VideoCard from './VideoCard';
import data from '../data/videoData.js';

export default function VideoGallery() {
    const [videoData, setVideoData] = useState(data)
  return (
    <section className='video-gallery'>
        {
            videoData.map(el => {
                return (
                    <VideoCard key={el.id} videoCardData = {el} />
                )
            })
        }
    </section> 
  )
}
