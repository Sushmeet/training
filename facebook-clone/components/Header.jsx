import Image from 'next/Image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

import { HeaderIcon } from './HeaderIcon';

const myLoader = ({ src, width, quality }) => {
  return `https://links.papareact.com${src}?w=${width}&q=${quality || 75}`;
};

// const myLoader = ({ src, width, quality }) => {
//   console.log('---', `https://image.shutterstock.com/${src}`)
//   return `https://image.shutterstock.com${src}?w=${width}&q=${quality}`
// }

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md text-gray-500">
      {/* Left header */}
      <div className="flex items-center">
        <Image
          // src="/shutterstock/photos/1916158645/display_1500/stock-photo-cats-kitten-playful-fluffy-domestic-pets-1916158645.jpg"
          loader={myLoader}
          src="/5me"
          width={40}
          height={40}
          quality={100}
          layout="fixed"
        />
        <div className="flex ml-2 text-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 mr-2 text-gray-600" />
          <input
            className="hidden sm:inline-flex items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>

      {/* center header */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={HomeIcon} />
        </div>
      </div>

      {/* right header */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className=" whitespace-nowrap font-semibold pr-3">Sushi Man</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};
