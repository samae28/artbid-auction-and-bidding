import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtmediumPage } from './artmedium.page';

describe('ArtmediumPage', () => {
  let component: ArtmediumPage;
  let fixture: ComponentFixture<ArtmediumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtmediumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
