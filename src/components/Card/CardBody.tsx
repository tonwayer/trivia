type Props = {
  children: React.ReactNode
}

export const CardBody = (props: Props) => {
  return <div className="text-xl py-[50px]">
    {props.children}
  </div>
}
