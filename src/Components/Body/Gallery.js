import React, { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import classes from "./gallery.module.css";

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
  },
  previewImage: {
    width: "100%",
  },
});

export default function Gallery() {
  const styles = useStyle();
  const [selected, setSelected] = useState(1);
  const [images, setImages] = useState([
    "assets/gallery-image.png",
    "assets/gallery-image.png",
    "assets/gallery-image.png",
    "assets/gallery-image.png",
    "assets/gallery-image.png",
    "assets/gallery-image.png",
    "assets/gallery-image.png",
    "assets/gallery-image.png",
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
          <Scrollbar style={{ width: "100%", height: "100%" }}>
            <div className="pr-3">
              <div className="row">
                {images.map((image, index) => (
                  <div className="col-6">
                    <img
                      className={`${classes.image} ${
                        selected === index ? "" : "opacity-50"
                      }`}
                      onClick={(e) => setSelected(index)}
                      src={image}
                      width={420}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Scrollbar>
        </div>
        {/* Preview */}
        <div className="col-7">
          <img style={styles.previewImage} src={images[selected]} />
        </div>
      </div>
    </div>
  );
}
