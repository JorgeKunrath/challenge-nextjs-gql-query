import Link from 'next/link'
import styled from 'styled-components'

import LogoIcon from '../../assets/svg/logo'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 232px 1fr;
  min-height: 100vh;

  aside {
    padding: 2rem 3rem;
  }

  main {
    background-color: #f7f7f7;
    padding: 2rem 3rem;
  }
`

export default function Layout(props) {
  return (
    <Wrapper>
      <aside>
        <LogoIcon />
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/team'}>Team</Link>
          </li>
        </ul>
      </aside>
      <main>{props.children}</main>
    </Wrapper>
  )
}
