function Image({ imagePath, altText }) {
  return <img className="image" src={imagePath} alt={altText} />;
}

export default Image;
