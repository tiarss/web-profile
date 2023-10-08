interface IButton {
  title: string
  onClick: () => void
  theme?: "primary" | "secondary"
  size?: "s" | "m" | "xl"
  disabled?: boolean
}

const Button: React.FC<IButton>= ({title, theme, size, onClick}: IButton) => {
  return (
    <button>
      {title}
    </button>
  )
}

export default Button