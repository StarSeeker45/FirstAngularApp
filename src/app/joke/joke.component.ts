import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string){
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle(){
        this.hide = !this.hide;
    }
}

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent{
    @Input() joke: Joke;
    

    id: number;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            // console.log(params);
            this.id = params.id;
        });
    }
    
    @Output () jokeDeleted = new EventEmitter();        
    deleteJoke() {
        this.jokeDeleted.emit(this.joke);
    }
}

// <button [routerLink]="['jokes', id]" class="btn btn-lg btn-secondary" role="button">Go to Jokes {{ id }}</button>
