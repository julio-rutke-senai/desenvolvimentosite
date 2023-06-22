import logo from '../logo.svg';
import { Cadastro } from '../components/Cadastro';
import List from '../components/List';
import { useState } from 'react';
import ItemList from '../components/ItemList';

export default function Home () {
    const [itens, setItens] = useState([]);

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
                <Cadastro handler={todoHandler} />
                <List>
                    {
                        itens.map(
                            (item) => (
                                <ItemList nome={item} />
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