import { useEffect, useState } from "react";
import Calendar from "../layouts/Calendar";

const ExpenseCalendarCarousel = () => {
  const today = new Date();
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth() + 1);
  const [yearMonth, setYearMonth] = useState<Date>(today);
  useEffect(() => {
    const date = new Date(year, month - 1, 1);
    setYearMonth(date);
  }, [year, month]);
  const nextButtonOnClick = () => {
    let nextYear = year;
    let nextMonth = month + 1;
    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear += 1;
    }
    if (
      nextYear > today.getFullYear() ||
      (nextYear === today.getFullYear() && nextMonth > today.getMonth() + 1)
    ) {
      return;
    } else {
      setYear(nextYear);
      setMonth(nextMonth);
    }
  };
  const prevButtonOnClick = () => {
    let prevYear = year;
    let prevMonth = month - 1;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear -= 1;
    }
    setYear(prevYear);
    setMonth(prevMonth);
  };
  return (
    <>
      <div className="fade-in w-full flex items-center justify-center gap-2 font-bold">
        <button onClick={prevButtonOnClick}>&lt;</button>
        <div className="w-40 text-center">
          {yearMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button onClick={nextButtonOnClick}>&gt;</button>
      </div>
      <Calendar year={year} month={month} usedDays={["1", "4", "10", "23"]} />
    </>
  );
};

export default ExpenseCalendarCarousel;
