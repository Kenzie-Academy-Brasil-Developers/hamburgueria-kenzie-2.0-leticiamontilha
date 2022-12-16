import { Dispatch, SetStateAction } from "react";
import { iLoginFormValues, iRegisterFormValues } from "../../components/Form";

export interface iUserContextProps{
    children: React.ReactNode;
}

export interface iUserApiResponse {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
    }
  }

  export interface iUserLogin{
      id: string;
      name: string;
      email: string;
  }

  export interface iUserState {
     user: null;
     setUser: React.Dispatch<React.SetStateAction<null>>;
  }

  export interface iRegisterApiResponse {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
    }
  }


  export interface iValueContext{
      userLogin: (formData : iLoginFormValues) => Promise<void>;
      userRegister: (formData: iRegisterFormValues) => Promise<void>;
      setUser: Dispatch<SetStateAction<iUserLogin | null>>;
  }
  