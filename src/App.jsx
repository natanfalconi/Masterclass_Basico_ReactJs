import React from 'react'
import './App.css'

import Primeiro from "./components/basicos/Primeiro"

import ComParametro from './components/basicos/ComParametro'

import ComFilhos from './components/basicos/ComFilhos'

import Card from './components/layout/Card'

import Repeticao from'./components/basicos/Repeticao'
import Condicional from'./components/basicos/Condicional'
import CondicionalComIf from'./components/basicos/CondicionalComIf'

import Pai from "./components/comunicacao/direta/Pai"
import Super from "./components/comunicacao/indireta/Super"

import Input from "./components/form/Input"

export default props =>
    <div className="App">

        <Card title="1 - Primeiro Componente" color="#fa6900">
            <Primeiro/>
        </Card>

        <Card title="2 - Componente Com Parametro" color="#394c6f">
            <ComParametro title="Esse é o teste" subtitulo="Esse é o subtitulo" />
        </Card>

        <Card title="3 - Componente Com Filhos" color="#008bba">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Lucas</li>
                    <li>Jhow</li>
                    <li>Dudu</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card title="4 - Com repetição" color="#d96459">
           <Repeticao></Repeticao>
        </Card>

        <Card title="5 - Com Condicional ternário" color="#ff85cb">
           <Condicional numero={11}></Condicional>
        </Card>

        <Card title="6 - Com Condicional IF ELSE" color="#92b06a">
           <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>

        <Card title="7 - Comunicação Direta" color="#4298b5">
           <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card title="8 - Comunicação Indireta" color="#000">
           <Super sobrenome="Freitas"></Super>
        </Card>

        <Card title="9 - Comunicação Indireta" color="#9c0f5f">
           <Input sobrenome="Freitas"></Input>
        </Card>
    </div>