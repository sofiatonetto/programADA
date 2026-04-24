import PropTypes from "prop-types";
import "./EmptyContainer.css";

const EmptyContainer = ({ className = "" }) => {
  return (
    <section className={`empty-container ${className}`}>
      <img
        className="empty-container-child"
        loading="lazy"
        alt=""
        src="/Rectangle-1@2x.png"
      />
      <h1 className="nossa-histria2">{`Nossa história `}</h1>
      <div className="empty-container-inner">
        <div className="contato-parent">
          <h2 className="contato">Contato</h2>
          <h2 className="galeria2">Galeria</h2>
          <h2 className="edies2">Edições</h2>
        </div>
      </div>
    </section>
  );
};

EmptyContainer.propTypes = {
  className: PropTypes.string,
};

export default EmptyContainer;
