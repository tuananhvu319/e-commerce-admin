import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users: any[] = [];
  subs: Subscription[] = [];
  hasError = false;
  success = false;
  errorMessage: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.hasError = false;
    this.subs.push(this.userService.getAllUsers().subscribe((prods: any) => {
      this.users = prods.users;
      // console.log(this.products);
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  deleteProduct(id: number): void {
    this.subs.push(this.userService.deleteProduct(id).subscribe(
      res => {
        if (res.status === 'failure') {
          this.hasError = true;
          this.errorMessage = res.message;
        }

        if (res.status === 'success') {
          this.success = true;
          this.errorMessage = res.message;
        }

        this.users = res.users;
        console.log(this.users);
        //$('.alert').delay(1000).slideUp(1500);
      }
    ));
  }

}
