import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'

type Props = {
  children: React.ReactNode
}

const Card = (props: Props) => {
  return (
    <div className="text-center p-12">
      {props.children}
    </div>
  )
}

export { Card, CardHeader, CardBody }
