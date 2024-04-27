import logoImgSrc from "/src/assets/images/mylogo.jpg";

function LandingImg() {
  return (
    <div className="landing__img">
      <img src={logoImgSrc} alt="Bassel logo" decoding="async" />
    </div>
  );
}

export default LandingImg;
