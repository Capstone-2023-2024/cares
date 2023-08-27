import React from "react"
import {
  DateType,
  calendarInArray,
  currentMonth,
  currentWeekDay,
  weekNames,
} from "../date"

function baseStyle(today: number, month: number, year: number) {
  let style = "duration-300 ease-in-out h-full text-right select-none"
  const todayParsed = new Date()
  const selectedDate = new Date()
  const exactMonthTime = 0
  const afterMonthTime = 2678400000
  const getDateToday = today === new Date().getDate() && today

  if (typeof getDateToday === "number") {
    todayParsed.setDate(getDateToday)
    selectedDate.setDate(getDateToday)
  }
  selectedDate.setMonth(month)
  selectedDate.setFullYear(year)

  const selectedDateTime = selectedDate.getTime()
  const todayParsedTime = todayParsed.getTime()

  if (
    selectedDateTime - todayParsedTime >= exactMonthTime &&
    selectedDateTime - todayParsedTime < afterMonthTime &&
    today === todayParsed.getDate()
  )
    style += " font-black text-red-300 text-xl sm:text-2xl bg-white shadow-md"
  if (today === -1) return `${style} text-transparent dark:text-black`
  return `${style} dark:text-white`
}

const Map = ({ month, year }: Omit<DateType, "date">) => {
  const currentMon = currentMonth({ month, year })
  const maxDays = currentMon !== undefined ? currentMon.maxDays : -1
  const { value } = currentWeekDay({ month, year }, weekNames)
  const dateMap = calendarInArray({ ...value, maxDays })

  return (
    <div className="grid grid-cols-7 text-center">
      {dateMap.map(({ today }, index) => {
        return (
          <div
            className="md:w-34 sm:w-26 border-2 border-y-transparent duration-300 ease-in-out sm:h-28 md:h-36 lg:h-48"
            key={index}
          >
            <p
              className={`${baseStyle(today, month, year)} bg-transparent p-3`}
            >
              {today}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Map
