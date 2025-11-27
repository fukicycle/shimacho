interface CalendarProps {
  year: number;
  month: number;
  usedDays: string[];
}
interface CalendarDays {
  day: string;
  key: string;
  isUsed: boolean;
}
const Calendar = ({ year, month, usedDays }: CalendarProps) => {
  const generateDays = (): CalendarDays[] => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const days: CalendarDays[] = [];

    // Fill leading empty days
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: "", key: `empty-${i}`, isUsed: false });
    }

    // Fill days of the month
    for (let d = 1; d <= daysInMonth; d++) {
      const isUsed = usedDays.find((a) => a === d.toString());
      days.push({ day: d.toString(), key: `day-${d}`, isUsed: !!isUsed });
    }

    // Fill trailing empty days to complete the grid (5 rows x 7 columns = 35)
    while (days.length < 35) {
      days.push({ day: "", key: `empty-${days.length}`, isUsed: false });
    }
    return days;
  };
  return (
    <>
      <div className="grid grid-cols-7 grid-rows-5 h-60">
        <span className="text-rose-500 text-center">S</span>
        <span className="text-center">M</span>
        <span className="text-center">T</span>
        <span className="text-center">W</span>
        <span className="text-center">T</span>
        <span className="text-center">F</span>
        <span className="text-sky-500 text-center">S</span>
        {generateDays().map((day) => (
          <div className="h-8 w-full relative" key={day.key}>
            {day.isUsed && (
              <div className="absolute top-0 left-0 p-1 w-full h-full flex items-center justify-center">
                <div className="border-l border-t border-white/30 shadow-md size-8 min-h-8 min-w-8 rounded-full bg-accent"></div>
              </div>
            )}
            <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              {day.day}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
