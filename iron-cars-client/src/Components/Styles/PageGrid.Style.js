import styled from 'styled-components'

const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr;
`

const PageContent = styled.div`
    display: grid;
    grid-template-columns: auto 1400px auto;
    grid-row: 2;
    background-color: #121212;
`

const NavGrid = styled.div`
    display: grid;
    grid-template-columns: 350px 100px 100px 150px 1fr;
    gap: 30px
`

const ContentGrid = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
    grid-template-rows: repeat(10, 650px);
    gap: 20px;
    padding-left: 80px;
    padding-top: 25px;
`


export {PageWrapper, PageContent, NavGrid, ContentGrid}