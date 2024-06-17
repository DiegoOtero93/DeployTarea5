import React from "react";

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}
        alt={photo.title}
      />
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
