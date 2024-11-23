import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key: string, value: string):Promise<boolean> => {
    let chk:boolean = false
    try {
       await AsyncStorage.setItem(key, value);
       chk=true
    } catch (error) {
      console.log(error)
      chk=false
    }
    finally{
        return chk
    }
  };

export const getStoredData = async (key: string): Promise<string> => {
    let result: string = ""
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        result = value
      }else{
        result = ""
      }
    } catch (e) {
        console.log(e)
        result=""
    }
    finally{
        return result
    }
  };

  export const clearStoredData = async (key: string)=>{
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed')
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }

  export  default getStoredData;