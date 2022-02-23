import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../src/components/common/Layout'
import { useGetUsers } from '../src/services/users'

const Players = styled.div`
  background-color: white;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
  max-width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  p:last-of-type {
    color: #00c850;
    font-size: 4rem;
  }
`
export default function Home() {
  const { data, error, isLoading } = useGetUsers()
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tin cidunt
          vehicula eros. Cras tristique tincidunt velit non egestas. In dignissim et enim
          nec rutrum. Praesent venenatis, sapien eget feugiat laoreet, purus eros
          malesuada lectus, non sollicitudin dolor est vel purus. Nunc quis molestie
          metus.
        </p>
        <Players>
          <p>TOTAL PLAYERS</p>
          {isLoading && <p>loading</p>}
          {error && <p>{error.message}</p>}
          {data && <p>{data.length}</p>}
        </Players>
        <p>
          Source:{' '}
          <a href="https://github.com/JorgeKunrath/challenge-nextjs-gql-query">
            https://github.com/JorgeKunrath/challenge-nextjs-gql-query
          </a>
        </p>
      </Layout>
    </div>
  )
}
