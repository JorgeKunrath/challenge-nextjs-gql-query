import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../../src/components/common/Layout'
import FormSidebar from '../../src/components/team/FormSidebar'

const MOCK_data = [
  {
    id: 1,
    name: 'Fulano Silva Cardoso Machado',
    rocket: 'Atlas-Agena',
    twitter: 'https://twitter.com/asdf',
  },
  {
    id: 2,
    name: 'Ciclano Rosa',
    rocket: 'Thor-Ablestar and SM-65E Atlas',
    twitter: 'https://twitter.com/123',
  },
]

const Table = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 5% 25% 25% 25% 10% 10%;
  overflow: hidden;
  font-weight: ${(props) => (props.header ? 'bold' : 'regular')};

  & > * {
    margin: 0.25rem;
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

  const handleRemove = (item) => {
    // TODO: delete user
    console.log('handleRemove')
    console.log('item', item)
  }

  return (
    <div className="container">
      <Layout>
        <button onClick={() => setSidebarPlayer({ type: 'new', player: null })}>
          + New Player
        </button>
        <Table>
          <Row header>
            <p>#</p>
            <p>Name</p>
            <p>Rocket</p>
            <p>Twitter</p>
          </Row>
          {MOCK_data.map((item) => (
            <Row key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.rocket}</p>
              <p>{item.twitter}</p>
              <button onClick={() => setSidebarPlayer({ type: 'edit', player: item })}>
                Edit
              </button>
              <button onClick={() => handleRemove(item)}>X</button>
            </Row>
          ))}
        </Table>
      </Layout>
      <FormSidebar
        key={sidebarPlayer.player?.id ?? sidebarPlayer.type}
        sidebarPlayer={sidebarPlayer}
        setSidebarPlayer={setSidebarPlayer}
      />
    </div>
  )
}
