import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { NotificationService } from './notification.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('NotificationService', () => {
  let service: NotificationService;
  let toasterService: ToastrService;
  beforeEach(() => {
    const toasterServiceStub = jasmine.createSpyObj('ToastrService',['success','error','info','warning']);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ToastrModule.forRoot()],
      providers:[{provide:toasterService,useValue:toasterServiceStub}]
    });
    toasterService = TestBed.inject(ToastrService);
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
