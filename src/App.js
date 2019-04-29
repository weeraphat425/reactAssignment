import React, { Component } from 'react';
import firebase from './firebase'
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,Fade  } from 'reactstrap';
  const items = [
    {
      src: 'https://images.pexels.com/photos/1070357/pexels-photo-1070357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=850',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=850',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://images.pexels.com/photos/233312/pexels-photo-233312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=850',
      altText: 'Slide 3',
      caption: 'Slide 3'
    },
    {
      src: 'https://images.pexels.com/photos/1458059/pexels-photo-1458059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=850',
      altText: 'Slide 4',
      caption: 'Slide 4'
    },
    {
      src: 'https://images.pexels.com/photos/163369/stairs-shoes-sneakers-sole-163369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=850',
      altText: 'Slide 5',
      caption: 'Slide 5'
    }
  ];
class App extends Component {

  constructor(){
     super();
     this.state = {
        orders:[],
        user_id:'',
        item_name:'',
        name:'',
        address:'',
        shown: true,
        Nike:false,
        Adidas:false,
        Converse:false,
        home:true,
        order:false,
        modal: false,
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
        modal11: false,
        modal12: false,
        modal13: false,
        modal14: false,
        modal15: false,
        modal16: false,
        modal17: false,
        modal18: false,
        moda119: false,
        modal20: false,
        modal21: false,
        modal22: false,
        modal23: false,
        modal24: false,
        fadeIn: false,
        activeIndex:0
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);
    this.toggle9 = this.toggle9.bind(this);
    this.toggle10 = this.toggle10.bind(this);
    this.toggle11 = this.toggle11.bind(this);
    this.toggle12 = this.toggle12.bind(this);
    this.toggle13 = this.toggle13.bind(this);
    this.toggle14 = this.toggle14.bind(this);
    this.toggle15 = this.toggle15.bind(this);
    this.toggle16 = this.toggle16.bind(this);
    this.toggle17 = this.toggle17.bind(this);
    this.toggle18 = this.toggle18.bind(this);
    this.toggle19 = this.toggle19.bind(this);
    this.toggle20 = this.toggle20.bind(this);
    this.toggle21 = this.toggle21.bind(this);
    this.toggle22 = this.toggle22.bind(this);
    this.toggle23 = this.toggle23.bind(this);
    this.toggle24 = this.toggle24.bind(this);
  }
  toggle() {
    var password = window.prompt("Password")
    if(password=='admin'){
    this.setState({
      fadeIn: !this.state.fadeIn
    })}
    else{
      alert("wrong password");
    };
}
  toggle1() {
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
    this.head='Nike AIR 1 X FEAR OF GOD RAID'
    this.information='description1'
  }
  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }));
    this.head='Nike AIR X FEAR OF GOD STRAP'
    this.information='description2'
  }
  toggle3() {
    this.setState(prevState => ({
      modal3: !prevState.modal3
    }));
    this.head='Nike X AMBUSH® AIR MAX 180 HIGH'
    this.information='description3'
  }
  toggle4() {
    this.setState(prevState => ({
      modal4: !prevState.modal4
    }));
    this.head='Nike AIR MAX TAILWIND IV'
    this.information='description4'
  }
  toggle5() {
    this.setState(prevState => ({
      modal5: !prevState.modal5
    }));
    this.head='Nike Air VaporMax Flyknit 3'
    this.information='description5'
  }
  toggle6() {
    this.setState(prevState => ({
      modal6: !prevState.modal6
    }));
    this.head='Nike Air Max 97 LX'
    this.information='description6'
  }
  toggle7() {
    this.setState(prevState => ({
      modal7: !prevState.modal7
    }));
    this.head='Nike SB Air Max Janoski 2'
    this.information='description7'
  }
  toggle8() {
    this.setState(prevState => ({
      modal8: !prevState.modal8
    }));
    this.head='Nike Air Max 720 SATRN'
    this.information='description8'
  }
  toggle9() {
    this.setState(prevState => ({
      modal9: !prevState.modal9
    }));
    this.head='ZX 4000 4D'
    this.information='description9'
  }
  toggle10() {
    this.setState(prevState => ({
      modal10: !prevState.modal10
    }));
    this.head='YEEZY BOOST 700 ANALOG'
    this.information='description10'
  }
  toggle11() {
    this.setState(prevState => ({
      modal11: !prevState.modal11
    }));
    this.head='ULTRABOOST 19 SHOES'
    this.information='description11'
  }
  toggle12() {
    this.setState(prevState => ({
      modal12: !prevState.modal12
    }));
    this.head='MARVEL’S BLACK PANTHER'
    this.information='description12'
  }
  toggle13() {
    this.setState(prevState => ({
      modal13: !prevState.modal13
    }));
    this.head='PHARRELL WILLIAMS X BYW CNY SHOES'
    this.information='description13'
  }
  toggle14() {
    this.setState(prevState => ({
      modal14: !prevState.modal14
    }));
    this.head='COUNTRY X KAMANDA SHOES'
    this.information='description14'
  }
  toggle15() {
    this.setState(prevState => ({
      modal15: !prevState.modal15
    }));
    this.head='ALPHABOUNCE INSTINCT'
    this.information='description15'
  }
  toggle16() {
    this.setState(prevState => ({
      modal16: !prevState.modal16
    }));
    this.head='LACOMBE DONALD GLOVER SHOES'
    this.information='description16'
  }
  toggle17() {
    this.setState(prevState => ({
      modal17: !prevState.modal17
    }));
    this.head='ALL STAR OX MILEY2'
    this.information='description17'
  }
  toggle18() {
    this.setState(prevState => ({
      modal18: !prevState.modal18
    }));
    this.head='JACK PURCELL JACK – OX – LEATHER'
    this.information='description18'
  }
  toggle19() {
    this.setState(prevState => ({
      modal19: !prevState.modal19
    }));
    this.head='ALL STAR HI MILEY2 '
    this.information='description19'
  }
  toggle20() {
    this.setState(prevState => ({
      modal20: !prevState.modal20
    }));
    this.head='CHUCK TAYLOR ALL STAR'
    this.information='description20'
  }
  toggle21() {
    this.setState(prevState => ({
      modal21: !prevState.modal21
    }));
    this.head='ONE STAR 2V – OX – ICON VIOLET'
    this.information='description21'
  }
  toggle22() {
    this.setState(prevState => ({
      modal22: !prevState.modal22
    }));
    this.head='ONE STAR – OX – LEATHER'
    this.information='description22'
  }
  toggle23() {
    this.setState(prevState => ({
      modal23: !prevState.modal23
    }));
    this.head='ONE STAR – OX – BLUE FIR'
    this.information='description23'
  }
  toggle24() {
    this.setState(prevState => ({
      modal24: !prevState.modal24
    }));
    this.head='ONE STAR – OX – SUEDE'
    this.information='description24'
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  componentDidMount(){
    const ordersRef = firebase.database().ref('orders');
    ordersRef.on('value',(snapshot) => {
        let orders = snapshot.val();
        let newState = [];
        for(let item in orders){
          newState.push({
              user_id:item,
              item_name:orders[item].item_name,
              name:orders[item].name,
              address:orders[item].address
          })
        }
        this.setState({
          orders:newState
        })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    if(this.state.item_name==''){
      alert("Please choose item before orders.");
    }
    else if(this.state.name==''){
      alert("Please input Your Name.");
    }
    else if(this.state.address==''){
      alert("Please input Your Address.");
    }
    else{
    if(this.state.user_id != ''){
      return this.updateItem();
    }
    const ordersRef = firebase.database().ref('orders')
    const item = {
       item_name : this.state.item_name,
       name : this.state.name,
       address : this.state.address
    }
    ordersRef.push(item)
    this.setState({
       user_id:'',
       item_name:'',
       name:'',
       address:''
    })
  }
 }
  removeItem(itemId){
    const ordersRef = firebase.database().ref('/orders');
    ordersRef.child(itemId).remove();
 }
 toggleModal() {    
  this.setState((prev, props) => {
    const newState = !prev.modalState;
    
    return { modalState: newState };
  });
}
showNike(){
  this.setState({
    Nike: true,
    Adidas: false,
    Converse: false,
    home:false,
    order: true
  })
}
showAdidas(){
  this.setState({
    Nike: false,
    Adidas: true,
    Converse: false,
    home:false,
    order: true
  })
}
showConverse(){
  this.setState({
    Nike: false,
    Adidas: false,
    Converse: true,
    home:false,
    order: true
  })
}
showHome(){
  this.setState({
    Nike: false,
    Adidas: false,
    Converse: false,
    home:true,
    order: false
  })
}
  render() {
    var hideNike={
      display: this.state.Nike ? "block" : "none"
    }
    var hideAdidas={
      display: this.state.Adidas ? "block" : "none"
    }
    var hideConverse={
      display: this.state.Converse ? "block" : "none"
    }
    var hidehome={
      display: this.state.home ? "block" : "none"
    }
    var hideorder={
      display: this.state.order ? "block" : "none"
    }
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <div className="app">
      <Navbar color="light" light expand="md">
          <NavbarBrand onClick={this.showHome.bind(this)}>Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.showNike.bind(this)}>Nike</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.showAdidas.bind(this)}>Adidas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.showConverse.bind(this)}>Converse</NavLink>
              </NavItem>

            </Nav>
        </Navbar>
        
      <div className="container" style={{marginTop:20}}>
      <div style = {hidehome}> <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel></div>

     
      <form style={hideorder} onSubmit={this.handleSubmit} onKeyPress={event => {
      if (event.which === 13) {
        event.preventDefault();
        }
      }}>
            <table style={ hideNike } className="table table-sm table-bordered">
                    <tr className="thead-light">
                    <th width="25%"><img src={require('./pic/1.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike AIR 1 X FEAR OF GOD RAID'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike AIR 1 X FEAR OF GOD RAID'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle1}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/2.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike AIR X FEAR OF GOD STRAP'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike AIR X FEAR OF GOD STRAP'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle2}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/3.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike X AMBUSH® AIR MAX 180 HIGH'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike X AMBUSH® AIR MAX 180 HIGH'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle3}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/4.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike AIR MAX TAILWIND IV'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike AIR MAX TAILWIND IV'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle4}>{this.props.buttonLabel}Detail</Button></th>

                    </tr>
                    <tr className="thead-light">
                    
                    <th width="25%"><img src={require('./pic/5.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike Air VaporMax Flyknit 3'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike Air VaporMax Flyknit 3'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle5}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/6.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike Air Max 97 LX'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike Air Max 97 LX'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle6}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/7.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike SB Air Max Janoski 2'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike SB Air Max Janoski 2'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle7}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/8.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nNike Air Max 720 SATRN'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nNike Air Max 720 SATRN'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle8}>{this.props.buttonLabel}Detail</Button></th>
                    </tr>
                    </table>
           <table style={ hideAdidas } className="table table-sm table-bordered">
                    <tr className="thead-light">
                    <th width="25%"><img src={require('./pic/9.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nZX 4000 4D '}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nZX 4000 4D '}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle9}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/10.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nYEEZY BOOST 700 ANALOG'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nYEEZY BOOST 700 ANALOG'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle10}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/11.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nULTRABOOST 19 SHOES'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nULTRABOOST 19 SHOES'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle11}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/12.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nMARVEL’S BLACK PANTHER'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nMARVEL’S BLACK PANTHER'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle12}>{this.props.buttonLabel}Detail</Button></th>

                    </tr>
                    <tr className="thead-light">
                    
                    <th width="25%"><img src={require('./pic/13.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nPHARRELL WILLIAMS X BYW CNY SHOES'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nPHARRELL WILLIAMS X BYW CNY SHOES'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle13}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/14.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nCOUNTRY X KAMANDA SHOES'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nCOUNTRY X KAMANDA SHOES'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle14}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/15.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nALPHABOUNCE INSTINCT'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nALPHABOUNCE INSTINCT'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle15}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/16.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nLACOMBE DONALD GLOVER SHOES'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nLACOMBE DONALD GLOVER SHOES'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle16}>{this.props.buttonLabel}Detail</Button></th>
                    </tr>
                    </table>
            <table style={ hideConverse } className="table table-sm table-bordered">
                    <tr className="thead-light">
                    <th width="25%"><img src={require('./pic/17.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nALL STAR OX MILEY2'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nALL STAR OX MILEY2'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle17}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/18.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nJACK PURCELL JACK – OX – LEATHER'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nJACK PURCELL JACK – OX – LEATHER'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle18}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/19.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nALL STAR HI MILEY2 '}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nALL STAR HI MILEY2 '}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle19}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/20.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nCHUCK TAYLOR ALL STAR'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nCHUCK TAYLOR ALL STAR'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle20}>{this.props.buttonLabel}Detail</Button></th>

                    </tr>
                    <tr className="thead-light">
                    
                    <th width="25%"><img src={require('./pic/21.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR 2V – OX – ICON VIOLET'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR 2V – OX – ICON VIOLET'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle21}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/22.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR – OX – LEATHER'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR – OX – LEATHER'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle22}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/23.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR – OX – BLUE FIR'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR – OX – BLUE FIR'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle23}>{this.props.buttonLabel}Detail</Button></th>
                    <th width="25%"><img src={require('./pic/24.jpg')} class="img-thumbnail" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR – OX – SUEDE'}></img><Button color="primary" onClick={() => this.state.item_name=this.state.item_name+'\nONE STAR – OX – SUEDE'}>{this.props.buttonLabel}Add to Cart</Button>  <Button color="warning" onClick={this.toggle24}>{this.props.buttonLabel}Detail</Button></th>
                    </tr>
                    </table><div>
                    <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                      <ModalHeader toggle={this.toggle1}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle1}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                      <ModalHeader toggle={this.toggle2}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle2}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
                      <ModalHeader toggle={this.toggle3}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle3}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}>
                      <ModalHeader toggle={this.toggle4}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle4}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
                      <ModalHeader toggle={this.toggle5}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle5}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className}>
                      <ModalHeader toggle={this.toggle6}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle6}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal7} toggle={this.toggle7} className={this.props.className}>
                      <ModalHeader toggle={this.toggle7}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle7}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal8} toggle={this.toggle8} className={this.props.className}>
                      <ModalHeader toggle={this.toggle8}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle8}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal9} toggle={this.toggle9} className={this.props.className}>
                      <ModalHeader toggle={this.toggle9}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle9}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal10} toggle={this.toggle10} className={this.props.className}>
                      <ModalHeader toggle={this.toggle10}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle10}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal11} toggle={this.toggle11} className={this.props.className}>
                      <ModalHeader toggle={this.toggle11}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle11}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal12} toggle={this.toggle12} className={this.props.className}>
                      <ModalHeader toggle={this.toggle12}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle12}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal13} toggle={this.toggle13} className={this.props.className}>
                      <ModalHeader toggle={this.toggle13}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle13}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal14} toggle={this.toggle14} className={this.props.className}>
                      <ModalHeader toggle={this.toggle14}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle14}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal15} toggle={this.toggle15} className={this.props.className}>
                      <ModalHeader toggle={this.toggle15}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle15}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal16} toggle={this.toggle16} className={this.props.className}>
                      <ModalHeader toggle={this.toggle16}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle16}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal17} toggle={this.toggle17} className={this.props.className}>
                      <ModalHeader toggle={this.toggle17}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle17}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal18} toggle={this.toggle18} className={this.props.className}>
                      <ModalHeader toggle={this.toggle18}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle18}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal19} toggle={this.toggle19} className={this.props.className}>
                      <ModalHeader toggle={this.toggle19}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle19}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal20} toggle={this.toggle20} className={this.props.className}>
                      <ModalHeader toggle={this.toggle20}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle20}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal21} toggle={this.toggle21} className={this.props.className}>
                      <ModalHeader toggle={this.toggle21}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle21}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal22} toggle={this.toggle22} className={this.props.className}>
                      <ModalHeader toggle={this.toggle22}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle22}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal23} toggle={this.toggle23} className={this.props.className}>
                      <ModalHeader toggle={this.toggle23}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle23}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal24} toggle={this.toggle24} className={this.props.className}>
                      <ModalHeader toggle={this.toggle24}>{this.head}</ModalHeader>
                      <ModalBody>
                        {this.information}
                      </ModalBody>
                      <ModalFooter>
                    
                      <Button color="secondary" onClick={this.toggle24}>Exit</Button>
                      </ModalFooter>
                    </Modal>
                   </div>
                    
          <div className="row" >
                <div className="col-8">
                  <div className="form-row">
                    <div className="col-4">
                      <input type="text" name="name" className="form-control" placeholder="name" onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <br></br><br></br>
                    <div className="col-12">
                      <textarea type="text" name="address" className="form-control" placeholder="address" onChange={this.handleChange} value={this.state.address}/>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="col">
                    <button type="submit" class="btn btn-primary">Order</button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-primary" onClick={()=>alert("ในตระกร้ามีสินค้าดังนี้"+this.state.item_name)}>Cart</button>
                    </div>
                  </div>
                </div>
            </div>
            </form>
        <hr/>
        <Button color="danger" onClick={this.toggle}>Show order</Button>
                <Fade in={this.state.fadeIn}>
                <table className="table table-hover">
                    <tr className="thead-light">
                      <th width="20%">item_name</th>
                      <th width="20%">name</th>
                      <th width="55%">address</th>
                      <th width="5%">Delete</th>
                    </tr>
                    {
                        this.state.orders.map((item) => {
                          return (
                              <tr>
                                <td>{item.item_name}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td><button className="btn btn-danger btn-md" onClick={() => this.removeItem(item.user_id)}>Delete</button></td>
                              </tr>
                          )
                        })
                    }
                </table>
                </Fade>

          </div>
      </div>
    );
  }
}

export default App;