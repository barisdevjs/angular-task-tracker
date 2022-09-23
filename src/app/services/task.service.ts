import { Injectable } from '@angular/core';
import { Task } from '../Task'
import { Observable} from 'rxjs'
import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http'


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
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  
}
 