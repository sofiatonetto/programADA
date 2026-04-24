import PropTypes from "prop-types";
import "./GalleryShowcase.css";

const GalleryShowcase = ({ className = "" }) => {
  return (
    <section className={`gallery-showcase ${className}`}>
      <div className="gallery-images-parent">
        <img
          className="gallery-images-icon"
          loading="lazy"
          alt=""
          src="/Gallery-Images@2x.png"
        />
        <img
          className="gallery-images-icon"
          loading="lazy"
          alt=""
          src="/Gallery-Images1@2x.png"
        />
        <img
          className="gallery-images-icon"
          loading="lazy"
          alt=""
          src="/Gallery-Images2@2x.png"
        />
        <img
          className="gallery-images-icon"
          loading="lazy"
          alt=""
          src="/Gallery-Images3@2x.png"
        />
        <img
          className="gallery-images-icon"
          loading="lazy"
          alt=""
          src="/Gallery-Images4@2x.png"
        />
      </div>
      <div className="image-carousel">
        <div className="carousel-images-parent">
          <img
            className="carousel-images-icon"
            loading="lazy"
            alt=""
            src="/Carousel-Images@2x.png"
          />
          <img
            className="carousel-images-icon"
            loading="lazy"
            alt=""
            src="/Carousel-Images1@2x.png"
          />
          <img
            className="carousel-images-icon"
            loading="lazy"
            alt=""
            src="/Carousel-Images2@2x.png"
          />
          <img
            className="carousel-images-icon"
            loading="lazy"
            alt=""
            src="/Carousel-Images3@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

GalleryShowcase.propTypes = {
  className: PropTypes.string,
};

export default GalleryShowcase;
