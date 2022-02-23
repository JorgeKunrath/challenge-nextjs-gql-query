import { useState } from 'react'
import styled from 'styled-components'
import { insertUser, updateUser } from '../../services/users'
import SidebarOverlay from '../common/SidebarOverlay'

const Form = styled.form`
  &,
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`

export default function FormSidebar({ sidebarPlayer, setSidebarPlayer, refetch }) {
  const [formData, setFormData] = useState({
    name: sidebarPlayer.player?.name ?? '',
    rocket: sidebarPlayer.player?.rocket ?? '',
    twitter: sidebarPlayer.player?.twitter ?? '',
  })

  const handleSave = async () => {
    if (sidebarPlayer.type === 'new') {
      await insertUser(formData)
      refetch()
    }

    if (sidebarPlayer.type === 'edit') {
      await updateUser(sidebarPlayer.player.id, formData)
      refetch()
    }

    setSidebarPlayer({ type: false, player: null })
  }

  const updateState = (key) => (event) =>
    setFormData((data) => ({ ...data, [key]: event.target.value }))

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
            onChange={updateState('name')}
          />
        </label>
        <label>
          rocket
          <input
            type="text"
            name="rocket"
            value={formData.rocket}
            onChange={updateState('rocket')}
          />
        </label>
        <label>
          twitter
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={updateState('twitter')}
          />
        </label>
      </Form>
    </SidebarOverlay>
  )
}
