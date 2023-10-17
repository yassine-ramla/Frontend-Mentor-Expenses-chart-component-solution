import logo from "../assets/images/logo.svg";

export default function Header ({ balance }) {
  return (
    <header className="w-full h-fit flex justify-between items-center bg-mySoftRed rounded-xl lg:rounded-2xl px-6 py-5 lg:px-8 lg:py-7">
      <section className="flex flex-col gap-y-1">
        <h2 className="text-white text-md lg:text-lg font-normal">My balance</h2>
        <h3 className="text-white text-2xl lg:text-3xl font-bold">${balance}</h3>
      </section>
      <img src={logo} alt="logo" />
    </header>
  );
};