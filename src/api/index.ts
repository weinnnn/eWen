// index.ts
import axios from '@/utils/axios'
import { Booking, BookingReqForm, BookingResData } from '@/types'

// 获取预约列表
export const getBookingList = () => {
  return axios.get<Array<Booking>>('/api/getBookingList')
}

// 新增预约
export const addBooking = (data: BookingReqForm) => {
  return axios.post<BookingResData>('/api/addBooking', data)
}
