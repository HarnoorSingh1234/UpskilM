import ItemCard from './Item.jsx'
import './App.css'
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import img6 from './assets/img6.jpeg';


function App() {
 

  return (
    <>    
      <div >
        <div className='main1'>All cards are here</div>
        <div className='main_sec'>  
          <ItemCard name="Card 1" src={img1} data="This is data for card 1" />
          <ItemCard name="Card 2" src={img2} data="This is data for card 2" />
          <ItemCard name="Card 3" src={img3} data="This is data for card 3" />
          <ItemCard name="Card 4" src={img4} data="This is data for card 4" />
          <ItemCard name="Card 5" src={img5} data="This is data for card 5" />
          <ItemCard name="Card 6" src={img6} data="This is data for card 6" />
          <ItemCard name="Card 1" src={img1} data="This is data for card 1" />
          <ItemCard name="Card 2" src={img2} data="This is data for card 2" />
          <ItemCard name="Card 3" src={img3} data="This is data for card 3" />
          <ItemCard name="Card 4" src={img4} data="This is data for card 4" />
          <ItemCard name="Card 5" src={img5} data="This is data for card 5" />
          <ItemCard name="Card 6" src={img6} data="This is data for card 6" />
          <ItemCard name="Card 1" src={img1} data="This is data for card 1" />
          <ItemCard name="Card 2" src={img2} data="This is data for card 2" />
          <ItemCard name="Card 3" src={img3} data="This is data for card 3" />
          <ItemCard name="Card 4" src={img4} data="This is data for card 4" />
          <ItemCard name="Card 5" src={img5} data="This is data for card 5" />
          <ItemCard name="Card 6" src={img6} data="This is data for card 6" />
        </div>
      </div>
    </>
  )
}

export default App
