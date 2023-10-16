import { GraphQLClient } from "graphql-request";
const graphqlClient = new GraphQLClient("http://localhost:5000/graphql");
export { graphqlClient };
