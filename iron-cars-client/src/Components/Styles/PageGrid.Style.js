import styled from 'styled-components'

const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 175px 1fr;
`

const PageContent = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    grid-row: 2;
`

const NavGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
`

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: repeat(10, 800px);
`


export {PageWrapper, PageContent, NavGrid, ContentGrid}