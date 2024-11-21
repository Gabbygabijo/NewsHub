import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the user data type

export type User = {
  id?: string;
  username: string;
  password: string
};


// Define the context type
type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

// Create the UserContext with a default value of null
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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