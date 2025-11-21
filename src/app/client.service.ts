import { Injectable, signal } from '@angular/core';

export interface Client {
    id: string;
    name: string;
    company: string;
    email: string;
    status: 'Active' | 'Inactive';
    netWorth: number;
    tier: 'Gold' | 'Platinum' | 'Black';
}

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private clients = signal<Client[]>([
        {
            id: '1',
            name: 'Alexander Sterling',
            company: 'Sterling Venture Capital',
            email: 'alexander@sterlingvc.com',
            status: 'Active',
            netWorth: 15000000,
            tier: 'Black'
        },
        {
            id: '2',
            name: 'Isabella Vance',
            company: 'Vance Global',
            email: 'isabella@vanceglobal.com',
            status: 'Active',
            netWorth: 8500000,
            tier: 'Platinum'
        },
        {
            id: '3',
            name: 'Marcus Thorne',
            company: 'Thorne Industries',
            email: 'm.thorne@thorneind.com',
            status: 'Inactive',
            netWorth: 4200000,
            tier: 'Gold'
        }
    ]);

    getClients() {
        return this.clients.asReadonly();
    }

    getClient(id: string) {
        return this.clients().find(c => c.id === id);
    }

    addClient(client: Omit<Client, 'id'>) {
        const newClient = { ...client, id: Math.random().toString(36).substr(2, 9) };
        this.clients.update(clients => [...clients, newClient]);
    }

    updateClient(updatedClient: Client) {
        this.clients.update(clients =>
            clients.map(c => c.id === updatedClient.id ? updatedClient : c)
        );
    }

    deleteClient(id: string) {
        this.clients.update(clients => clients.filter(c => c.id !== id));
    }
}
