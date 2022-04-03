import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

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

export { Card, CardHeader, CardBody, CardFooter }
