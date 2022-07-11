import Header from './components/Header';
import { ApolloProvider , ApolloClient , InMemoryCache , gql } from '@apollo/client';
import { useState , useEffect } from 'react'
import Clients from './components/Clients'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});




const App = () => {
  const [data , setData] = useState(null);



  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
