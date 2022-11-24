import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  styleUrls: ['./employee-faces.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  constructor(private _employeeService: EmployeeService) { }
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
}
