import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
@Component({
  selector: "ngx-courses",
  styleUrls: ["courses.component.scss"],
  templateUrl: "./courses.component.html",
})
export class CoursesComponent implements OnInit {
  courses = [];

  constructor(private firestore: AngularFirestore) {  
   
  }
  ngOnInit(): void {
    this.getListOfCoursesFromFirebase().toPromise().then((results)=>{
    console.log(results)
      this.courses = results;
    });
  }

  onJoinClick(course) {
    window.location.href = "pages/login";
  }
  /**
   * This is the way we call Firebase to return the list of courses.
   *
   */
  getListOfCoursesFromFirebase() {
    let query = this.firestore.collection("courses");
    return query.get().pipe(map((snapshot) => {
        let items = [];
        snapshot.docs.map((a) => {
          const data = a.data();
          const id = a.id;
          items.push({ id, ...data });
        });
        return items;
      })
    );
  }
}
