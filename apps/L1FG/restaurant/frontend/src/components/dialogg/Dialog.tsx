'use client';
import { Close } from '../svg/Close';
import Link from 'next/link';
const Dialog = () => {
  return (
    <div className="max-w-full flex flex-col gap-10 items-center justify-center p-4" data-testid="order-page">
      <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full max-w-[90%] min-w-[300px] p-4 sm:p-6">
        <div className="flex justify-between w-full">
          <h1 className="mt-2 sm:mt-5 text-lg font-bold">Утас</h1>
          <Link href={'/'}>
            <button className="mt-1 sm:mt-3">
              <Close />
            </button>
          </Link>
        </div>
        <div className="mt-4 flex flex-col w-full">
          <input type="tel" placeholder="0000-0000" pattern="[0-9]{4}-[0-9]{4}" className="border border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="w-full  h-10 bg-orange-900 text-white rounded-lg mt-4 hover:bg-orange-800">Шинэчлэх</button>
        </div>
      </div>

      <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full max-w-[90%] min-w-[300px] p-4 sm:p-6">
        <div className="flex justify-between w-full">
          <h1 className="mt-2 sm:mt-5 text-lg font-bold">Имэйл хаяг</h1>
          <Link href={'/'}>
            <button className="mt-1 sm:mt-3">
              <Close />
            </button>
          </Link>
        </div>
        <div className="mt-4 flex flex-col w-full">
          <input type="email" placeholder="Шинэчлэх хаяг" className="border border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="w-full  h-10 bg-orange-900 text-white rounded-lg mt-4 hover:bg-orange-800">Шинэчлэх</button>
        </div>
      </div>
      <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full max-w-[90%] min-w-[300px] p-4 sm:p-6">
        <div className="flex justify-between w-full">
          <h1 className="mt-2 sm:mt-5 text-lg font-bold">Нууц үг</h1>
          <Link href={'/'}>
            <button className="mt-1 sm:mt-3">
              <Close />
            </button>
          </Link>
        </div>
        <div className="mt-4 flex flex-col w-full">
          <input type="password" placeholder="Хуучин нууц үг" className="border border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Шинэ нууц үг" className="mt-4 border border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Шинэ нууц үг давтах" className="mt-4 border border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="w-full  h-10 bg-orange-900 text-white rounded-lg mt-4 hover:bg-orange-800">Шинэчлэх</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
