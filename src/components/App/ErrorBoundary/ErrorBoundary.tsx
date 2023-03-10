import React, { Component, ErrorInfo, ReactNode } from "react";
import ApplicationError from "../ErrorPage/ApplicationError/ApplicationError";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    clearError = () => {
        this.setState({hasError: false});
    }

    public render() {
        if (this.state.hasError) {
            return <ApplicationError description={this.state.error?.message} clearError={this.clearError}/>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;