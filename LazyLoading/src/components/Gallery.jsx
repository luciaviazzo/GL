import { lazy, Suspense } from 'react';
import { Loader } from './Loader';

const IMAGES = [
  {
    id: 1,
    src: 'src/assets/images/img1.webp',
  },
  {
    id: 2,
    src: 'src/assets/images/img2.webp',
  },
  {
    id: 3,
    src: 'src/assets/images/img3.webp',
  },
  {
    id: 4,
    src: 'src/assets/images/img4.webp',
  },
];
const randomNumber = () => Math.floor(Math.random() * 2300) + 200

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function Gallery() {
  return (
    <>
      <h2>Gallery</h2>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {IMAGES.map((image) => {
          const Image = lazy(() => timeout(randomNumber()).then(() => import('./Image')));
          return (
            <Suspense key={image.id} fallback={<Loader />} >
              <Image src={image.src} />
            </Suspense>)
        })}
      </section>
    </>
  );
}

export default Gallery;
