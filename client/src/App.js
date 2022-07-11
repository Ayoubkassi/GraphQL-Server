import Header from './components/Header';
import { ApolloProvider , ApolloClient , InMemoryCache , gql } from '@apollo/client';
import { useState , useEffect } from 'react'
import Clients from './components/Clients'
import AddClientModal from './components/AddClientModal'

const cache = new InMemoryCache({
    typePolicies : {
      Query : {
        fields : {
          clients : {
            merge(existing , incoming){
              return incoming;
            }
          },
          projects : {
            merge(existing , incoming){
              return incoming;
            }
          }
        }
      }
    }
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache ,
});




const App = () => {
  const [data , setData] = useState(null);



  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
