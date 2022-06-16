import { Routes } from 'pages/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter basename="/app">
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
