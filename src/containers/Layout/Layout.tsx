type Props = {
  children: JSX.Element
}

export const Layout = (props: Props) => (
  <div className="container mx-auto max-w-sm bg-gray-300 mt-8">
    {props.children}
  </div>
)
