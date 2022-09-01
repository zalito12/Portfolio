import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { assetUrl } from "src/single-spa/asset-url";
import { Skill } from "../common/skill";
import { fetchWithCache } from "@gongarce/api";

@Injectable({
  providedIn: "root",
})
export class RestClientService {
  constructor(private http: HttpClient) {}

  public getSkills$(): Observable<Skill[]> {
    const url = assetUrl("data/skills.json");
    return fetchWithCache(this.http.get<Skill[]>(url), url);
  }
}
