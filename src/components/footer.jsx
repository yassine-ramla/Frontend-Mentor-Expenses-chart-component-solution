export default function Footer({ monthDifference, monthTotal }) {
  return (
    <footer className="w-full flex flex-col justify-center items-start pt-4 border-t-2 border-myCream">
      <p className="text-myMediumBrown lg:text-lg">Total this month</p>
      <section className="w-full flex justify-between items-center">
        <h2 className="text-myDarkBrown text-3xl lg:text-5xl font-bold">${monthTotal}</h2>
        <div className="flex flex-col justify-center items-end">
          <h3 className="text-myDarkBrown lg:text-lg font-bold">{monthDifference}%</h3>
          <p className="text-myMediumBrown lg:text-lg">from last month</p>
        </div>
      </section>
    </footer>
  );
}
