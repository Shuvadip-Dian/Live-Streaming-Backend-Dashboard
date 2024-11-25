import React from 'react'

export default function Video(props) {
  const video = props.video;
  return (
    <>
      <div className="card card-compact bg-base-100 w-90 shadow-xl m-3">
        <figure>
          <img
            src={video?.src}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{video?.title}</h2>
          <p>{video?.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
