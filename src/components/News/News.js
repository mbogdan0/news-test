import {useDataContext} from "../DataProvider/DataProvider";
import React from 'react';
import Entries from "../Entries/Entries";
import Button from "../Button/Button";

const News = () => {

    const {data} = useDataContext();

    return (
        <>
            <Entries rows={data} />
            <Button />
        </>
    )

};

export default News;