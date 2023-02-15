// types.ts
// 预约
export interface Booking {
    id: number
    name: string
    phone: string
    posttime: string
  }
  
  // 预约请求体
  export interface BookingReqForm {
    name: string
    phone: string
    posttime: string
  }
  
  // 预约响应体
  export interface BookingResData {
    id: number
  }
  