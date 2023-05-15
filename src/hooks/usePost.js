import { useEffect, useState } from "react";
import axios from "axios";

export default function usePost() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function sendData(url, newData) {
    try {
      setLoading(true);
      const response = await axios.post(url, newData);
      
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { sendData, error, loading };
}
