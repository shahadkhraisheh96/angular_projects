import { Component, inject, OnInit, signal } from '@angular/core';
import { FaqService } from '../service/faq.service';
import { QAndA } from '../faq.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list-faq',
  imports: [RouterLink],
  templateUrl: './list-faq.html',
  styleUrl: './list-faq.css',
})
export class ListFaq implements OnInit{
  private faqService=inject(FaqService);
  faq=signal<QAndA[]> ([]) ;

ngOnInit(): void {
  this.getAllFaq();
}

getAllFaq(){
  return this.faqService.getQAndA().subscribe({
    next:(qa:QAndA[])=>{
          this.faq.set(qa);
    },error:(error)=>{
      alert("Error While feching the data"+error);
    }
  })
}
Delete(id:any){
  return this.faqService.deleteQAndA(id).subscribe({
    next:()=>{
    this.faq().filter(qa=>qa.id !==id);  
    },error:(error)=>{
  alert("error while delting the qa"+error)
}
  });
}
}
