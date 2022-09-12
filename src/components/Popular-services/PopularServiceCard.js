import React from "react";

const PopularServiceCard = (props) => {
  const { imgUrl, title, was, now } = props.item;

  return (
    <div className="service">
      <div className="service_img mb-2">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="service__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2 service__text">
            {was}
          </span>

          <span className=" d-flex align-items-center gap-2 service__text">
            {now}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
