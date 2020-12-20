import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: { message: "", stack: "" },
        info: { componentStack: "" }
    };

    static getDerivedStateFromError = () => {
        return { hasError: true };
    };

    componentDidCatch = (error: Error, info: React.ErrorInfo) => {
        this.setState({ error, info });
    };

    render() {
        const { hasError, error, info } = this.state;
        const { children } = this.props;

        hasError && console.error(error, info);

        return hasError
            ? <h4>Something went wrong</h4>
            : children;
    }
}

export default ErrorBoundary;
