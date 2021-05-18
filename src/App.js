import logo from './logo.svg';
import './App.css';
import './bootstrap-4.6.0-dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import { useState } from 'react';
import { event } from 'jquery';
import { Redirect } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOnline, setIsOnline] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("Sport");
  const [date, setDate] = useState(new Date());

  const [wrongInput, setWrongInput] = useState(false);
  const [success, setSuccess] = useState(false);

  const [news, setNews] = useState([
    {
      title: "Cristiano Ronaldo marked his 600th league appearance with his 20th Serie A goal of the season as Juventus comfortably beat Spezia.",
      description: "All three goals came in the second half, with Ronaldo getting his side's third when he finished off a quick counter-attack in the final minute.",
      category: "Sport",
      url: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/1551E/production/_117362378_cristianoronaldo.jpg",
      date: new Date("2021-02-18 17:07:00"),
    },
    {
      title: "Rugby World Cup 2021 set to be postponed until 2022, World Rugby announces",
      description: "The tournament is currently scheduled to be held in New Zealand between 18 September and 16 October.",
      category: "Sport",
      url: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/1537A/production/_97560968_nzpa.jpg",
      date: new Date("2021-02-18 17:10:53"),
    },
    {
      title: "Australian Open: Stefanos Tsitsipas' family bond & the day he nearly drowned",
      description: "It's a simple item - a T-shirt that reads: USSR 1956 - but it helps illustrate something of the unique personality behind one of tennis' most intriguing talents.",
      category: "Sport",
      url: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/2824/production/_116767201_tsitsipas_getty2.jpg",
      date: new Date("2021-02-18 17:13:45"),
    },
    {
      title: "England's Tammy Beaumont moves to top of ODI batting rankings",
      description: "The 29-year-old moved up five places in the International Cricket Council standings after making 71, 72 not out and 88 not out in the 2-1 series win in New Zealand.",
      category: "Sport",
      url: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/458D/production/_117350871_tammy_beaumont_getty4.jpg",
      date: new Date("2021-02-18 17:20:13"),
    },
    {
      title: "Lewis Hamilton still committed as Mercedes launch 2021 Formula 1 car",
      description: "The seven-time champion, 36, said he had twin goals of winning an eighth title and pushing for real change on diversity within motorsport this year.",
      category: "Sport",
      url: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/17A8A/production/_117360969_hamilton.jpg",
      date: new Date("2021-02-18 17:25:02"),
    },




    //////////////Politics
    {
      title: "White House pulls Tanden nomination",
      description: "Biden said in a statement that Tanden had requested to withdraw her name from consideration, and that she would still serve in his administration.",
      category: "Politics",
      url: "https://cdn.cnn.com/cnnnext/dam/assets/210228114753-neera-tanden-210209-large-tease.jpg",
      date: new Date("2021-02-18 17:29:39"),
    },

    {
      title: "Biden launches blitz of action to prod schools to reopen",
      description: "Joe Biden is tapping a federal agency to facilitate vaccinations for teachers and child care workers.",
      category: "Politics",
      url: "https://static.politico.com/dims4/default/26bc198/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F06%2Fa7%2Ff4aa5dd54f038ab7cf98a3a36145%2Fgettyimages-1230276296-1.jpg",
      date: new Date("2021-02-23 17:28:00"),
    },
    {
      title: "House fight for Trump's financial records poised to stretch into the summer",
      description: "Congressional investigators fighting to access former President Donald Trump’s financial records are planning for a lengthy battle that stretches deep into 2021, according to a proposed legal schedule unveiled by House counsel Doug Letter on Tuesday.",
      category: "Politics",
      url: "https://static.politico.com/dims4/default/94ba6f1/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Ff4%2F52%2Ff85b04ac48b18f2b092370da0b6a%2Fgettyimages-1304610020-1.jpg",
      date: new Date("2021-02-25 19:52:40"),
    },



    //////////////////Business
    {
      title: "Volvo Cars to go fully electric by 2030",
      description: "Volvo Cars is only going to sell electric vehicles by 2030, the Swedish firm has said.",
      category: "Business",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/2232/production/_117345780_volvo.jpg",
      date: new Date("2021-02-18 18:00:09"),
    },
    {
      title: "Farms are going to need different kinds of robots",
      description: "On a lush, green patch of rolling farmland in Australia's Queensland, cows are quietly grazing in a scene that is replicated around the world.",
      category: "Business",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/D0FC/production/_117300535_rob2.jpg",
      date: new Date("2021-02-18 18:05:28"),
    },
    {
      title: "Zoom sees more growth after 'unprecedented' 2020",
      description: "Zoom boss Eric Yuan, whose business exploded during the pandemic, says working from home is here to stay.",
      category: "Business",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/4C76/production/_117347591_gettyimages-1177090302.jpg",
      date: new Date("2021-02-18 18:06:41"),
    },
    {
      title: "Some UK arrivals 'still waiting' for quarantine Covid tests",
      description: "Some international arrivals to the UK have waited nine days for Covid test kits that should be taken on day two of a 10-day quarantine period.",
      category: "Business",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/6DDE/production/_117362182_heathrowfridayqueue.jpg",
      date: new Date("2021-02-18 18:10:15"),
    },
    





    {
      title: "Contraception app Natural Cycles swipes at new rival from Clue",
      description: "Natural Cycles, the first app to be cleared by US regulators for use as a contraceptive, has criticised the approval of a new birth control service from period tracker app Clue.",
      category: "Technology",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/6BFD/production/_117354672_baby.jpg",
      date: new Date("2021-02-18 22:45:50"),
    },
    {
      title: "'Drunk' robot vacuums spark complaints from owners",
      description: "Owners of Roomba robot vacuums have complained the devices appear 'drunk' following a software update.",
      category: "Technology",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1BD4/production/_117342170_mediaitem117342169.jpg",
      date: new Date("2021-02-18 22:45:59"),
    },
    {
      title: "How can we make washing machines last?",
      description: "When his family washing machine stopped working just a few months outside its warranty, Johan Rääf was less than impressed.",
      category: "Technology",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/10228/production/_117288066_repair.johanraafphoto-1copy.jpg",
      date: new Date("2021-02-18 22:47:01"),
    },
    {
      title: "Fortnite: From piano player to pro gamer - aged just eight",
      description: "The highlight of most children's eighth birthday is blowing out the candles on their cake.",
      category: "Technology",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/9081/production/_117339963_josephdeen3.png",
      date: new Date("2021-02-23 22:50:36"),
    },

    {
      title: "Anti-Covid vaccine tweets face five-strikes ban policy",
      description: "Twitter is to ban users who repeatedly tweet harmful misinformation about Covid-19 vaccines.",
      category: "Technology",
      url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5F0F/production/_117353342_mediaitem117353339.jpg",
      date: new Date("2021-02-18 22:55:56"),
    },
  ]);



