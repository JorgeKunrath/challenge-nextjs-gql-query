import { useState } from 'react'
import styled from 'styled-components'
import SidebarOverlay from '../common/SidebarOverlay'

const Form = styled.form`
  &,
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`

export default function FormSidebar({ sidebarPlayer, setSidebarPlayer }) {
  const [formData, setFormData] = useState({
    name: sidebarPlayer.player?.name ?? '',
    rocket: sidebarPlayer.player?.rocket ?? '',
    twitter: sidebarPlayer.player?.twitter ?? '',
  })

  const handleSave = () => {
    console.log('formData', formData)

    if (sidebarPlayer.type === 'new') {
      // TODO: insertion
    }

    if (sidebarPlayer.type === 'edit') {
      // TODO: make request, get response and update players
    }

    // setSidebarPlayer({ type: false, player: null });
  }

  if (!sidebarPlayer.type) return null
  return (
    <SidebarOverlay
      key={sidebarPlayer.player?.id}
      title={sidebarPlayer.type === 'new' ? 'New Player' : 'Edit Player'}
      onSave={handleSave}
      onCancel={() => setSidebarPlayer({ type: false, player: null })}
      onClose={() => setSidebarPlayer({ type: false, player: null })}
    >
      <Form>
        <label>
          name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData((data) => ({ ...data, name: e.target.value }))}
          />
        </label>
        <label>
          rocket
          <input
            type="text"
            name="rocket"
            value={formData.rocket}
            onChange={(e) => setFormData((data) => ({ ...data, rocket: e.target.value }))}
          />
        </label>
        <label>
          twitter
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={(e) =>
              setFormData((data) => ({ ...data, twitter: e.target.value }))
            }
          />
        </label>
      </Form>
    </SidebarOverlay>
  )
}
