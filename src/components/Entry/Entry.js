import React, {memo} from 'react';
import styled from 'styled-components';


const Entry = ({data, n}) => {

    const Row = styled.div`
        padding: 4px;
        display: flex;
        align-items: baseline;
        overflow: hidden;
        a {
            font-size: 1.2em;
            font-weight: bold;
            color: #5F6A6A;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                color: #1A5276;
            }
        }
        
        span {
            font-size: 2em;
            color: #BFC9CA;
            padding-right: 8px;
        }
    `;

    const Description = styled.div`
        font-size: .9em;
        color: grey;
    `;


    return (
        <>
            <Row>
                <span>{n + 1}</span>
                <a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>
            </Row>
            <Description>
                {data.description}
            </Description>
        </>
    );
};

export default memo(Entry);