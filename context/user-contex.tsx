import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStoredData } from '@/utilities/local-data';

// Define the user data type
export type User = {
  id?: string;
  username: string;
  password: string;
};

// Define the context type
type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
};

// Create the UserContext with a default value of null
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const lastLogin = await getStoredData('user');
        if (lastLogin) {
          const data = JSON.parse(lastLogin);
          setUser(data);
        }
      } catch (error) {
        console.log('Error restoring user session:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadStoredUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};




// export const UserContex = React.createContext<UserProp>({
//     "email": "",
//     "firstname": "",
//     "lastname": "",
//     "phone_number": "",
//     "auth_type": null,
//     "roles": [],
//     "image": null
// })

// export const UserProvider = ({ children }: { children: any }): JSX.Element => {
//     const [userDefault, setUserDefault] = React.useState<UserProp>({
//         "email": "",
//         "firstname": "",
//         "lastname": "",
//         "phone_number": "",
//         "auth_type": null,
//         "roles": [],
//         "image": null
//     })

//     const updatedData = (newData: any)=> {
//         setUserDefault((userDefault)=> ({...userDefault, ...newData}))
//     }
//     return (
//         <UserContex.Provider value={{...userDefault, ...updatedData}}>
//             {children}
//         </UserContex.Provider>
//     )
// }