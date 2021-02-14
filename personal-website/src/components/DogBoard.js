import React, { Component } from 'react';
import { Map } from 'immutable';
import DogPosting from './DogPosting';

class DogBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: Map(),
            dogID: 0,
            newDogName: '',
            newDogBreed: '',
            newDogImage: '',
        }
    }

    newDogNameFunction = (event) => {
        this.setState({ newDogName: event.target.value })
    }

    newDogBreedFunction = (event) => {
        this.setState({ newDogBreed: event.target.value })
    }

    newDogImageFunction = (event) => {
        this.setState({ newDogImage: event.target.value })
    }

    saveDogInfo = () => {
        let dogData = {
            name: this.state.newDogName,
            breed: this.state.newDogBreed,
            image: this.state.newDogImage,
        }

        this.setState({
            dogs: this.state.dogs.set(this.state.dogID, dogData),
            dogID: this.state.dogID + 1,
        })
    }

    delete = (id) => {
        this.setState({dogs: this.state.dogs.delete(id)})
    }

    save = (id, field) => {
        this.setState({dogs:this.state.dogs.update(id, (n) => { return Object.assign({}, n, field); })})
    }

    render() {
        const allDogs = this.state.dogs.entrySeq().map(
            ([id, dog]) => {
                return (
                    <DogPosting
                        save={this.save}
                        delete={this.delete}
                        name={dog.name}
                        breed={dog.breed}
                        dogURL={dog.image}
                        id={id}
                        key={id}
                    />
                );
            }
        );
        return (
            <div>
                <p> this is the dog board </p>
                {allDogs}
                <p>Add a dog!</p>
                <p>Enter Name: </p>
                <input type='text' value={this.state.newDogName} onChange={this.newDogNameFunction} />

                <p>Enter breed:</p>
                <input type='text' value={this.state.newDogBreed} onChange={this.newDogBreedFunction} />

                <p>Enter Image URL:</p>
                <input type='text' value={this.state.dogURL} onChange={this.newDogImageFunction} />
                <button onClick={this.saveDogInfo}>Save</button>

            </div>
        );
    }
}

export default DogBoard;