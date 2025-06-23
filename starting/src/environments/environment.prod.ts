import { keys } from "./environment.keys";

export const environment = {
    prodution: true,
    firebaseConfig: {
        apiKey: keys.firebaseApiKey,
        authDomain: "starting-class-hit.firebaseapp.com",
        projectId: "starting-class-hit",
        storageBucket: "starting-class-hit.firebasestorage.app",
        messagingSenderId: "422178734526",
        appId: "1:422178734526:web:3a5342efae8765424539ef"
    },

    weatherKey: keys.weatherApiKey,
    reqresKey: keys.reqresApiKey,
}


