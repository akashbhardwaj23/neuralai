import Image from "next/image";

export default function Lab() {
  return (
    <div className="relative font-silkscreen">
      <div className="absolute w-full top-20 text-background">
        <div className="absolute left-1/4">
          <h1 className={`text-7xl`}>Lab</h1>
          {/* <h2 className="text-4xl">What are we Working On-</h2> */}
        </div>
        <div className="absolute top-40 left-1/5 max-w-4xl">
            <h3 className="text-2xl">* In The Lab: Unveiling Predictive Health</h3>
            <div className="grid grid-cols-2 gap-2 border-2 border-dashed border-black p-4">
                <p className="col-span-1">At the core of Neural AI lies a commitment to cutting-edge research. Our neck-worn device is the result of extensive development, housing a suite of precise sensors that gather continuous health metrics. What truly sets it apart is our Neural AI framework – a sophisticated collection of algorithms designed to understand complex patterns in your physiological data. This enables us to not only detect current health status but also to interpret subtle changes and trends, paving the way for proactive wellness management</p>
                <div className="col-span-1 flex justify-center items-center w-full">
                <Image src={"/assets/neck.png"} width={400} height={400} className="w-80 h-80 object-cover" alt="neck" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
