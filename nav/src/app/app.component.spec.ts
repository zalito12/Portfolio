import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

const LINKS = [
  { value: "Home", link: "/" },
  { value: "Showcase", link: "/projects" },
  { value: "Contact", link: "/contact" },
];

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio nav'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Portfolio nav");
  });

  it("should have 3 list elements", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelectorAll("li").length;
    expect(compiled.querySelectorAll("li").length).toBe(3);
  });

  it("should be links inside list elements", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelectorAll("li").forEach((element) => {
      expect(element.querySelector("a")).toBeTruthy();
    });
  });

  it("should be home, showcase and contact in that order", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const elments = compiled.querySelectorAll("li");
    for (let index = 0; index < elments.length; index++) {
      const element = elments[index];
      expect(element.querySelector("a").textContent).toBe(LINKS[index]?.value);
    }
  });

  it("should have links to correct page", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    LINKS.forEach((element) => {
      expect(
        compiled.querySelector(`a[href='${element.link}']`).textContent
      ).toBe(element.value);
    });
  });
});
