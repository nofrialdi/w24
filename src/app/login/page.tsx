import Image from "next/image";
import bacgkroundImg from "../../../public/assets/backgroundImg-auth.jpg";

export default function page() {
  return (
    <section className="min-h-screen flex bg-[#CFD4CB]">
      <div className="flex flex-col justify-between p-8 sm:w-2/3 sm:p-12 lg:max-w-lg">
        <div className="flex flex-col gap-20">
          <div>
            <span className="text-3xl font-bold text-[#203D59]">MARKILANG</span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold text-[#203D59] sm:text-5xl">Welcome</h2>
            <p>Rare and valuable collectibles awaits you</p>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <button className="w-full px-4 py-3 bg-gray-200 rounded-md">Login with Google</button>
            <button className="w-full px-4 py-3 bg-gray-200 rounded-md">Login with Github</button>
            <p className="text-sm text-gray-500">
              By logging in, you have agreed to MARKILANG
              <strong> Privacy Policy</strong> and
              <strong> Terms of Service</strong>
            </p>
          </div>
        </div>

        <div className="justify-self-end text-gray-500">
          <span>© MARKILANG 2023</span>
        </div>
      </div>

      <div className="hidden items-center relative sm:flex sm:w-2/3 lg:w-full">
        <Image src={bacgkroundImg} alt="illustration one" className="h-full object-cover" />
        <div className="w-full h-full absolute bg-gradient-to-r from-[#203D59]"></div>
      </div>
    </section>
  );
}
