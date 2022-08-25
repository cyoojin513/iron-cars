import styled from 'styled-components'

const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 175px 1fr;
`

const PageContent = styled.div`
    display: grid;
    grid-template-columns: auto 1240px auto;
    /* margin-left: 10%;
    margin-right: 10%; */
    grid-row: 2;
`

const NavGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
`

const ContentGrid = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
    grid-template-rows: repeat(10, 800px);
    gap: 20px;
`


export {PageWrapper, PageContent, NavGrid, ContentGrid}