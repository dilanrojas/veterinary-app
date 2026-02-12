import type { Client } from "../lib/types";

const CLIENTS_URL = '../data/clients.json';

export async function getClients(): Promise<Client[]> {
  const response = await fetch(CLIENTS_URL);

  if (!response) {
    throw new Error(`Error while trying to read file: ${response}`)
  }

  const data = await response.json();
  return data;
}

export async function getClientById(id: number): Promise<Client | null> {
  const clients = await getClients();

  const found = clients.find(client => client.id === id);

  return found ?? null;
}
