// src/App.jsx

import './App.css';
import Navbar from './components/Navbar/Navbar';
import FounderListItem from './components/FounderListItem/FounderListItem';
import Footer from './components/Footer/Footer';

const founders = [
  {
    name: "Elizabeth Holmes",
    title: "CEO",
    credential: "MBA from SuperLegit University",
    id: 1,
  },
  {
    name: "Sam Bankman-Fried",
    title: "CFO",
    credential: "CPA from TotallyReal State",
    id: 2,
  },
  {
    name: "Matt Damon",
    title: "CMO",
    credential: "Was in that movie you saw",
    id: 3,
  },
];

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about-us", text: "About Us" },
  { href: "/money-pit", text: "Investment Opportunities" },
  { href: "/the-fine-print", text: "Terms of Service" },
];

const App = () => {
  return (
    <>
      {/** send all the navbar data into the <Navbar /> component */}
      <Navbar links={navLinks} />
      <main>
        <h1>Welcome to Hyperbo.ly</h1>
        <h2>The future is firmly in front of us!</h2>
        <p>If you can't explain it to a fifth-grader, our product does it.</p>
      </main>
      <h2>Our Founders</h2>
      <ul>
        {/** hey react, render this FounderItem but use this name instead */}
        {
          founders.map(x => <FounderListItem name={x.name} title={x.title} credential={x.credential} />)
        }
      </ul>
      <Footer year={2024} />
    </>
  );
};

export default App;