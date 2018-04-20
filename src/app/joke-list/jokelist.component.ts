import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from './../joke/joke.component';

@Component({
    selector: 'joke-list',
    templateUrl: './jokelist.component.html',
    styleUrls:['./jokelist.component.css']   
})

export class JokeListComponent{
    jokes: Joke[];
    @Output() jokeDeleted = new EventEmitter();
    constructor(){
        this.jokes = [
            new Joke('What did the cheese say when it looked in the mirror?', 'Halloumi (Hello You)'),
            new Joke('What kind of cheese do you use to disguise a small horse?','Mask-a-pony (Mascarpone)'),
            new Joke('A kid threw a lump of cheddar at me','It was not very mature'),
        ];
    }
    toggle(joke){
        joke.hide = !joke.hide;
    }
    addJoke(joke){
        this.jokes.unshift(joke);
    }
    deleteJoke(joke){
        const indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete, 1);
        }

    }
}


