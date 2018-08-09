
import {observable, action, computed} from 'mobx'

class BirdStore {
    @observable birds = []; //anuthing that's observable, this is the data you want to keep track of

    //action is a function where you change the value of the property you're observing
    @action addBird = (bird) => {
        this.birds.push(bird);
    }

    @computed get birdCount() { //reacting to changes
        return this.birds.length;
    }
}

const store = new BirdStore();
export default store; //dealing with just one instance of birdstore