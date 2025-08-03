import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vehicule } from '../pages/catalog/single/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private readonly apiUrl = 'http://localhost:8080/api/vehicules';

  private vehiculesSubject = new BehaviorSubject<Vehicule[]>([]);
  vehicules$ = this.vehiculesSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadAll(): void {
    console.log('[VehiculeService] Chargement véhicules...');
    this.http.get<Vehicule[]>(this.apiUrl).subscribe(data => {
      console.log('[VehiculeService] Réponse reçue :', data);
      this.vehiculesSubject.next(data);
    });
  }

  getById(id: string): Observable<Vehicule> {
    return this.http.get<Vehicule>(`${this.apiUrl}/${id}`);
  }

  create(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(this.apiUrl, vehicule);
  }

  update(id: string, vehicule: Vehicule): Observable<Vehicule> {
    return this.http.put<Vehicule>(`${this.apiUrl}/${id}`, vehicule);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  search(filters: any): void {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params.append(key, value.toString());
      }
    });

    const url = `${this.apiUrl}/search?${params.toString()}`;
    this.http.get<Vehicule[]>(url).subscribe(data => {
      this.vehiculesSubject.next(data);
    });
  }

}
