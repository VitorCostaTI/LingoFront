import { TestBed } from '@angular/core/testing';

import { TemplateCrudService } from './template-crud.service';

describe('TemplateCrudService', () => {
  let service: TemplateCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
