import Amazon from "../imgs/amazon.jpg";

export default function Learn() {
  return (
    <div className="my-10 mx-40 p-10 flex flex-col lg:flex-row bg-bgBox shadow-md w-full">
      <img className="w-full lg:w-1/2 rounded-l-md" src={Amazon} alt="" />
      <div className="w-full lg:w-1/2 h-auto flex flex-col text-center items-center bg-bgBox2 rounded-r-md">
        <div className="flex flex-col w-3/4">
          <h2 className="py-4 font-bold text-2xl sm:text-4xl md:text-5xl xl:text-6xl rounded-md">
            Saving the Amazon
          </h2>
          <h3 className="font-medium text-base sm:text-lg md:text-xl xl:text-3xl">
            The Amazon is the world’s largest rainforest spanning 6.9 million
            square kilometres and covering around 40% of the South American
            continent.
          </h3>
          <p className="pb-2 text-sm sm:text-base md:text-base xl:text-2xl font-normal">
            However, nearly a third of global tropical deforestation occurs in
            Brazil’s Amazon, with 1.5 million hectares lost each year. The first
            step in making a difference is understanding the issue.
          </p>
        </div>
        <div className="w-3/4">
          <button className="p-3 sm:p-4 mt-2 mb-4 xl:mb-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-bgBlue font-semibold text-white rounded-xl hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
