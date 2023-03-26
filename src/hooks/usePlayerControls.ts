import { useEffect } from "react"

interface PropsType {
  handleArrowUp: () => void,
  handleArrowDown: () => void,
  handleArrowLeft: () => void,
  handleArrowRight: () => void,
}

export const usePlayerControls = ({
  handleArrowUp,
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
}: PropsType) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log('handleKeyDown', e.key)
      switch (e.key) {
        case "ArrowUp":
          handleArrowUp()
          break
        case "ArrowDown":
          handleArrowDown()
          break
        case "ArrowLeft":
          handleArrowLeft()
          break
        case "ArrowRight":
          handleArrowRight()
          break
        default:
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [
    handleArrowUp,
    handleArrowDown,
    handleArrowLeft,
    handleArrowRight
  ])
}