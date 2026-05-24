import { getGuests } from "./api/guests";
import { useEffect } from "react";
import { useState } from "react";

export default function GuestList({ setSelectedGuests }) {
  // keep a list of guest in state
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    //grabs data from the API
    // and updates the state with the data.
    const syncGuests = async () => {
      const data = getGuests();
      // update the state with the data
      setGuests(data);
    };
    syncGuests();
  }, []);
  //render the guest

  return (
    <>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} onClick={() => setSelectedGuests(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </>
  );
}
