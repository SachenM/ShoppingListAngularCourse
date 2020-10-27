export class User {
    constructor(
        public email:string,
        public id:string,
        private _token:string,
        private _tokenExpirationDate:Date
    ){}
    

    get token(){
        console.log('Get Token');
        console.log(Boolean(!this._tokenExpirationDate));
        console.log(Boolean(new Date() > this._tokenExpirationDate));
        console.log(new Date() );
        console.log(this._tokenExpirationDate);
        
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate ){
            return null
        }else {
            return this._token;
        }
        
    }
}