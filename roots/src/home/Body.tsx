import TextBox from "./TextBox";
import Learn from "./Learn";

function Body() {
  return (
    <div className="z-20 relative w-full flex flex-col items-center">
      <div className="w-10/12 flex flex-col items-center">
        <TextBox
          id="about"
          title="WHAT WE DO"
          top="Our mission is to protect the Amazon rainforest by planting indigenous trees, volunteering with conservation groups, supporting indigenous communities, and much more."
          middle="Restoring deforested areas by planting native trees, chosen with local experts, is a great way to help. We also then care for them until they thrive, helping rebuild habitats and combat climate change."
          bottom="When volunteering with conservation groups, we look to protect the rainforest by monitoring wildlife, and supporting sustainable local projects."
          float="left"
          border="left"
        />
        <Learn />
        <TextBox
          title="WHAT CAN YOU DO"
          top="You can help the Amazon in your daily life by choosing sustainable products, reducing waste, and supporting organizations that protect the rainforest."
          middle="An amazing way to stay sustainable is by using eco-friendly cleaning products made from natural ingredients, switching to reusable bags, water bottles, and silverware, and buying products with minimal or recyclable packaging."
          bottom="As well, you can make a difference by donating to environmental causes, cleaning up local trash, and participating in community activities that promote sustainability."
          float="right"
          border="right"
        />
      </div>
      <div className=" justify-center items-center flex flex-col text-center m-10 mx-40 p-10 bg-bgBox shadow-md w-5/6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Help Make A Contribution
        </h2>
        <div className="flex flex-col lg:flex-row text-sm sm:text-base md:text-base xl:text-2xl justify-center">
          <p className="w-full lg:w-1/3 p-5">
            Donating to organizations like the Rainforest Alliance, Amazon
            Watch, or the World Wildlife Fund helps fund reforestation efforts
            and protect the Amazon rainforest from deforestation.
          </p>
          <p className="w-full lg:w-1/3 p-5">
            Donating to research organizations like the Amazon Conservation
            Team, the Instituto Nacional de Pesquisas da Amazônia (INPA), or the
            World Wildlife Fund (WWF) supports critical scientific research
            aimed at preserving the Amazon rainforest and understanding its
            ecosystems.
          </p>
          <p className="w-full lg:w-1/3 p-5">
            Supporting brands like Café de Colombia, Fair Trade Certified, or
            Guayaki Yerba Mate by purchasing Amazon-sourced products like coffee
            and tea helps promote sustainable farming practices and supports
            local communities in the Amazon region.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-8 bg-bgBox2 w-fit">
          <h2 className="mx-2 text-lg sm:text-xl md:text-2xl xl:text-4xl font-medium">
            Be the one who makes a difference{" "}
          </h2>
          <p className="text-sm md:text-base xl:text-lg">
            Donating helps groups and indigenous communities restore and protect
            the forest.
          </p>
          <button className="mt-4 p-3 sm:p-4 mb-4 xl:mb-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-bgBlue font-semibold text-white rounded-xl hover:bg-blue-700">
            Take Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
