import './App.css';
import NavBar from './component/layout/navBar/NavbarLayout.jsx';
import Header from './component/layout/header/HeaderLayout.jsx';
import Forms from './component/pages/pos/Forms.jsx';

function App() {
    return (
        <div>
            <Header />
            <NavBar />
            <Forms />

        </div>
    );
}

export default App;
