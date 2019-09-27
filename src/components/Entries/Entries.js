import React, {memo, useMemo} from 'react';
import Entry from "../Entry/Entry";
import styled from 'styled-components';


const Entries = ({rows}) => {
    const Block = styled.div`
        background: #F8F9F9;
        margin: 0 10%;
        padding: 10px;
    `;

    const news = useMemo(() => {
        return rows.map((data, index) => <Entry key={data.url} data={data} n={index} />);
    }, [rows]);

    return (
        <Block>{news}</Block>
    )
};

export default memo(Entries);