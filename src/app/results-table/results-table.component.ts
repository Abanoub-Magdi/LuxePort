import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Client, ClientService } from '../client.service';

@Component({
  selector: 'app-results-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css'
})
export class ResultsTableComponent {
  private clientService = inject(ClientService);
  clients: Signal<readonly Client[]> = this.clientService.getClients();

  deleteClient(id: string) {
    if (confirm('Are you sure you want to remove this client from your portfolio?')) {
      this.clientService.deleteClient(id);
    }
  }
}