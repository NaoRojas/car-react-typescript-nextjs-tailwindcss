import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyle?: string
  button?: 'button' | 'submit' | 'reset'
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}