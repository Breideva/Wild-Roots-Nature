import { gsap } from "gsap";
import { useEffect } from "react";

function Body() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const questions = document.getElementById("questions");

      if (scrollPosition > 400) {
        gsap.to(questions, { translateY: 0, duration: 2});
      } else {
        gsap.to(questions, { translateY: 50, duration: 2 });
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="questions" className="px-10 py-20 bg-white">
        <div>
          <h2 className="text-[70px] font-extrabold float-start mt-5 mx-10">
            What we do?
          </h2>
          <div className=" text-start mt-10 text-[25px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              necessitatibus ipsum debitis ipsa earum doloribus delectus.
              Aperiam, enim! Hic consequuntur similique molestiae pariatur
              voluptates, alias non ut, laudantium dolorem ipsum enim, eligendi
              voluptatum natus soluta. Perferendis, vero deleniti? Delectus,
              provident iste rem dicta maiores accusantium voluptates quam
              illum, ullam aspernatur nesciunt fugiat nostrum cupiditate
              exercitationem! Ratione dolores cupiditate, harum quos neque iste
              minus. Cupiditate ratione ab animi adipisci veniam modi. Nesciunt
              architecto nam facilis, cum ea molestias ullam alias atque. ad.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-[70px] font-extrabold float-end mt-5 mx-10">
            Why we do it?
          </h2>
          <div className=" text-end mt-10 text-[25px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              pariatur atque nobis velit maiores voluptas libero iusto nisi
              porro praesentium corporis quaerat doloribus hic omnis temporibus
              beatae consequatur recusandae numquam. Ex fuga quod ea nam
              consectetur excepturi soluta consequuntur fugit eum sapiente dicta
              aliquam quos delectus magnam tenetur incidunt rerum placeat
              dolores, commodi ratione, dignissimos ab. Nemo consequuntur
              aperiam temporibus, reprehenderit eum ad mollitia beatae.
              Perspiciatis id dignissimos iste in veritatis reiciendis assumenda
              quidem, laborum vel, nulla, corporis cumque tempora. ad.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 flex">
        <img
          className="w-[50%] p-2"
          src="https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="w-[50%] h-auto text-center">
          <h2 className="mx-5 p-2 mt-10 text-4xl bg-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            placeat.
          </h2>
          <p className="m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            laudantium deserunt id. Consequatur voluptatem pariatur, est quo
            sunt ex soluta ducimus. Similique nulla architecto dolore
            reprehenderit labore nam porro expedita vel at asperiores quam
            laudantium ipsa ea laborum accusamus libero soluta assumenda,
            aperiam maiores sint cumque? Eos error nisi impedit, vitae nihil
            aliquid debitis rem, atque, cupiditate officiis tenetur dolore
            blanditiis maiores fugit id suscipit?
          </p>
          <h2 className="mx-5 p-2 mt-10 text-4xl bg-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            asperiores nulla sit praesentium facilis?
          </h2>
          <button className="p-3  m-4 bg-blue-900 text-white rounded-xl hover:bg-blue-700">
            Show Me
          </button>
        </div>
      </div>
      <div className=" justify-center items-center text-center py-10 bg-white">
        <h2 className="text-[55px] font-extrabold">Help Make A Contribution</h2>
        <div className="flex text-[25px] justify-center">
          <p className="w-[30%] p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptas repellendus vero iusto a repudiandae obcaecati non velit at
            dolorum qui, amet aliquid magnam nisi reiciendis itaque recusandae
            placeat repellat praesentium eum mollitia architecto nostrum. Nisi,
            neque fugiat cumque quas aliquam accusamus rem quae libero quis quo.
            Quo, veritatis rem!
          </p>
          <p className="w-[30%] p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            deleniti vel doloribus ipsum suscipit modi quod explicabo
            dignissimos quis voluptatum odio praesentium ullam quaerat, eos
            saepe animi error. Laudantium quasi dolorem amet, unde ullam dolore
            odit sit nam rerum officiis praesentium, a ratione harum architecto
            fugiat dicta animi earum veniam.
          </p>
          <p className="w-[30%] p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            tempore laborum, tempora officia quasi perferendis voluptatibus
            blanditiis eum facere delectus maxime aspernatur nostrum nulla magni
            facilis optio voluptates. Iure, recusandae. Illum ratione itaque
            alias nobis laudantium harum, at accusantium excepturi? Minus eum
            delectus impedit voluptas quia doloribus velit non expedita.
          </p>
        </div>
        <div className="flex justify-center items-center bg-white py-10">
          <h2 className="mx-2 text-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <button className="mx-2 text-[20px] p-2 rounded-xl bg-blue-900 text-white">
            Donate
          </button>
        </div>
        <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur impedit rem eveniet numquam nemo maxime placeat? Nobis
              magnam earum soluta!
            </p>
          </div>
        <div className=" justify-center items-center text-center py-10 bg-white">
          <h2 className="text-[55px] font-extrabold">Need to Contact Us?</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Body;
