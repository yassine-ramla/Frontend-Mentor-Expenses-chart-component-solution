import Footer from "./footer";
import Header from "./header";
import data from "../data/data.json";
import Bar from "./bar";

export default function ExpensesChart() {
  const maxAmount = data.reduce((previous, current) => {
    return previous.amount < current.amount ? current : previous;
  }).amount;
  const today = new Date().getDay();
  return (
    <main className="w-full max-w-lg flex flex-col justify-center items-center gap-y-3 sm:gap-y-5">
      <Header balance="921.48" />
      <section className="w-full grid grid-rows-3 grid-cols-1 rounded-xl sm:rounded-2xl bg-myVeryPaleOrange px-4 sm:px-10 py-6 sm:py-10 gap-y-8">
        <h2 className="text-2xl lg:text-3xl text-myDarkBrown font-bold">
          Spending - Last 7 days
        </h2>
        <div className="w-full flex justify-center items-end gap-x-3 sm:gap-x-4 pb-6">
          {data.map((element, index) => {
            return (
              <Bar
                height={`${(element.amount / maxAmount) * 100}%`}
                afterContent={`$${element.amount}`}
                beforeContent={element.day}
                current={today === index + 1}
                key={index}
              />
            );
          })}
        </div>
        <Footer monthTotal="478.33" monthDifference="+2.4" />
      </section>
    </main>
  );
}
