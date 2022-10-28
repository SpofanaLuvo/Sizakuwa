import React from "react";

const ServiceCard = (props) => {
  const { imgUrl, title, info } = props.item;

  return (
    <div className="single__service__item">
      <h3 className="service__title mb-2">{title}</h3>
      <div className="service__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="service__details">
        <div className=" d-flex justify-content-between align-items-center">
          <p className="info d-flex align-items-center gap-1">{info}</p>
        </div>

        {/* <div className=" d-flex justify-content-between align-items-center">
          <span className="enroll">
            <a href="#"> Enroll Now</a>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
