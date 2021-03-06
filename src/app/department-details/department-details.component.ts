import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
   <h3> you selected department with id={{departmentId}}</h3>
   <a (click)="goPrevious()">Previous</a>
   <a (click)="goNext()">Next</a>
   <div>
     <button (click)="gotoDepartments()">Back</button>
</div>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
   // let id= parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    this.route.paramMap.subscribe((params : ParamMap)=>{
let id=parseInt(params.get('id'));
this.departmentId=id;
    });

  }
  goPrevious()
  {
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId]);
  }
  goNext()
  {
    let previousId=this.departmentId+1;
    this.router.navigate(['/departments',previousId]);
  }
  gotoDepartments()
  {
    let selectedId=this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments',{id : selectedId}])
  }

}
