import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainSearch />} />

        <Route path="/:companyName" element={<CompanySearchResults />} />

        <Route path="/favourites" element={<Favourites />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

// TERMINALE
// npm i bootstrap @4.6.1
// npm i react-bootstrap@1.6.5
// npm i react - router - dom
// npm i @reduxjs/toolkit
// npm i react - redux



// TASKS:

//     Implementa il pattern Redux nell’applicazione, con uno store e un reducer.

//     Fornisci all’utente la capacità di aggiungere un’azienda ad un elenco di preferiti.
//     Non c’è limite al numero di aziende che possono essere aggiunte tra i preferiti.
//     Questo elenco di preferiti deve essere salvato interamente nel Redux Store, e renderizzato sotto forma di lista in una pagina separata(es.su una rotta / favourites).

//     Non dimenticare che anche la lista renderizzata su / favourites deve avere il nome dell’azienda cliccabile come nella pagina principale.[EXTRA]

//     Permetti all’utente anche di rimuovere un’azienda dalla lista dei preferiti.
