import React from 'react';
import ErrorLayout from "../../../Common/ErrorLayout/ErrorLayout";
import applicationErrorImage from "../../../../images/applicationError.svg";

type PropsType = {
    clearError: () => void
    description?: string
}

const ApplicationError: React.FC<PropsType> = ({clearError, description}) => {
    return (
        <ErrorLayout
            title='Something went wrong'
            description={description}
            image={applicationErrorImage}
            clearError={clearError}
        />
    );
};

export default ApplicationError;