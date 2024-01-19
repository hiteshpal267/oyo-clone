import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3  ">
          <Image
            src={
              "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            unde?
          </h2>
          <p className="text-justify my-5 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            animi aperiam veniam error sint et, quae mollitia voluptatum
            exercitationem explicabo laboriosam facilis ad ipsa ducimus
            reiciendis voluptates rerum ullam corrupti?
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold"> Facilities : </span>
            <span>Free WiFi , pet care ,swimming pool , Beaches ,Resort</span>
          </p>
          <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : 4500
            </button>
            <Link
              href={'/hotels/2'}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
