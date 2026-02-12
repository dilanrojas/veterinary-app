import type { Client, Pet } from "../lib/types";

const CLIENTS_URL = '/data/clients.json'; 

export async function getClients(): Promise<Client[]> {
  const response = await fetch(CLIENTS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch clients: ${response.statusText}`);
  }

  return await response.json();
}

export async function getPetById(petId: number | string): Promise<Pet | null> {
  const clients = await getClients();

  for (const client of clients) {
    const foundPet = client.pets.find((pet: Pet) => pet.id === petId);
    if (foundPet) return foundPet;
  }

  return null;
}