import React, { useState, useEffect } from "react";
import "./gallery.css";

const useStyle = () => ({
  container: {
    padding: "30px 60px",
    background: "#272727",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "10vw",
    color: "#B29051",
  },
  gallery: {
    marginTop: "20px",
    background: "#B29051",
    padding: "30px",
    borderRadius: "20px",
  },
  images: {
    maxHeight: "60vh",
    overflowY: "scroll",
  },
  previewImage: {
    width: "100%",
  },
});

export default function Gallery() {
  const styles = useStyle();
  const [selected, setSelected] = useState(1);
  const [images, setImages] = useState([
    { src: "assets/gallery-image.png", selected: true },
    { src: "assets/gallery-image.png", selected: false },
    { src: "assets/gallery-image.png", selected: false },
    { src: "assets/gallery-image.png", selected: false },
    { src: "assets/gallery-image.png", selected: false },
    { src: "assets/gallery-image.png", selected: false },
    { src: "assets/gallery-image.png", selected: false },
    { src: "assets/gallery-image.png", selected: false },
  ]);

  function handleImageClick(e) {
    setSelected(e.target.id);
    setImages(
      images.map((image, index) => ({
        src: image.src,
        selected: e.target.id == index + 1,
      }))
    );
  }

  return (
    <div className="d-none d-md-block" style={styles.container}>
      <h1 style={styles.header}>Photo Gallery</h1>

      {/* Gallery */}
      <div style={styles.gallery} className="row">
        {/* Images */}
        <div style={styles.images} className="col-5">
          <div className="row">
            <div className="col-6">
              <img
                id={1}
                className={images[0].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[0].src}
                width={420}
              />
            </div>
            <div className="col-6">
              <img
                id={2}
                className={images[1].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[1].src}
                width={420}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                id={3}
                className={images[2].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[2].src}
                width={420}
              />
            </div>
            <div className="col-6">
              <img
                id={4}
                className={images[3].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[3].src}
                width={420}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                id={5}
                className={images[4].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[4].src}
                width={420}
              />
            </div>
            <div className="col-6">
              <img
                id={6}
                className={images[5].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[5].src}
                width={420}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                id={7}
                className={images[6].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[6].src}
                width={420}
              />
            </div>
            <div className="col-6">
              <img
                id={8}
                className={images[7].selected ? "" : "opacity-50"}
                onClick={handleImageClick}
                src={images[7].src}
                width={420}
              />
            </div>
          </div>
        </div>
        {/* Preview */}
        <div className="col-7">
          <img style={styles.previewImage} src={images[selected - 1].src} />
        </div>
      </div>
    </div>
  );
}
