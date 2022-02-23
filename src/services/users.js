import request, { gql } from 'graphql-request'
import { useQuery } from 'react-query'

const endpoint = 'https://api.spacex.land/graphql'

export function useGetUsers() {
  const query = gql`
    query {
      users(
        limit: 10
        distinct_on: name
        where: {
          name: { _is_null: false }
          rocket: { _is_null: false }
          twitter: { _is_null: false }
        }
      ) {
        id
        name
        rocket
        twitter
      }
    }
  `
  const getUsers = useQuery('users', async () => {
    const { users } = await request(endpoint, query)
    return users
  })

  return getUsers
}

export function insertUser(user) {
  const query = gql`
    mutation {
      insert_users(
        objects: {
          name: "${user.name}",
          rocket: "${user.rocket}",
          twitter: "${user.twitter}"
        }
      ) {
        returning {
          id
        }
      }
    }
  `
  return request(endpoint, query)
}

export function updateUser(id, user) {
  const query = gql`
    mutation {
      update_users(
        where: {id: {_eq: "${id}"}},
        _set: {
          name: "${user.name}",
          rocket: "${user.rocket}",
          twitter: "${user.twitter}"
        }
      ) {
        returning {
          id
        }
      }
    }
  `
  return request(endpoint, query)
}

export function deleteUser(id) {
  const query = gql`
    mutation {
      delete_users(where: { id: { _eq: "${id}" } }) {
        returning {
          id
        }
      }
    }
  `
  return request(endpoint, query)
}
