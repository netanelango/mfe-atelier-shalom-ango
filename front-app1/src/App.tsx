import './App.css';
// The remote component provided by federation_provider
import ProviderButton from 'myprovider/button';
import ProviderHeader from 'myprovider/header';

const App = () => {
  return (
      <div>
        <ProviderHeader />
      </div>
  );
};

export default App;