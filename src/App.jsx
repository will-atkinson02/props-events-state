import { useState } from "react"
import AboutPage from "./components/AboutPage"
import Article from "./components/Article"
import Button from "./components/Button"
import ContactPage from "./components/ContactPage"
import Counter from "./components/Counter"
import FeaturedArticle from "./components/FeaturedArticle"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import NewsLetterSignup from "./components/NewsLetterSignup"
import Status from "./components/Status"


function App() {
  

  let ver = 0

  // Show home, hide about and contact
  const [home, setHome] = useState('block')

  function showHome() {
    if (home === 'hidden') {
      setHome('block')
      setAbout('hidden')
      setContact('hidden')
    }
  }


  // Show about, hide home and contact
  const [about, setAbout] = useState('hidden')

  function showAbout() {
    if (about === 'hidden') {
      setAbout('block')
      setHome('hidden')
      setContact('hidden')
    }
  }


  // Show contact, hide home and about
  const [contact, setContact] = useState('hidden')

  function showContact() {
    if (contact === 'hidden') {
      setContact('block')
      setHome('hidden')
      setAbout('hidden')
    }
  }


  return (
    <div>
      <h1 className="text-amber-300" >Hello world</h1>

      <Counter />

      <div>
        
        <button className="border-red-700" onClick={showHome}>Show Home Page</button>
        <button className="border-red-700" onClick={showAbout}>Show About Page</button>
        <button className="border-red-700" onClick={showContact}>Show Contact Page</button>
        
        <div className={home}>
          <HomePage image="https://www.zillowstatic.com/bedrock/app/uploads/sites/47/GA_ATL_PITTSBURGH_82772_161_RT-2_RT-5f7457.jpg" />
        </div>
        
        
        <div className={about}>
          <AboutPage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQWCwekV1T_5apb5sMiFJ75fDmKTCOF_Y0w&s" />
        </div>
        
        
        <div className={contact}>
          <ContactPage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQooFgoJW04XKRQd7KsNCKVOSCkhWDVF1fluw&s" />
        </div>
        
      </div>




      <FeaturedArticle image="https://www.dictionary.com/e/wp-content/uploads/2019/04/chungus.jpg" title="The Amazing Big Chungus" para="Big Chungus refers to an image of the cartoon character Bugs Bunny, usually captioned with the phrase 'Big Chungus' and presented as a game for PlayStation 4 console. The word 'chungus' was coined by video game journalist Jim Sterling several years before the meme became popular. Starting in July 2019, the meme regained ironic popularity on iFunny and certain parts of Reddit, particularly as a part of Reddit Moment memes." />
      <FeaturedArticle image="https://m.media-amazon.com/images/M/MV5BYjQwNzMzOGUtYmVkMS00ZmUxLWEwMDAtMWRmYTczZjQ3NWU3XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_FMjpg_UX1000_.jpg" title="Jimi Hendrix" para='James Marshall "Jimi" Hendrix (born Johnny Allen Hendrix; November 27, 1942 – September 18, 1970) was an American guitarist, songwriter and singer. Although his mainstream career spanned only four years, he is widely regarded as the greatest and one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century. The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music."' />
      
      <Status />

      <NewsLetterSignup />

      <Footer />

    </div>

  )
}

export default App
