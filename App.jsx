import { useState } from 'react';
import './App.css';

function App() {

  const [wiadomosc, setWiadomosc] = useState("")
  const [listaWiadomosci, setListaWiadomosci] = useState({
    lista: []
  })

  const wykresl = (id) => {
    
    const nowa_lista = (listaWiadomosci.lista).filter(wiadomosc => wiadomosc.id != id)
    console.log(nowa_lista)
    
    setListaWiadomosci(
      {
        lista:[
          ...nowa_lista]
      }
    )
  }

  const obslugaWiadomosci = () => {

    setListaWiadomosci(
      { ...listaWiadomosci,
         lista: [ 
          ...listaWiadomosci.lista,
          {id: listaWiadomosci.lista.length+1, tekst: wiadomosc, czyWykreslony: false}
         ]
      }
    )

    setWiadomosc("")
  }
const obslugaTekstu = (e) => {
  setWiadomosc(e.target.value)
}

return (
  <main>
    <section>
      <fieldset className='wiadomosc'>
        <label htmlFor="dane">Wprowadź wiadomość</label>
        <input type="text" value={wiadomosc} onChange={obslugaTekstu} name="dane" id="dane" placeholder='Twoja wiadomość' />
        <button onClick={obslugaWiadomosci}>Wyślij wiadomość</button>
      </fieldset>
    </section>
    <section>
      <ul>
        {
          (listaWiadomosci.lista).map((el) =>
            (<li key={el.id} className={el.czyWykreslony ? 'wykreslony': 'nie'}>{el.tekst} <input type="checkbox" onChange={() => wykresl(el.id)} /></li>)
          )
        }
      </ul>
    </section>

  </main>
)
}

export default App;
