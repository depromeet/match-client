import React from "react";
import * as S from "./styles";
import { StudyList } from "components/StudyList";
import { CleanLink } from "components/CleanLink";
import { useLocation } from "react-router-dom";

const SidebarComponent = () => {
  const { pathname } = useLocation();

  const renderIcons = () => {
    const icons = [
      { component: S.Home, route: "/" },
      { component: S.Plus, route: "/add" },
      { component: S.Calendar, route: "/calendar" },
      { component: S.Mail, route: "/mail" },
      { component: S.Message, route: "/message" },
      { component: S.Setting, route: "/setting" },
    ];

    return icons.map(({ component: Icon, route }) => (
      <CleanLink to={route} key={route}>
        <Icon selected={route === pathname} />
      </CleanLink>
    ));
  };
  return (
    <S.Container>
      <S.Profile
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS60Jmo8r4GCdgL3qfufRTrHGb_5ePanVyKK2ptlNWodyj-xKOGGIA1Io4hlhvO1A_HH3OGxgLeMQ0OOuZg7gdviw&usqp=CAU&ec=45690271"
        }
      />
      <S.Menu>{renderIcons()}</S.Menu>
      <S.Small>
        <S.Logout onClick={() => alert("logout")} />
      </S.Small>
    </S.Container>
  );
};

export default SidebarComponent;
