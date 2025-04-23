import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());

app.get('/', (_, res): any => res.send('Hello World'));

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});

