"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from "./_component/BookingHistoryList"
import GlobalApi from "@/app/_services/GlobalApi"
import { useState, useEffect } from "react"

function MyBooking() {
    const [bookingHistory, setBookingHistory] = useState([]);

    useEffect(() => {
        GlobalApi.GetUserBookingHistory("guest@email.com")
            .then(resp => {
                console.log(resp);
                setBookingHistory(resp.bookings);
            });
    }, []);
    const convertDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return new Date(`${year}-${month}-${day}`);
};

const filterData = (type) => {
  return bookingHistory.filter(item =>
    type === "booked"
      ? convertDate(item.data) > new Date()
      : convertDate(item.data) < new Date()
  );
};
    

    return (
        <div className="my-10 mx-5 md:mx-36">
            <h2 className="font-bold text-[20px] my-2">My Bookings</h2>

            <Tabs defaultValue="booked" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="booked">Booked</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="booked">
                    <BookingHistoryList bookingHistory={filterData('booked')}/>
                </TabsContent>

                <TabsContent value="completed">
                    <BookingHistoryList bookingHistory={filterData('completed')}/>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBooking