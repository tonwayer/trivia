type Props = {
  children: React.ReactNode
}

export const Card = (props: Props) => {
  return (
    <div className="text-center p-12">
      {props.children}
    </div>
  )
}
