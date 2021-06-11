import React from 'react'
import './App.css'

import Primeiro from "./components/basicos/Primeiro"

import ComParametro from './components/basicos/ComParametro'

import ComFilhos from './components/basicos/ComFilhos'

import Card from './components/layout/Card'

import Repeticao from'./components/basicos/Repeticao'
import Condicional from'./components/basicos/Condicional'
import CondicionalComIf from'./components/basicos/CondicionalComIf'

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
    </div>