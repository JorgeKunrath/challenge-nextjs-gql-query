import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'

import Layout from '../../src/components/common/Layout'
import FormSidebar from '../../src/components/team/FormSidebar'
import User from '../../src/components/team/User'
import { useGetUsers } from '../../src/services/users'

const Table = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
`

export const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 15% 25% 20% 20% 10% 10%;
  overflow: hidden;
  font-weight: ${(props) => (props.header ? 'bold' : 'regular')};
  border-bottom: 1px solid #eeeeee;

  & > * {
    margin: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default function Team() {
  const [sidebarPlayer, setSidebarPlayer] = useState({
    type: false,
    player: null,
  })

  const { data, error, isLoading, refetch } = useGetUsers()

  return (
    <div className="container">
      <Head>
        <title>Team</title>
      </Head>
      <Layout>
        <button onClick={() => setSidebarPlayer({ type: 'new', player: null })}>
          New Player
        </button>
        {isLoading && 'loading'}
        {error && `An error has ocurred: ${error.message}`}
        {data && (
          <Table>
            <Row header>
              <p>#</p>
              <p>Name</p>
              <p>Rocket</p>
              <p>Twitter</p>
            </Row>
            {data.map((user) => (
              <User
                key={user.id}
                user={user}
                setSidebarPlayer={setSidebarPlayer}
                refetch={refetch}
              />
            ))}
          </Table>
        )}
      </Layout>
      <FormSidebar
        key={sidebarPlayer.player?.id ?? sidebarPlayer.type}
        sidebarPlayer={sidebarPlayer}
        setSidebarPlayer={setSidebarPlayer}
        refetch={refetch}
      />
    </div>
  )
}
