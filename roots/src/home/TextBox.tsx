export default function TextBox({
  title = "",
  top = "",
  middle = "",
  bottom = "",
  float = "",
  border = "",
  id = "",
}) {
  return (
    <div className="mx-40 p-10 bg-bgBox shadow-md w-full" id={id}>
      <h2
        className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold border-b w-fit p-2 sm:p-5 mx-2 sm:mx-5
          ${border === "right" ? "border-l" : "border-r"}
         border-black 
         ${float === "right" ? "float-right" : "float-left"}`}
      >
        {title}
      </h2>
      <div className="text-start text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
        <p className="font-medium">
          {top} <br />
          <span className="py-2 font-extralight">
            {middle} <br />
          </span>
          {bottom}
        </p>
      </div>
    </div>
  );
}
