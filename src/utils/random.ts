export function random (max: number, min:number = 0) {
  return Math.floor(Math.random() * (max + 1)) + min
}
