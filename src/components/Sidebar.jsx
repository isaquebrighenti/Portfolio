import Social from './Social';
import InformationContainer from "./InformationContainer";

import Avatar from '../img/Eu.jpeg';

import MyPDF from '../pdf/Curriculo_-_Isaque_Queiroz_Brighenti.pdf';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Isaque Brighenti" />
      <p className="title">Desenvolvedor</p>
      <Social/>
      <InformationContainer/>
      <a href={MyPDF} className="btn" download="Curriculo-isaque.pdf">Download Currículo</a>
    </aside>
  )
}

export default Sidebar