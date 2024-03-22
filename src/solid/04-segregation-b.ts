interface Bird {

    eat(): void;

}

interface FlyingBird {
    fly(): number;

}

interface SwimmingBird {
    swim(): void;

}

interface RunningBird {
    run(): void;

}

class Tucan implements Bird, FlyingBird{

    public fly(): number {
        console.log('Tucan is flying');
        return 100;
    }

    public eat(): void {
        console.log('Tucan is eating');
    }

}


class HuminBird implements Bird, FlyingBird{

    public fly(): number {
        console.log('Hummingbird is flying');
        return 200;
    }

    public eat(): void {
        console.log('Hummingbird is eating');
    }

}

class Ostrih implements Bird, RunningBird{

    public eat(): void {
        console.log('Ostrih is eating');
    }

    public run(): void {
        console.log('Ostrih is running');
    }


}


class Penguin implements Bird, SwimmingBird{


    public eat(): void {
        console.log('Penguin is eating');
    }

    public swim(): void {
        console.log('Penguin is swimming');
    }


}