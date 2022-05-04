import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component {

  state = {
    products: [
      {
        "_id": "1",
        "title": "Indian madras shirt in cotton",
        "src": [
          "https://www.jcrew.com/s7-img-facade/BH600_YD1079_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          "https://www.jcrew.com/s7-img-facade/BH600_YD1079_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          "https://www.jcrew.com/s7-img-facade/BH600_YD1079_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          "https://www.jcrew.com/s7-img-facade/BH600_YD1079?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
        ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": "INR 12,566.00",
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index => {
    this.setState({ index: index })
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {
          products.map(item => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="img" className='img' />
              </div>

              <div className="box">
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>NEW</p>
                <div className="row">

                  <h5>{item.title}</h5>
                  <h5 className='vouchar'>Item BH600</h5>
                  <p className='price'>INR 12,566.00</p>
                </div>
                <Colors colors={item.colors} className="color" />
                <p>Size : Select The Size</p>
                <p>All sizes are US sizes.</p>
                <div className='size_button'>
                  <button>X-Small</button>
                  <button>Small</button>
                  <button>Medium</button>
                  <button>Large</button>
                  <button>X-Large</button>
                  <button>XX-Large</button>
                </div>
                <div className='qty'>
                  <label htmlFor="">Quantity:
                  </label>
                  <select name="qty" id="qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                  </select>
                </div>
                <p>Prices include duties and taxes.</p>

                <button className="cart">Add to cart</button>
                <br />
                <br />

                <hr />
                <br />
                {/* 
                <p>{item.description}</p>
                <p>{item.content}</p> */}
                <h5>Size & Fit</h5>
                <ul>
                  <li>Regular fit.</li>
                </ul>
                <br />
                <hr />

                <h3>Product Details</h3>
                <p>The name for madras comes from the Indian city of Madraspatnam (now known as Chennai), home to some of the best of the classic cloth since the 17th century. For these shirts, we went to the country that invented the comfortable, extra-light fabric to create one-of-a-kind patterns you won't find anywhere else.</p>
                <ul>
                  <li>Hemp/cotton.</li>
                  <li>Machine wash.</li>
                  <li>Import.</li>
                  <li>Select stores.</li>
                  <li>Item BH600.</li>
                </ul>
                <h3>Our Fabrics, Re-imagined</h3>
                <br />

                <div className='earth'>
                  <img src="https://images.jcrew.com/fsi/images/ReImagined-Sustainble-new.svg" alt="" />
                  <div>
                    <h3>Sustainable</h3>
                    <p>This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade...</p>
                    <br />
                  </div>

                </div>


                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <hr />

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
