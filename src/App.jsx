import React from 'react'
import './App.css'

import Primeiro from "./components/Primeiro"

import ComParametro from './components/ComParametro'

import ComFilhos from './components/ComFilhos'

import Card from './components/layout/Card'

import Repeticao from'./components/Repeticao'
import Condicional from'./components/Condicional'
import CondicionalComIf from'./components/CondicionalComIf'

export default props =>
    <div className="App">

        <Card title="Primeiro Componente">
            <Primeiro/>
        </Card>

        <Card title="Componente Com Parametro">
            <ComParametro title="Esse é o teste" subtitulo="Esse é o subtitulo" />
        </Card>

        <Card title="Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Lucas</li>
                    <li>Jhow</li>
                    <li>Dudu</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card title="Com repetição">
           <Repeticao></Repeticao>
        </Card>

        <Card title="Com Condicional ternário">
           <Condicional numero={11}></Condicional>
        </Card>

        <Card title="Com Condicional IF ELSE">
           <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>




        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Lucas</li>
                <li>Jhow</li>
                <li>Dudu</li>
            </ul>
        </ComFilhos> */}

        {/* <Primeiro></Primeiro>
        <ComParametro title="Esse é o teste" subtitulo="Esse é o subtitulo" />
        <ComParametro title="Segundo title" subtitulo="Esse é o epa" /> */}
    </div>