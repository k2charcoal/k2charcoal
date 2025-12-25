import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './JSX/Home';
import Welcome from './JSX/Welcome';
import Header from './JSX/Header'
import About from './JSX/About';
import FooterAbout from './JSX/FooterAbout';
import MediumHome from './JSX/Medium/MediumHome';
import Charcoal from './JSX/Medium/Charcoal';
import MCGM from './JSX/Medium/MCGM';
import Graphite from './JSX/Medium/Graphite';
import Mixed from './JSX/Medium/Mixed';
import OrderProcess from './JSX/OrderProcess';
import MyAllWork from './JSX/MyAllWork';
import GThor from './JSX/Details/Graphite/GThor';
import GCaption from './JSX/Details/Graphite/GCaption';
import GSpiderman from './JSX/Details/Graphite/GSpiderman';
import GFlash from './JSX/Details/Graphite/GFlash';
import GTomAndJerry from './JSX/Details/Graphite/GTomAndJerry';
import GHanumanji from './JSX/Details/Graphite/GHanumanji';
import GGroot from './JSX/Details/Graphite/GGroot';
import GMrBean from './JSX/Details/Graphite/GMrBean';
import GHorse from './JSX/Details/Graphite/GHorse';
import GGojo from './JSX/Details/Graphite/GGojo';
import GIronman from './JSX/Details/Graphite/GIronman';
import CVenom from './JSX/Details/Charcoal/CVenom';
import CHanumanji from './JSX/Details/Charcoal/CHanumanji';
import CRadhaKrishnaEye from './JSX/Details/Charcoal/CRadhaKrishnaEye';
import CCuteKrishna from './JSX/Details/Charcoal/CCuteKrishna';
import CKrishnaji from './JSX/Details/Charcoal/CKrishnaji';
import CChhava from './JSX/Details/Charcoal/CChhava';
import CDarkKrishnaji from './JSX/Details/Charcoal/CDarkKrishnaji';
import CMahadev from './JSX/Details/Charcoal/CMahadev';
import MFirstEye from './JSX/Details/Mixed/MFirstEye';
import MSecondEye from './JSX/Details/Mixed/MSecondEye';
import MMatsyaAvtar from './JSX/Details/Mixed/MMatsyaAvtar';
import MGaneshji from './JSX/Details/Mixed/MGaneshji';
import MRadhaji from './JSX/Details/Mixed/MRadhaji';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="Home" element={<Home />} />
        <Route path="Header" element={<Header />} />
        <Route path="About" element={<About />} />
        <Route path="FooterAbout" element={<FooterAbout />} />
        <Route path="MediumHome" element={<MediumHome />} />
        <Route path="MCGM" element={<MCGM />} />
        <Route path="Charcoal" element={<Charcoal />} />
        <Route path="Graphite" element={<Graphite />} />
        <Route path="Mixed" element={<Mixed />} />
        <Route path="OrderProcess" element={<OrderProcess />} />
        <Route path="MyAllWork" element={<MyAllWork />} />

        <Route path="GThor" element={<GThor />} />
        <Route path="GCaption" element={<GCaption />} />
        <Route path="GSpiderman" element={<GSpiderman />} />
        <Route path="GFlash" element={<GFlash />} />
        <Route path="GTomAndJerry" element={<GTomAndJerry />} />
        <Route path="GHanumanji" element={<GHanumanji />} />
        <Route path="GGroot" element={<GGroot />} />
        <Route path="GMrBean" element={<GMrBean />} />
        <Route path="GHorse" element={<GHorse />} />
        <Route path="GGojo" element={<GGojo />} />
        <Route path="GIronman" element={<GIronman />} />

        <Route path="CVenom" element={<CVenom />} />
        <Route path="CHanumanji" element={<CHanumanji />} />
        <Route path="CRadhaKrishnaEye" element={<CRadhaKrishnaEye />} />
        <Route path="CCuteKrishna" element={<CCuteKrishna />} />
        <Route path="CKrishnaji" element={<CKrishnaji />} />
        <Route path="CChhava" element={<CChhava />} />
        <Route path="CDarkKrishnaji" element={<CDarkKrishnaji />} />
        <Route path="CMahadev" element={<CMahadev />} />

        <Route path="MFirstEye" element={<MFirstEye />} />
        <Route path="MSecondEye" element={<MSecondEye />} />
        <Route path="MMatsyaAvtar" element={<MMatsyaAvtar />} />
        <Route path="MGaneshji" element={<MGaneshji />} />
        <Route path="MRadhaji" element={<MRadhaji />} />
      </Routes>
    </Router>
  );
}

export default App;
