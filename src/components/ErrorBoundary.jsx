import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-red-600">⚠️ Something went wrong.</h1>
          <p className="text-gray-600 mt-2">Try refreshing the page or coming back later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
