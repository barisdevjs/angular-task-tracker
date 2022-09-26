import { Injectable } from '@angular/core';
import { Task } from '../Task'
import { Observable} from 'rxjs'
import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http'
import Swal from 'sweetalert2'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
        setHeaders: {
            'Cache-Control': 'no-cache',
             Pragma: 'no-cache'
        }
    });
    return next.handle(authReq);    
}


  private apiUrl = 'http://localhost:5000/tasks'
  

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>  {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>  {
    Swal.fire({
      title: 'Warning!',
      text: 'This can not be undone',
      icon: 'question',
      confirmButtonText: 'Awww'
    })
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    Swal.fire({
      title:'Status Updated',
      text:'Awesome',
      icon:'info',
      width : '15vw',
      heightAuto : false
  })
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    Swal.fire(
      'Tasks Updated',
      'Nice',
      'success'
    )
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  
}
 