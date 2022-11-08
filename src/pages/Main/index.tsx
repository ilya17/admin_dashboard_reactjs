import { useOutlet } from "react-router-dom";
import Auth from "@core/store/Auth/Auth";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";
import {
  ContentWrapper,
  MainTypographyStyled,
  MainWrapperStyled,
} from "./styled";
import { Weather } from "./components/Weather";

export const Main = () => {
  const outlet = useOutlet();

  return (
    <MainWrapperStyled>
      <Sidebar />
      <ContentWrapper>
        <Header />
        {outlet || (
          <div>
            <MainTypographyStyled
              value={`Добро пожаловать, ${Auth.ActiveUser?.name} !`}
            />
            <Weather />
          </div>
        )}
      </ContentWrapper>
    </MainWrapperStyled>
  );
};
