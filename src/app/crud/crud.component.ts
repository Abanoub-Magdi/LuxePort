import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  private fb = inject(FormBuilder);
  private clientService = inject(ClientService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  clientForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    netWorth: [null, [Validators.required, Validators.min(0)]],
    tier: ['Gold', Validators.required],
    status: ['Active', Validators.required]
  });

  isEditMode = false;
  clientId: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clientId = params.get('id');
      if (this.clientId) {
        this.isEditMode = true;
        const client = this.clientService.getClient(this.clientId);
        if (client) {
          this.clientForm.patchValue(client);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const formValue = this.clientForm.value;

      if (this.isEditMode && this.clientId) {
        this.clientService.updateClient({
          id: this.clientId,
          ...formValue
        });
      } else {
        this.clientService.addClient(formValue);
      }

      this.router.navigate(['/dashboard']);
    }
  }
}