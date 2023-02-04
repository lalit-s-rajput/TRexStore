import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { ResultService } from './result-service.service';

describe('ResultService', () => {
  let service: ResultService;
  let httpClient: HttpClient;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = TestBed.inject(ResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
