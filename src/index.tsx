import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

const Index = (): React.ReactElement => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
