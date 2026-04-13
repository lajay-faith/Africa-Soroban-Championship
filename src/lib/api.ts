const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function registerParticipant(data: {
  fullName: string;
  email: string;
  country: string;
  type: "student" | "school" | "teacher";
  age?: number;
  schoolName?: string;
  phone?: string;
}) {
  const res = await fetch(`${API_URL}/registrations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getCompetitions() {
  const res = await fetch(`${API_URL}/competitions`);
  return res.json();
}

export async function getPartnerTiers() {
  const res = await fetch(`${API_URL}/partners/tiers`);
  return res.json();
}

export async function submitPartnerInquiry(data: {
  organizationName: string;
  contactName: string;
  email: string;
  tier: string;
  message?: string;
}) {
  const res = await fetch(`${API_URL}/partners/inquire`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
