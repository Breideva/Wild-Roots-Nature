function Footer() {
  return (
    <div className="relative" id="contact">
      <div className=" justify-center items-center text-center py-10  w-full">
        {" "}
        <h2 className="text-[55px] font-semibold">Socials & Contact</h2>
        <div className="flex justify-center gap-6 text-4xl items-center w-full">
          <a href="/" className="fa fa-twitter"></a>
          <a href="/" className="fa fa-facebook-square"></a>
          <a href="/" className="fa fa-instagram"></a>
          <a href="/" className="fa fa-envelope-o"></a>
        </div>
        <div className=" justify-center flex items-center">
          <span className="bg-black w-1/12 mx-5" style={{ height: "2px" }} />{" "}
          <p className="py-5 text-[10px] ">
            Nature Wild Roots is a brand created by Evan Breidecker with the
            purpose of practice. It is not to be taken as a serious business.
            Donations will NOT send through.
          </p>
          <span className="bg-black w-1/12 mx-5" style={{ height: "2px" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
