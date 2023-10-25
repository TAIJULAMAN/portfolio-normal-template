import logo from "../assets/Images/aman.png";
const Footer = () => {
   
    return (
           <>
      <div className="flex justify-center pt-4 mx-8">
        <div className="text-center">
          <img className="w-24 outer-shadow-0  rounded-full mx-auto" src={logo} alt="logo" />
          <div className="text-center  my-4">
            <strong className="uppercase text-2xl">
             Md. Shah Aman
            </strong>
            <p>junior web developer</p>
            <p className="font-sans">email: mdshahamanpatwary@gmail.com</p>
          </div>
        </div>
      </div>
      <br />

      <p className="text-center">
        {"\u00a9"} {new Date().getFullYear()} all right reserved by Shah Aman{" "}
      </p>
    </>
    );
};

export default Footer;

