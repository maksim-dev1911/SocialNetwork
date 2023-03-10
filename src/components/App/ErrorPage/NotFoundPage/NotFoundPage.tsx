import React from 'react';
import ErrorLayout from "../../../Common/ErrorLayout/ErrorLayout";
import notFoundImage from "../../../../images/404.svg";


const NotFoundPage = () => {
    return (
        <ErrorLayout
            title='Something is wrong'
            description='The page you are looking was moved, removed, renamed, or might never exist!'
            image={notFoundImage}
        />
    );
};

export default React.memo(NotFoundPage);