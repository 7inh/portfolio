const FIREBASE_CONFIG = {
    dev: {
        apiKey: import.meta.env.VITE_DEV_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_DEV_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_DEV_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_DEV_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_DEV_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_DEV_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_DEV_FIREBASE_MEASUREMENT_ID,
    },
    prod: {
        apiKey: import.meta.env.VITE_PROD_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_PROD_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROD_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_PROD_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_PROD_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_PROD_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_PROD_FIREBASE_MEASUREMENT_ID,
    },
};

const hosts = {
    dev: {
        API_HOST: import.meta.env.VITE_DEV_API_HOST,
        FIREBASE: FIREBASE_CONFIG.dev,
    },
    prod: {
        API_HOST: import.meta.env.VITE_PROD_API_HOST,
        FIREBASE: FIREBASE_CONFIG.prod,
    },
};

const hostByEnv = new Proxy(hosts, {
    get: (target, prop) => {
        return Reflect.get(target, prop);
    },
});

export const ENV = import.meta.env.VITE_ENV === "production" ? "prod" : "dev";
const { API_HOST, FIREBASE } = hostByEnv[ENV];
export { API_HOST, FIREBASE };
