export default function Contact() {
  return (
    <div className="relative">
      <div className="absolute w-full top-20 text-background font-silkscreen">
        <div className="absolute left-1/4">
          <h1 className={`text-7xl`}>Contact</h1>
        </div>

        <div className="absolute top-40 left-1/4 max-w-4x">
          <h2>This is for Contact</h2>
          <div className="border-2 border-dashed border-black p-4 flex justify-center w-3xl">
            <div className="flex flex-col items-center w-full gap-4">
              <h2 className="text-2xl">Contact Me</h2>
              <div className="w-full flex flex-col items-center gap-4">
                <InputLabel label="Name" />
                <InputLabel label="email" />
                <InputLabel label="Message" input={false} />
              </div>

              <button className="px-4 py-2 rounded-lg border border-dashed cursor-pointer hover:bg-yellow-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputLabel({
  label,
  input = true
}: {
  label: string;
  input? : boolean
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      {input ? (<input
        id={label}
        type="text"
        className="px-4 py-2 rounded-xl border border-dashed w-xl focus:outline-none"
      />) : (
        <textarea className="px-4 py-2 rounded-xl border border-dashed w-xl focus:outline-none" />
      )}
    </div>
  );
}
