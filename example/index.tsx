import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Converter } from '../src/component/Converter/Converter';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <Converter />
    </div>
  );
};

// createRoot(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
