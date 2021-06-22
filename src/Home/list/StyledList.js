import styled from 'styled-components'
import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const ListContainer = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  ul {
    flex: 1;
    overflow-y: scroll;
  }
`

const ListWrap = border(
  styled.li `
    display: flex;
    padding: .1rem;
    background-color: #fff;
    img {
      margin-right: .15rem;
    }
    > div:last-child {
      h1 {
        font-size: .16rem;
        line-height: .3rem;
      }
      h2 {
        font-weight: normal;
      }
      h3 {
        font-size: .12rem;
        font-weight: normal;
        line-height: .25rem;
      }
    }
  `
)

const SubTitle = ellipsis(styled.h2 ``)

export {
  ListContainer,
  ListWrap,
  SubTitle
}