export function imageDimension(size: number) {
  const DIMENSION = size
  return {
    width: DIMENSION,
    height: DIMENSION,
  }
}

export const icon = 24

export function retrieveImageFBStorage(photoUrl: string) {
  const BASE = "https://firebasestorage.googleapis.com"
  const BASE_DIVIDER = "/v0/b/"
  const STORAGE_BUCKET = "cics-a78de.appspot.com"
  const PATH_DIVIDER = "/o/"
  const PARAMS = "?alt=media"
  const PATH = photoUrl.replace(/\//g, "%2F")
  return `${BASE}${BASE_DIVIDER}${STORAGE_BUCKET}${PATH_DIVIDER}${PATH}${PARAMS}`
}
