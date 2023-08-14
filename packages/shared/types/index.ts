interface FromDatabase {
  docId?: string
}

interface CreatedFile {
  photoUrl?: string
  dateCreated: number
  dateEdited?: number
}

export interface AnnouncementType extends CreatedFile, FromDatabase {
  message: string
  department: "cite"
  state?: "unpin" | "pin"
}

export interface UniversityScheduleType extends CreatedFile, FromDatabase {
  title: string
}
