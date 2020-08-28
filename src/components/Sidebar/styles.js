import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../assets/images/home.svg";
import { ReactComponent as PlusIcon } from "../../assets/images/plus.svg";
import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as MessageIcon } from "../../assets/images/message.svg";
import { ReactComponent as SettingIcon } from "../../assets/images/setting.svg";
import { ReactComponent as LogoutIcon } from "../../assets/images/logout.svg";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  height: 100%;
  width: 120px;

  background-color: #1d212c;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
`;

export const Profile = styled.img`
  /* width: 34px;
  height: 34px; */

  /* overflow: hidden;
   background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS60Jmo8r4GCdgL3qfufRTrHGb_5ePanVyKK2ptlNWodyj-xKOGGIA1Io4hlhvO1A_HH3OGxgLeMQ0OOuZg7gdviw&usqp=CAU&ec=45690271"); 
  border-radius: 25px; */
  z-index: 3;
  margin-top: 17px;
`;

export const Menu = styled.div`
  margin: 30px 0;

  width: 80px;
  height: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #1e222e;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`;

export const Small = styled.div`
  /* margin: 50px 0; */

  width: 80px;
  height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #1e222e;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
`;

export const Home = styled(HomeIcon)`
  /* stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")}; */
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.02);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
`;

export const Plus = styled(PlusIcon)`
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.02);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
  margin-bottom: 15px;
`;

export const Calendar = styled(CalendarIcon)`
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.02);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
`;
export const Mail = styled(MailIcon)`
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.02);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
`;
export const Message = styled(MessageIcon)`
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.02);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
  margin-bottom: 15px;
`;

export const Setting = styled(SettingIcon)`
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.02);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
`;

export const Logout = styled(LogoutIcon)`
  path {
    stroke: ${({ selected }) => (selected ? "#40FFF4" : "white")};
  }

  transform: scale(0.9);
  transition: all 300ms ease;

  &:hover {
    transform: scale(0.92);
    path {
      stroke: #40fff4;
    }
  }
  fill: none;
`;
