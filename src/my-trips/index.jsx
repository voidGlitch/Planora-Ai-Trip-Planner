import { db } from "@/service/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripCard from "./components/UserTripCard";
import { toast } from "sonner";

function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]); // Stores user trips
  const [noData, setNoData] = useState(false); // Tracks if no data is available

  useEffect(() => {
    GetUserTrips(); // Fetch user trips on component mount
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User details fetched.");

    if (!user) {
      navigation("/"); // Navigate to home if user is not available
      return;
    }

    setUserTrips([]); // Reset user trips to avoid duplicates
    setNoData(false); // Reset no data state before query

    const q = query(
      collection(db, "AiTrips"),
      where("userEmail", "==", user?.email) // Query for trips matching user's email
    );
    const querySnapshot = await getDocs(q);

    console.log("Query result: ", querySnapshot.empty);

    if (querySnapshot.empty) {
      setNoData(true); // Set no data if query returns empty
      toast("⚠️No trip found!"); // Display toast notification
      return;
    }

    const tripsArray = []; // Temporary array to store fetched trips

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      tripsArray.push(doc.data()); // Push trip data into array
    });

    setUserTrips(tripsArray); // Set user trips after all documents are processed
  };

  return (
    <div className='px-5 mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-72"'>
      <h2 className="font-bold text-3xl mb-10">My Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-3">
        {userTrips?.length > 0 ? (
          userTrips.map((trip, index) => (
            <UserTripCard trip={trip} key={index} />
          ))
        ) : noData ? (
          <div className="col-span-full text-center">No data available</div>
        ) : (
          [1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="h-[200px] w-full bg-slate-200 animate-pulse rounded-xl flex justify-center items-center text-center"
            >
              Loading...
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyTrips;
