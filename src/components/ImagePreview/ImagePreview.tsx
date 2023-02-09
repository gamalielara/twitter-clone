import "./styles.scss";

interface ImagePreviewInterface {
  images: string[];
}
const ImagePreview: React.FC<ImagePreviewInterface> = ({ images }) => {
  if (images.length) {
    return (
      <div className="images-container">
        {images.map((image, i) => (
          <img
            key={image}
            className="image-attached"
            src={image}
            alt={`tweetimage-${i}`}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default ImagePreview;
