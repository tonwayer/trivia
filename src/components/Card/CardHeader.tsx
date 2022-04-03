type Props = {
  children: React.ReactNode
}

export const CardHeader = (props: Props) => {
  return <div className="text-2xl font-bold">
    {props.children}
  </div>
}
