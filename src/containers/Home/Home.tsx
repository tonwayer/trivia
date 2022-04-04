import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter } from '../../components/Card'

export const Home = () => {

  return <Card>
    <CardHeader>
      <h2>Welcome to the trivia Challenge</h2>
    </CardHeader>
    <CardBody>
      <p className="mb-36">You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
    </CardBody>
    <CardFooter>
      <Link to="/questions/0">BEGIN</Link>
    </CardFooter>
  </Card>
}
