import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyle?: string
  button?: 'button' | 'submit' | 'reset'
  handleClick?: MouseEventHandler<HTMLButtonElement>
}