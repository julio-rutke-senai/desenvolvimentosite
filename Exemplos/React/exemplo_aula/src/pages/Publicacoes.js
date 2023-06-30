import logo from '../logo.svg';
import { Cadastro } from '../components/Cadastro';
import List from '../components/List';
import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import axios from 'axios';

const Publicacoes = () => {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setItens(response.data.slice(0, 10))
            })
            .catch((error) => {
                console.log(error)
            })

            console.log(process.env)
        
    },[])
    
    const todoHandler = (item) => {
        const data = {
            userId: 1,
            title: item,
            body: item
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
            console.log(response)
            setItens([...itens, response.data])
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{itens.length} Publicações</h1>
            </header>
            <main>
                <section id="papers">
                <Cadastro place="Informe sua Publicação" handler={todoHandler} />
                <List>
                    {
                        itens.map(
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
    )
}

export default Publicacoes;