const users = [{email:"akerke@gmail.com",password:"qweqwe"},{email:"26535@iitu.edu.kz",password:"123"}]

const handleEmailChange = event =>{
  setEmail(event.target.value);
}

const handlePasswordChange = event =>{
  setPassword(event.target.value);
}

const handleSubmit = event =>{
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      setIsOnline(true);
      break;
    }
  }
  if (!isOnline) {
    setWrongInput(true);
  }
  event.preventDefault();
}

function handleLogout(){
  setWrongInput(false);
  setIsOnline(false);
  setEmail("");
  setPassword("");
}

const handleAddNew = event=>{
  var date = new Date();
  const newObject = { title, description, category, url, date };
  setNews((news) => news.concat(newObject));
  setSuccess(true);
  setTitle("");
  setUrl("");
  setDescription("");
  setCategory("Sport");
  setDate(new Date());
  event.preventDefault();
  
}


const handleInputChange = event =>{
  const target = event.target;
  setSuccess(false);
  if (event.target.name == "title") {
    setTitle(target.value);
  }
  if (event.target.name == "description") {
    setDescription(target.value);
  }
  if (event.target.name == "url") {
    setUrl(target.value);
  }
  if (event.target.name == "category") {
    setCategory(target.value);
  }
}




  return (
    <div>
      <Navbar
        success={success}
        wrongInput={wrongInput}
        title={title}
        description={description}
        url={url}
        category={category}
        handleInputChange={handleInputChange}
        handleAddNew={handleAddNew}
        news={news}
        handleLogout={handleLogout}
        isOnline={isOnline}
        handleSubmit={handleSubmit}
        email={email}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
      />
      <Footer/>
    </div>
  );
}

export default App;


/*import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected }
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}*/
