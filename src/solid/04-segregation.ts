interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;

}

export class Tucan implements Bird{

    public fly(): void {
        console.log('Tucan is flying');
    }

    public eat(): void {
        console.log('Tucan is eating');
    }

    public run(): void {
        console.log('Tucan is running');
    }

    public swim(): void {
        throw new Error('Ostrih can not swim');
    
    }
}


export class HuminBird implements Bird{

    public fly(): void {
        console.log('Hummingbird is flying');
    }

    public eat(): void {
        console.log('Hummingbird is eating');
    }

    public run(): void {
        console.log('Hummingbird is running');
    }

    public swim(): void {
        throw new Error('Ostrih can not swim');
    
    }
}

export class Ostrih implements Bird{

    public fly(): void {
        throw new Error('Ostrih can not fly');
    }

    public eat(): void {
        console.log('Ostrih is eating');
    }

    public run(): void {
        console.log('Ostrih is running');
    }

    public swim(): void {
        throw new Error('Ostrih can not swim');
    
    }
}


export class Penguin implements Bird{

    public fly(): void {
        throw new Error('Penguin can not fly');
    }

    public eat(): void {
        console.log('Penguin is eating');
    }

    public run(): void {
        console.log('Penguin is running');
    }

    public swim(): void {
        console.log('Penguin is swimming');
    }


}