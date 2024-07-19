function Image({ src }) {

  return (
    <img
      src={src}
      alt="Imagen"
      style={{ width: '200px', height: '200px' }}
      // data-src={src}
    />
  );
}

export default Image
