interface FromDatabase {
  docId?: string
}

interface CreatedFile {
  dateCreated: number
  dateEdited?: number
}

interface MediaType {
  photoUrl?: string
}

export interface AnnouncementType extends CreatedFile, FromDatabase, MediaType {
  message: string
  department: "cite"
  state?: "unpin" | "pin"
}

export interface UniversityScheduleType
  extends CreatedFile,
    FromDatabase,
    MediaType {
  title: string
}

export interface StudInfoSortedType {
  studentNo: string
  college: string
  schoolYear: string
  name: string
  course: string
  gender: string
  major: string
  curriculum: string
  age: string
  yearLevel: string
  scholarship: string
}

export interface ResultType {
  name: string
  type?: "first" | "last" | "initial"
}

export interface ChatConfigType extends FromDatabase {
  theme: string
  dateModified: number
  participants: string[]
}

export interface ChatType
  extends Pick<CreatedFile, "dateCreated">,
    FromDatabase {
  type: "text" | "photo" | "document" | "video" | "audio"
  content: string
  email: string
}

export interface ClientChatType extends ChatConfigType {
  inbox: ChatType[]
}
