import React, { Component } from 'react';

class Users extends Component {

    state = {
        users: [] 
    }

    //componente que se ejecuta una vez montado, es decir una vez cargado en la pantalla.
    async componentDidMount(){
        //await significa que al leer va a tomar algo de tiempo
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        //actualizo los datos
        this.setState({users: data})
    }

    render(){
        return(
            <div>
                <h1>Listado de usuarios: 10 users</h1>
                {
                    this.state.users.map(user => {
                        return (
                            <div className="user-datos" key={user.id}>
                                <h2>{user.name}</h2>
                                <p>
                                    Username: {user.username}<br/>
                                    Email: {user.email}<br/>
                                    <h3>Address:</h3>
                                    Street: {user.address.street} - {user.address.suite} - {user.address.city}<br/>
                                    Phone: {user.phone}<br/>
                                    Website: {user.website}<br/>
                                    <h3>Company</h3>
                                    Name: {user.name}<br/>
                                    CatchPhrase: {user.company.catchPhrase}
                                </p>
                            </div>
                        )
                    })
                } 

                <h4>Por Gabriel Casafu - gabrielcasafu@gmail.com</h4>   
            </div>
        )
    }
}

export default Users;