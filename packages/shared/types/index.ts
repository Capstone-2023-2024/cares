export interface AnnouncementType {
  docId?: string
  message: string
  bannerSrc?: string
  department: "cite"
  state?: "unpin" | "pin"
  dateCreated: number
  dateEdited?: number
}
