import Image from "next/Image";


const myLoader = ({ src, width, quality }) => {
  return `https://links.papareact.com${src}?w=${width}&q=${quality || 75}`
}

// const myLoader = ({ src, width, quality }) => {
//   console.log('---', `https://image.shutterstock.com/${src}`)
//   return `https://image.shutterstock.com${src}?w=${width}&q=${quality}`
// }


export const Header = () => {
  return (
    <div>
      {/* Lets build facebook */}
      <h1>Image</h1>
      <Image
        // src="/shutterstock/photos/1916158645/display_1500/stock-photo-cats-kitten-playful-fluffy-domestic-pets-1916158645.jpg"
        loader={myLoader}
        src="/5me"
        width={25}
        height={25}
        quality={100}
        layout="fixed"
      />
    </div>
  );
};
