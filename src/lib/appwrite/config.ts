//import appwrite functionalities
import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, 
    /* throws an error as typescript doesn't know about the env property on import.meta as it's not part of the standard 
    ImportMeta type (As we are using vite. Vite extends ImportMeta with a custom env object). 
    - Solution,
    1. You need to declare the ImportMeta type and extend it to include the env property (long-term) use vite-env.d.ts file.
    2. use (import meta as any).env.VITE_APPWRITE_PROJECT_ID - short term (it bypasses the type)
    */
   url: import.meta.env.VITE_APPWRITE_URL,
}

export const client = new Client(); 

//configure client
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

//exports a new instance of each service to use appwrite features
export const account = new Account(client); 
export const databases = new Databases(client); 
export const storage = new Storage(client); 
export const avatars = new Avatars(client); 