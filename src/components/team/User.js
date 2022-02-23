import { Row } from '../../../pages/team'
import { deleteUser } from '../../services/users'

export default function User({ user, setSidebarPlayer, refetch }) {
  const handleDeleteUser = async () => {
    const isExecuted = confirm(`Are you sure to delete user ${user.name} ?`)
    if (isExecuted) {
      await deleteUser(user.id)
      refetch()
    }
  }

  return (
    <Row>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.rocket}</p>
      <p>{user.twitter}</p>
      <button onClick={() => setSidebarPlayer({ type: 'edit', player: user })}>
        Edit
      </button>
      <button onClick={handleDeleteUser}>X</button>
    </Row>
  )
}
