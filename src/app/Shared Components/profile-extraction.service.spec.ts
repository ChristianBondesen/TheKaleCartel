import { ProfileExtractionService } from './profile-extraction.service';
import { ProfileGetService } from '../profiles/profile-get.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../profiles/User';
import 'rxjs/add/observable/of';

const users: User[] = [
  {
    name: 'Christian',
    kaleProfileId: 1,
    totalKaleLevel: 0,
    nickname: 'shiz',
    description: 'kale'
  },
  {
    name: 'Osvald',
    kaleProfileId: 2,
    totalKaleLevel: 0,
    nickname: 'shiz',
    description: 'kale'
  },
  {
    name: 'Kasper',
    kaleProfileId: 3,
    totalKaleLevel: 0,
    nickname: 'shiz',
    description: 'kale'
  },
  {
    name: 'Michael',
    kaleProfileId: 4,
    totalKaleLevel: 0,
    nickname: 'shiz',
    description: 'kale'
  }
];

describe('ProfileExtractionService Specs!', () => {
  let service: ProfileExtractionService;
  let UserGet: ProfileGetService;
  let httpMock: HttpClient;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('httpMock', ['get']);
    UserGet = new ProfileGetService(httpMock);
    spyOn(UserGet, 'GetAll').and.returnValue(Observable.of(users));
    service = new ProfileExtractionService(UserGet);
  });

  describe('Get users', () => {
    it('ProfileGetServices GetAll method called on creation', () => {
      expect(UserGet.GetAll).toHaveBeenCalled();
    });
    it('should get all users', () => {
      expect(service.users.length).toBeGreaterThan(0);
    });
  });

  describe('GetIdByName', () => {
    it('Should return 1 from profile Christian', () => {
      let id = service.GetIdByName('christian');
      expect(id).toEqual(1);
    });
    it('Should return 2 from profile Osvald', () => {
      let id = service.GetIdByName('osvald');
      expect(id).toEqual(2);
    });
    it('Should return 3 from profile Kasper', () => {
      let id = service.GetIdByName('Kasper');
      expect(id).toEqual(3);
    });
    it('Should return 4 from profile Michael', () => {
      let id = service.GetIdByName('Michael');
      expect(id).toEqual(4);
    });
    it('Should return Error when profile doesnt exist', () => {
      let id = service.GetIdByName('Johan');
      expect(id).toEqual(-1);
    });
  });

  describe('GetNameById', () => {
    it('Should  return Osvald from id = 2', () => {
      let name = service.GetNameById(2);
      expect(name).toBe('Osvald');
    });
    it('Should  return Christian from id = 1', () => {
      let name = service.GetNameById(1);
      expect(name).toBe('Christian');
    });
    it('Should  return empty string from id > 4', () => {
      let name = service.GetNameById(5);
      expect(name).toBe('');
    });
  });
});
