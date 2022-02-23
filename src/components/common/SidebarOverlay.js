import { useRef } from 'react'
import reactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: not-allowed;
`

const Content = styled.div`
  cursor: auto;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 422px;
  height: 100%;

  display: flex;
  flex-direction: column;

  h1,
  .content,
  .actions {
    padding: 1rem;
  }

  .content {
    flex-grow: 1;
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }
`

export default function SidebarOverlay(props) {
  const root = typeof window === 'object' && document.getElementById('__next')

  const backdropRef = useRef(null)
  const handleClickBackdrop = (event) => {
    if (event.target === backdropRef.current) props.onClose()
  }

  return root
    ? reactDOM.createPortal(
        <Wrapper ref={backdropRef} onClick={handleClickBackdrop}>
          <Content>
            <h1>{props.title}</h1>
            <hr />
            <div className="content">{props.children}</div>
            <hr />
            <div className="actions">
              <button onClick={props.onCancel}>CANCEL</button>
              <button onClick={props.onSave}>SAVE</button>
            </div>
          </Content>
        </Wrapper>,
        root
      )
    : null
}
