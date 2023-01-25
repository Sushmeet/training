import "./App.css";

import { Header } from "./components/Header";
import { CityCard } from "./components/CityCard";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CityDetails } from "./components/CityDetails";
import { BabyNames } from "./components/BabyNames";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = {
    firstName: "Sushi",
    avatarUrl: "https://picsum.photos/seed/picsum/200/300",
  };

  const cities = [
    {
      cityName: "London",
      population: "10M",
      imageUrl:
        "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!",
    },
    {
      cityName: "Bangkok",
      population: "8M",
      imageUrl:
        "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!",
    },

    {
      cityName: "Tokyo",
      population: "8M",
      imageUrl:
        "https://images.unsplash.com/photo-1594741127393-a0527815b2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG95a298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!",
    },

    {
      cityName: "Vienna",
      population: "8M",
      imageUrl:
        "https://images.unsplash.com/photo-1606306823658-8c48544e1d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmllbm5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facere ullam blanditiis vitae quo pariatur debitis illum necessitatibus esse officiis ab nisi suscipit et, molestias distinctio. Tempore, consectetur non sapiente repudiandae provident ipsam magnam odit molestiae ducimus sed esse, incidunt temporibus inventore aperiam dignissimos quidem fugiat laboriosam, possimus fuga doloribus!",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="cities-container">
                {cities.map((city) => {
                  return <CityCard key={city.cityName} city={city} />;
                })}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/citydetails/:cityName"
            element={<CityDetails cities={cities} />}
          />
          <Route path="/babyNames" element={<BabyNames />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
