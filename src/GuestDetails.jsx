import { getGuest } from "./api/guests";
import { useEffect } from "react";
import { useState } from "react";

export default function GuestList({ selectedGuest, setSelectedGuest }) {
  // keep a guest in state
  const [guest, setGuest] = useState([]);

  useEffect(() => {
    //grabs data from the API
    // and updates the state with the data.
    const syncGuest = async () => {
      const data = getGuest(selectedGuest);
      // update the state with the data
      setGuest(data);
    };
    syncGuest();
    // selectedGuest is a dependency b/c wew ant to fetch again whenever the the id chamges
  }, [selectedGuest]);
  //render the guest

  return (
    <article className="guest-details">
      <h1>{guest.name}</h1>
      <address>
        {guest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setSelectedGuest(null)}>Back</button>
    </article>
  );
}
