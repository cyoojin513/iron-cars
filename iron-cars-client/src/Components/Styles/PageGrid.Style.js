import styled from 'styled-components'

const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr;
`

const SecondRow = styled.div`
    grid-row: 2;
    background-color: #EFEFEF;
`

const NavGrid = styled.div`
    display: grid;
    grid-template-columns: 350px 100px 100px 150px 1fr;
    gap: 30px;
`

const ContentInCenterColumn = styled.div`
    display: grid;
    grid-template-columns: auto 1240px auto;
`

const SellFormInCenterColumn = styled.div`
    display: grid;
    grid-template-columns: auto 840px auto;
    /* grid-template-rows: 1700px; */
`

const BidCardInCenterColum = styled.div`
    display: grid;
    grid-template-columns: auto 805px auto;
`

const ContentGrid = styled.div`
    margin-top: 30px;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 400px));
    grid-template-rows: repeat(4, 650px);
    gap: 20px;
`

const BidGrid = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-rows: 860px 300px;
`
const AboutGrid = styled.div`
    grid-column: 2;
    margin-top: 60px;
    display: grid;
    grid-template-columns: 620px 620px;
    margin-left: 170px;

`
export {PageWrapper, SecondRow, NavGrid, ContentGrid, ContentInCenterColumn, SellFormInCenterColumn, BidCardInCenterColum, BidGrid, AboutGrid}