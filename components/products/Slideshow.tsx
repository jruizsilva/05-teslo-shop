import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { initialData } from '@/database/products'

const slidesImages = [
  { url: `url(/products/${initialData.products[0].images[0]})` },
  { url: `url(/products/${initialData.products[0].images[1]})` }
]

interface Props {}

export function Slideshow(props: Props) {
  return (
    <>
      <Slide easing='ease' duration={7000} indicators>
        {slidesImages.map((slideImage, index) => {
          return (
            <div key={index}>
              <div
                className='flex items-center justify-center bg-cover h-96 lg:h-[450px]'
                style={{
                  backgroundImage: slideImage.url
                }}
              />
            </div>
          )
        })}
      </Slide>
    </>
  )
}
