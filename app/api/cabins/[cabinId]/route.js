import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return new Response(JSON.stringify({ cabin, bookedDates }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
