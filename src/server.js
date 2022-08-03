import express from 'express';
import './database';
import { graphqlHTTP } from 'express-graphql'
import schema from './schemas';
import { resolvers } from './resolvers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GRAPHQL
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: resolvers
}))

app.listen(4000, () => console.log('Server online on http://localhost:4000'));

export default app;