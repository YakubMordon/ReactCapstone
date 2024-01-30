import Item from './Item';
import './Specials.css';

const sampleData1 = {
    name: 'Sample Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 19.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fQMw5iJ8xdkyRP8Wc8MTRqxaqoVNY_LJOokiGJMyg&s',
  };
  
  const sampleData2 = {
    name: 'Sample Product 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: 29.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fQMw5iJ8xdkyRP8Wc8MTRqxaqoVNY_LJOokiGJMyg&s',
  };
  
  const sampleData3 = {
    name: 'Sample Product 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    price: 39.99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2fQMw5iJ8xdkyRP8Wc8MTRqxaqoVNY_LJOokiGJMyg&s',
  };

export default function Specials() {
  return (
    <div className="specials-container">
        <div className="specials-header-container">
            <div>
                <h3 className="specials-header">Specials</h3>
            </div>
            <div>
                <button className="specials-header-button">Online Menu</button>
            </div>
        </div>
        <div className="specials-list-container">
            <Item {...sampleData1}/>
            <Item {...sampleData2}/>
            <Item {...sampleData3}/>
        </div>
    </div>
  )
}
