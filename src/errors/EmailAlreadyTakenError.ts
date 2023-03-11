export class EmailAlreadyTakenError extends Error{

    constructor(public message: string){
        super(message);
    }

    getMessage(){
        return this.message;
    }
}