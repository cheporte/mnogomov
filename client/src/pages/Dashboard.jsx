import React from "react";
import Navbar from "../components/ui/Navbar";
import ProfileCard from "../components/Dashboard/ProfileCard";
import UserStats from "../components/Dashboard/UserStats";
import CurrentLanguages from "../components/Dashboard/CurrentLanguages";
import InspirationalQuotes from "../components/Dashboard/InspirationalQuotes";
import Footer from "../components/ui/Footer";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <ProfileCard />
          </div>
          <div className="md:col-span-2">
            <UserStats />
            <CurrentLanguages />
            <InspirationalQuotes />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
