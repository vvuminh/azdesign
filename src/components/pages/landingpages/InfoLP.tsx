import { PageImages } from "../../../assets/images";

const InfoLP = () => {
  return (
    <div className="wrapper_info">
      <div className="info_ld">
        <div className="background"></div>
        <div className="text_info">
          WeRent <span>UNLOCKS</span> <br /> New Possibilities <br /> With NFT
          <br />
          <div className="button">Docs</div>
        </div>
        <div className="image_info">
          <img src={PageImages.info} alt="info" />
        </div>
      </div>
      <div className="info_two">
        <p className="title">Structure Connected With WeRent</p>
        <p className="description">
          We Buy is the first multi-chain based NFT monopoly, providing various
          NFT products and services.
        </p>
      </div>
    </div>
  );
};

export default InfoLP;
