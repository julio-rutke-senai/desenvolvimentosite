import logo from '../logo.svg';
import { Cadastro } from '../components/Cadastro';
import List from '../components/List';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import axios from 'axios';

export default function Home () {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                setItens(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        
    },[])

    const todoHandler = (item) => {
        setItens([...itens, item])
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>To Do List</h1>
            </header>
            <main>
                <section id="papers">
                <Cadastro place="Informe sua Tarefa" handler={todoHandler} />
                <List>
                    {
                        itens.slice(0, 9).map(
                            ({title: item, id}) => (
                                <ItemList key={id} nome={item} />
                            )
                        )
                    }
                    
                </List> 

                </section>     
            </main>
            <footer>App Julio &copy; All Rights Reserved</footer>
        </div>
    );
}