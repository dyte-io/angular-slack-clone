export interface IMeeting {
   success: boolean,
   data: {
         id: string,
         title: string,
         record_on_start: boolean,
         created_at: string,
         updated_at: string
   }
}