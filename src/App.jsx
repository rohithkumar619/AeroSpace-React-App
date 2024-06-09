import "./App.css";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Search from "./Components/SearchFlight/Search";
import Support from "./Components/Support/Support";
import Memoral from "./Components/Memoral/Memoral";
import Lounge from "./Components/Lounge/Lounge";
import Travels from "./Components/Top Travels/Travels";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import FlightsOverview from "./Components/SearchFlight/FlightsOverview";
import TicketInfo from "./Components/TicketInfo/TicketInfo";
import SeatInfo from "./Components/SeatInfo/SeatInfo";
import Payment from "./Components/Payment/Payment";
import { createContext, useState } from "react";
import Ticket from "./Components/Ticket/Ticket";
export const AppContext = createContext();
function App() {
  const [userData, setUserData] = useState("");
  const [image, setImage] = useState();
  const [info, setInfo] = useState();
  const [ticketInfo, setTicketInfo] = useState();
  const [color, setColor] = useState(1);
  const [travellerD, setTravellerD] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    nationality: "",
  });
  const [contactD, setContactD] = useState({
    phone: "",
    email: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  });

  const [airline, setAirline] = useState({
    from: "",
    to: "",
    date: "",
    travels: "",
  });
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatCost, setSeatCost] = useState(0);
  const [total, setTotal] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header showmenu={true} />
          <Hero />
          <Search />
          <Support />
          <Memoral />
          <Lounge />
          <Travels />
          <Footer />
        </div>
      ),
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
    { path: "/SignUp", element: <SignUp /> },
    {
      path: "/FlightsOverview",
      element: <FlightsOverview />,
    },
    {
      path: "/TicketInfo",
      element: <TicketInfo />,
    },
    {
      path: "/SeatInfo",
      element: <SeatInfo />,
    },
    {
      path: "/Payment",
      element: <Payment />,
    },
    {
      path: "/Ticket",
      element: <Ticket />,
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        setUserData,
        setImage,
        setAirline,
        setInfo,
        setTicketInfo,
        setColor,
        setTravellerD,
        contactD,
        setContactD,
        selectedSeat,
        setSelectedSeat,
        seatCost,
        setSeatCost,
        total,
        setTotal,
        travellerD,
        color,
        ticketInfo,
        info,
        airline,
        userData,
        image,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
