import { Box, Button } from "@mui/material";
import React, { ReactNode, ErrorInfo, useEffect } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import useTranslation from "src/hooks/utils/useTranslation";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

const ErrorBoundary = ({ error, errorInfo }: Pick<ErrorBoundaryState, "error" | "errorInfo">) => {
    const navigate = useNavigate();
    const t = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    if (!error || !errorInfo) {
        return null;
    }

    const isErrorFromIframe = window.location.pathname.startsWith("/integrate");

    useEffect(() => {
        if (typeof error?.message === "string") {
            searchParams.set("error", error.message);
            setSearchParams(searchParams);
        }
    }, [error.message, searchParams, setSearchParams]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="100vh"
        >
            <pre>{t("error.somethingWentWrong")}</pre>
            <Button
                variant="outlined"
                onClick={() => {
                    searchParams.delete("error");
                    setSearchParams(searchParams);
                    if (isErrorFromIframe) {
                        window.location.reload();
                    } else {
                        navigate("/");
                        navigate(0);
                    }
                }}
            >
                {isErrorFromIframe ? t("common.reload") : t("message.backToHome")}
            </Button>
        </Box>
    );
};

class MyErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = { hasError: false, error: null, errorInfo: null };

    constructor(props: ErrorBoundaryProps) {
        super(props);
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({ hasError: true, error, errorInfo });
    }

    render() {
        const { hasError, errorInfo, error } = this.state;

        const { children } = this.props;

        if (hasError) {
            return <ErrorBoundary error={error} errorInfo={errorInfo} />;
        }

        return <>{children}</>;
    }
}

const ErrorBoundaryWrapper = () => {
    return (
        <MyErrorBoundary>
            <Outlet />
        </MyErrorBoundary>
    );
};

export default ErrorBoundaryWrapper;
