import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import Footer from './components/Footer'
import './styles.css';

const Index = () => {
  return (
    <div className="bg-gray-900 py-2 text-gray-400 font-semibold text-center">
        <App />
        <Footer />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("root"));