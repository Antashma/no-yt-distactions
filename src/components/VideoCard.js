import * as img from '../data/imgData.js'

function VideoCard({ videoCardData }) {

  return (
    <div className='video-card'>
        <a class="thumb-link" href={videoCardData.videoUrl}  target='_blank'><img className='video-thumb' src={img[videoCardData.videoThumb]} /></a>
        <h2><a href={videoCardData.videoUrl} target='_blank'>{videoCardData.videoName }</a> </h2>
        <div className='channel-info'>
            <a href={videoCardData.channelURL} target='_blank'><img className='channel-thumb' src={img[videoCardData.channelThumb]} /></a>
            <p>
              <a href={videoCardData.channelURL} target='_blank'>{ videoCardData.channelName }</a> 
              {videoCardData.checked ? '✔' : null}
            </p>
        </div>
    </div>
  )
};

export default VideoCard;