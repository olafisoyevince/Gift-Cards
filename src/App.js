import './App.css';
import { allGiftCards } from './Data';

function App() {
  
  return (
    <>
      <nav>
        <h3 className='header'>Gift-Cards</h3>
      </nav>

      <div className='cards-section'>
        <div className="cards">
          {
            allGiftCards.map( giftcard => {
              
              return (
                <div className="card">
                  <div className="card-title">
                    { giftcard.title }
                  </div>
                  <div className="card-body">{ giftcard.title } gift-card can be converted into <br /> { giftcard.currencies.join(", ").toUpperCase() } currencies. </div>
                </div>
              )
            })
          }

          
        </div>
      </div>
    </>
  );
}

export default App;
