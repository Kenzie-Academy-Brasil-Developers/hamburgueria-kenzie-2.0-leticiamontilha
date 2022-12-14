import { ContainerStyle } from "./style";

export interface iContainerProps{
    children: React.ReactNode;
}

export const Container = ({children}: iContainerProps) => {
    return (
        <ContainerStyle>
        {children}
        </ContainerStyle>
    )
}