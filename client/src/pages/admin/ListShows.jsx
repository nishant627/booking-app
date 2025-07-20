import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { dummyShowsData } from "../../assets/assets";
import Tittle from "./Tittle";
import dateFormate from "../../lib/dateFormate";

const ListShows = () => {
  const currency = import.meta.env.VITE_INDIAN_CURRENCY;
  3;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-06-30T02:30:00",
          showPrice: 59,
          occupiedSeats: {
            A1: "user_1",
            B1: "user_2",
            C1: "user_3",
          },
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Tittle text1="List" text2="show" />
      <div className="max-w-4xl mt-10 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium ">Show time</th>
              <th className="p-2 font-medium">Total booking</th>
              <th className="p-2 font-medium">Earning</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/10 bg-primary/5 even:bg:primary/10"
              >
                <td className="p-2 min-45 pl-5">{show.movie.title}</td>
                <td className="p-2">{dateFormate(show.showDateTime)}</td>
                <td className="p-2">
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="p-2">
                  {currency}
                  {Object.keys(show.occupiedSeats).length * show.showPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
