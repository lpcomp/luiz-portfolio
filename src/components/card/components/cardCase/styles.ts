import styled from 'styled-components';

export const Content = styled.div`

    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    transition: 0.2s all;
    
    .dadosPort {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        box-shadow: 0px 5vmin 2.5vmin -6vmin #c3c3c3;
        padding: 3% 8%;
        margin: 1% 0;
        box-sizing: content-box;
    }

    .dadosPort a {
        color: #027b70;
    }

    .tituPort {
        font-size: 20px;
        font-weight: bold;
        color: #75757e;
        margin-bottom: 1%;
    }

    .descPort {
        margin-bottom: 1%;
        font-size: 15px;
    }

    .linkPort {
        font-size: 12px;
        color: #027b70;
    }

`;