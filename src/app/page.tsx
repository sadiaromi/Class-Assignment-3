import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col lg:flex-row items-center px-4">
      {/* Left Section */}
      <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2 px-4 lg:px-8 mt-10 lg:-mt-16">
        <h1 className="font-bold text-3xl lg:text-[44px] text-center lg:text-left">
          Welcome To Our Website
        </h1>
        <p className="font-normal text-base lg:text-[24px] text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sapiente esse
          veritatis quam consectetur vero cupiditate inventore, fuga maxime non incidunt, illum
          nam cumque eveniet aut eius dignissimos pariatur error.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="text-white text-lg bg-black w-[180px] lg:w-[237px] h-[50px] lg:h-[55px] rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <Image
          src="/image.jpg"
          alt="Website image"
          width={300}
          height={280}
          className="w-[90%] lg:w-[502px] h-auto"
        />
      </div>
    </div>
  );
}
