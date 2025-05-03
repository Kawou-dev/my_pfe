"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTicketResponses = async () => {
    try {
      const res = await fetch("/api/ticket/response");
      const data = await res.json();
      setTickets(data.tickets || []);
    } catch (error) {
      console.log("Erreur while getting ticket responses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicketResponses();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Vos tickets et réponses</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : tickets.length === 0 ? (
        <p>Vous n'avez pas encore soumis de ticket.</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket._id} className="bg-white shadow p-4 mb-4 rounded">
            <p className="mb-1"><strong>Votre message :</strong> {ticket.content}</p>
            {ticket.response ? (
              <p className="text-green-700"><strong>Réponse admin :</strong> {ticket.response}</p>
            ) : (
              <p className="text-gray-500 italic">En attente de réponse...</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
