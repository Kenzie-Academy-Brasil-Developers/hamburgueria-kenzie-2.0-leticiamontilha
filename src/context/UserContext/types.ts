import { iLoginFormValues, iRegisterFormValues } from "../../components/Form";

export interface iUserContextProps{
    children: React.ReactNode;
}

export interface iUserApiResponse {
    accessToken: string
    user: {
      id: string
      name: string
      email: string
    }
  }

  export interface iRegisterApiResponse {
    accessToken: string
    user: {
      id: string
      name: string
      email: string
    }
  }
  
  export interface iValueContext{
      userLogin: (formData : iLoginFormValues) => Promise<void>;
      userRegister: (formData: iRegisterFormValues) => Promise<void>;
  }
  