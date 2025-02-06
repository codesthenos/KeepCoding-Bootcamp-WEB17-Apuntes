import { Component, ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<
  Props,
  { error: null | Error; info: unknown }
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
      info: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, info: errorInfo });
  }

  render() {
    const { error, info } = this.state;

    if (error) {
      return (
        <div>
          <h1>Oooops!</h1>
          <div>
            <code>{error.message}</code>
          </div>
          <div>
            <code>{JSON.stringify(info)}</code>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
