import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
    <div className="relative flex flex-col">
      <div className="absolute w-[max(380px, 8.5rem)] inset-inset aspect-1 mask-[url(/mask/backbone.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinelearning.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning" />
      </div>
      <div className="absolute inset-right aspect-1 mask-[url(/mask/football.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinelearning1.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning1" />
      </div>
      <div className="absolute inset-second aspect-1 mask-[url(/mask/patch.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinelearning2.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning2" />
      </div>
      <div className="absolute inset-right-bottom aspect-1 mask-[url(/mask/football2.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinedata.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning2" />
      </div>
      <div>

      </div>
      <div className="">
      <h1 className="text-7xl">NeuralAi</h1>
      </div>
    </div>
  </div>
  );
}
