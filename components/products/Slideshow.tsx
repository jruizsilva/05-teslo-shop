import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import type * as CSS from 'csstype'
// import { initialData } from '@/database/products'

const divStyle: CSS.Properties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
// const slideImages = [
//   {
//     url: `../../public/products/${initialData.products[0].images[0]}`,
//     caption: 'Slide 1'
//   },
//   {
//     url: `../../public/products/${initialData.products[0].images[1]}`,
//     caption: 'Slide 2'
//   }
// ]

interface Props {}

export function Slideshow(props: Props) {
  return (
    <>
      <Slide easing='ease' duration={7000} indicators>
        <div>
          <div
            style={{
              ...divStyle,
              backgroundImage:
                'url(../../public/products/1740176-00-A_0_2000.jpg})'
            }}
          ></div>
        </div>
      </Slide>
    </>
  )
}
