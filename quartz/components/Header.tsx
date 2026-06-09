import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  margin: 0;
}

header h1 {
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
