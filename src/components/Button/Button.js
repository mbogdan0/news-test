import React from 'react';
import {useDataContext} from "../DataProvider/DataProvider";
import styled from 'styled-components';


const Button = () => {
    const {loading, nextPage, reached} = useDataContext();

    const More = styled.div`
        text-align: center;
        margin: 10px 0 100px;
        button {
            font-size: 1em;
            padding: 6px 10px;
        }
    `;

    return (
        <More>
            {reached ? 'Лимит достигнут' : <button
                onClick={nextPage}
                disabled={loading}>
                {loading ? 'Загрузка...' : 'Загрузить еще'}
            </button>}
        </More>
    );
};

export default Button;