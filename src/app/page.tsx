import ImageComponent from "@/components/images";

export default function Home() {
  return (
    <div
      className="w-full h-full min-h-screen flex justify-center items-center"
    >
      <div className="relative flex flex-col">
        <ImageComponent
          className=" w-[max(380px, 8.5rem)] inset-inset"
          src="/assets/machinelearning.png"
          srcAlt="machinelearning"
          maskSrc="/mask/backbone.svg"
        />
        {/* <div className="image opacity-0 absolute aspect-1 mask-[url(/mask/backbone.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinelearning.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning" />
      </div> */}
        <ImageComponent
          className="inset-right"
          src="/assets/machinelearning1.png"
          srcAlt="machinelearning1"
          maskSrc="/mask/football.svg"
        />
        {/* <div className="image opacity-0 absolute inset-right aspect-1 mask-[url(/mask/football.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinelearning1.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning1" />
      </div> */}
        <ImageComponent
          className="inset-second"
          src="/assets/machinelearning2.png"
          srcAlt="machinelearning2"
          maskSrc="/mask/patch.svg"
        />
        {/* <div className="image opacity-0 absolute inset-second aspect-1 mask-[url(/mask/patch.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinelearning2.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning2" />
      </div> */}
        <ImageComponent
          className="inset-right-bottom"
          src="/assets/machinedata.png"
          srcAlt="machinelearning3"
          maskSrc="/mask/football2.svg"
        />
        {/* <div className="image opacity-0 absolute inset-right-bottom aspect-1 mask-[url(/mask/football2.svg)] mask-no-repeat drop-shadow-2xl">
        <Image src={'/assets/machinedata.png'} width={400} height={400} className="w-80 h-80 object-cover" alt="machinelearning3" />
      </div> */}
        <div className="">
          <h1 className="text-7xl">NeuralAi</h1>
        </div>
      </div>
    </div>
  );
}
