import { TestBed } from '@angular/core/testing';

import { GetPeliculasService } from './get-peliculas.service';

describe('GetPeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPeliculasService = TestBed.get(GetPeliculasService);
    expect(service).toBeTruthy();
  });
});
