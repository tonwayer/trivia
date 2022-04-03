import { Card, CardHeader, CardBody } from '../../components/Card';

export const Home = () => (
  <Card>
    <CardHeader>
      <h2>Welcome to the trivia Challenge</h2>
    </CardHeader>
    <CardBody>
      <p className="mb-36">You will be presented with 10 True or False questions.</p>
      <p className="mb-6">Can you score 100%?</p>
    </CardBody>
    <button>BEGIN</button>
  </Card>
)
