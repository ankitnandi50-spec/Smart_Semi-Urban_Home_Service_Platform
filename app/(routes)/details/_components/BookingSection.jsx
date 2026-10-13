
import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useUser } from '@clerk/nextjs'
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';
import moment from 'moment/moment';
function BookingSection({ children, business }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    getTime();
    setDate();
    setSelectedTime('');
  }, [])
  useEffect(() => {
    date && BusinessBookedSlot();
  }, [date])

  const BusinessBookedSlot = () => {
    GlobalApi.BusinessBookedSlot(business.id, moment(date).format('DD-MM-yyyy'))
      .then(resp => {
        console.log(resp)
        setBookedSlot(resp.bookings)
      })
  }
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }

    setTimeSlot(timeList)
  }
  const saveBooking = () => {
     if (!user) {
    toast('Please sign in to book a service');
    return;
  }

  GlobalApi.createNewBooking(
    business.id,
    moment(date).format('DD-MM-yyyy'),
    selectedTime,
    user?.primaryEmailAddress?.emailAddress,
    user?.fullName
  )
    .then(resp => {
      console.log(resp);

      if (resp) {
        toast('Service Booked Successfully!');
      }
    })
    .catch((e) => {
      console.log(e);
      toast('Error while creating booking');
    });
  }
  const isSlotBooked = (time) => {
    return bookedSlot.find(item => item.time == time)
  }
  return (
    
    <div>
    
      <Sheet>
        <SheetTrigger asChild>
          {children}
        </SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book a Service</SheetTitle>
            <SheetDescription>Select Date and Time slot to book a Service</SheetDescription>
            <div className='flex flex-col gap-5 items-baseline'>
              <h2 className='mt-5 font-bold'>Select Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
              />
            </div>
            <h2 className='my-5 font-bold'>Select Time Slot</h2>
            <div className='grid grid-cols-3 gap-3'>
              {timeSlot.map((item, index) => (
                <Button className={`bg-white text-black border border rounded-full p-2 px-3 hover:bg-purple-600 hover:text-white
                ${selectedTime == item.time && 'bg-purple-600 text-white'}`} key={index}
                  disabled={isSlotBooked(item.time)}
                  variant='outline'
                  onClick={() => setSelectedTime(item.time)}
                >{item.time}</Button>
              ))}
            </div>
            <SheetFooter className="mt-5">
              <SheetClose asChild>
                <div className='flex gap-5'>

                  <Button disabled={!(selectedTime && date)} className="bg-purple-600"
                    onClick={() => saveBooking()}
                  >Book</Button>

                  <Button variant="destructive">Cancel</Button>
                </div>
              </SheetClose>

            </SheetFooter>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default BookingSection