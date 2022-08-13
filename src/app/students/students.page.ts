import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  friends = [
    {name :'Arun', age:26, gender:'m', about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Dinesh', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Bill', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Smily', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Mani', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Prakash', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Satheesh', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Kuttyma', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Ranjith', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Vishnu', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Pravin', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Krishnaveni', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Lucky', age:24, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Arun', age:26, gender:'m', about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Dinesh', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Bill', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Smily', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Mani', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Prakash', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Satheesh', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Kuttyma', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Ranjith', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Vishnu', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Pravin', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Krishnaveni', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Lucky', age:24, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Arun', age:26, gender:'m', about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Dinesh', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Bill', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Smily', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Mani', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Prakash', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Satheesh', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Kuttyma', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Ranjith', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Vishnu', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Pravin', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Krishnaveni', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Lucky', age:24, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Arun', age:26, gender:'m', about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Dinesh', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Bill', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Smily', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Mani', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Prakash', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Satheesh', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Kuttyma', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Ranjith', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Vishnu', age:27, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Pravin', age:26, gender:'m',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Krishnaveni', age:23, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '},
    {name :'Lucky', age:24, gender:'f',  about:'Before you get that career helping people build or buy their dream home, youve got to build the best real estate resume the agency managers ever seen '}




  ]

  limit:number = 5;
  datalist:any = []; 
  totallength:any;
  page:number=1;

  constructor() {
    this.datalist = this.friends.slice(0,this.limit)
   }

 

  loadData(event) {
    setTimeout(() => {
      // console.log('Done');
      this.limit += 5;
      this.datalist = this.friends.slice(0,this.limit)
      event.target.complete();
      if (this.datalist.length >= this.friends.length) {
        event.target.disabled = true;
      }
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 2000);
  }


  ngOnInit() {
  }
 
}
