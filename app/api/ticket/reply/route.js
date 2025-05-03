import { connectDB } from "@/lib/config/connectDB";
import TicketModel from "@/lib/models/TicketModel";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    await connectDB() ; 
    const { ticketId, response } = await request.json();
    const ticket = await TicketModel.findById(ticketId);
    if (!ticket) {
      return NextResponse.json({ error: "Ticket non trouvé" }, { status: 404 });
    }

    ticket.response = response;
    ticket.status = "répondu";
    await ticket.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error while replying: " , error.message) ; 
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
