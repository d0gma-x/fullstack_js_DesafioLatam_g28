import './App.css';
import Header from './components/Header/Header';
import CardImage from './components/Cardimage/CardImage';
import FooterMod from './components/Footer/FooterMod';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div>
      <Header
        title="Galería de Imágenes con React"
        subtitle="OnePiece Design"
      />
      <Row>
          <CardImage
            src="/img/card_01.jpg"
            titleImg="Monkey D. Luffy"
            comment="฿ 500.000.000"
            url="https://www.youtube.com/watch?v=dM7x1PNZDo0&t=1s&ab_channel=ONEPIECE%E5%85%AC%E5%BC%8FYouTube%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB"
            descriptionUrl="1st-Op 'We Are!'"
          />
          <CardImage
            src="/img/card_02.jpg"
            titleImg="Roronoa Zoro"
            comment="฿ 320.000.000"
            url="https://www.youtube.com/watch?v=s4GhfETyih8&t=46s&ab_channel=Anicrad"
            descriptionUrl="2nd-Op 'Believe'"
          />
          <CardImage
            src="/img/card_03.jpg"
            titleImg="God Usopp"
            comment="฿ 200.000.000"
            url="https://www.youtube.com/watch?v=Tyr7Ymbtl2Y&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=6&ab_channel=Sogekiiing"
            descriptionUrl="6th-Op 'Brend New World'"
          />
      </Row>

      <Row>
          <CardImage
            src="/img/card_04.jpg"
            titleImg="Vinsmoke Sanji"
            comment="฿ 177.000.000"
            url="https://www.youtube.com/watch?v=hJgJTTIbMDI&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=13&ab_channel=MondoAnime"
            descriptionUrl="13th-Op 'One Day'"
          />
          <CardImage
            src="/img/card_05.jpg"
            titleImg=" 'Cat Burglar' Nami "
            comment="฿ 66.000.000"
            url="https://www.youtube.com/watch?v=fCQufN8Wsgc&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=15&ab_channel=NazimMendelnozor"
            descriptionUrl="15th-Op 'We Go!'"
          />
          <CardImage
            src="/img/card_06.jpg"
            titleImg="Tony Tony Chopper"
            comment="฿ 100"
            url="https://www.youtube.com/watch?v=1apeGd4cinU&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=17&ab_channel=RasenRendan"
            descriptionUrl="17th-Op 'Wake Up!'"
          />
      </Row>

      <Row>
          <CardImage
            src="/img/card_07.jpg"
            titleImg="Nico Robin"
            comment="฿ 130.000.000"
            url="https://www.youtube.com/watch?v=fsWF5Ek_RiI&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=19&ab_channel=rogervargas"
            descriptionUrl="19th-Op 'We Can!'"
          />
          <CardImage
            src="/img/card_08.jpg"
            titleImg="Franky"
            comment="฿ 94.000.000"
            url="https://www.youtube.com/watch?v=hBi9wavp2w4&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=23&ab_channel=santoryu"
            descriptionUrl="23th-Op 'Dream On!'"
          />
          <CardImage
            src="/img/card_09.jpg"
            titleImg=" 'Soul King' Brook"
            comment="฿ 83.000.000"
            url="https://www.youtube.com/watch?v=MSXr7O0hu-c&list=PL2R75x3ZazUDRZKsDU9-pi85DJ3WdGudI&index=24&ab_channel=AvanyniK"
            descriptionUrl="24th-Op 'Paint'"
          />
      </Row>

      <FooterMod/>
    </div>
  );
}

export default App;
