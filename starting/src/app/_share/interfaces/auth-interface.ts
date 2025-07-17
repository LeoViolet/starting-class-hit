import { User, UserCredential } from "firebase/auth";
import { Observable } from "rxjs";

export interface AuthInterface {

    signIn(emai: string, password: string): Observable<UserCredential>

    logOut(): Observable<void>;

    isAuthenticated(): boolean;

    getUser(): Observable<User | null>

}
