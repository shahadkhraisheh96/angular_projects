import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QAndA } from '../faq.model';
import { FaqService } from '../service/faq.service';

@Component({
  selector: 'app-form-faq',
  imports: [ReactiveFormsModule],
  templateUrl: './form-faq.html',
  styleUrl: './form-faq.css',
})
export class FormFaq implements OnInit{
  qaForm!:FormGroup;
 private http=inject(HttpClient);
 private faqService=inject(FaqService);
 isEdit=false;
 editId:any;
 editData=signal<QAndA | undefined>(undefined);
  private rote=inject(Router);
  constructor(private fa: FormBuilder,private ActivatedRouter:ActivatedRoute) {
    this.qaForm = this.fa.group({
      question: ['',[Validators.required]],
      answer: ['',[Validators.required]],
    });
  }
  ngOnInit(): void {
const segment=this.ActivatedRouter.snapshot.url;
const second=segment[0]?.path;
const id=segment[1]?.path;
    if(second==='update'){
      this.isEdit=true;
      this.editId=id;
      this.patchValuetoForm(id);
}
  }
  submit(){
    if(this.qaForm.invalid && !this.isEdit){
      alert("you have to enter the from")
      return;
    }
    const formValue=this.qaForm.value;
    
    if(this.isEdit===true){
  const data:QAndA={
     id:'',
     Qusetion:formValue.question || this.editData()?.Qusetion,
     Answer:formValue.answer || this.editData()?.Answer
     }    
     console.log(data)
    this.update(this.editId,data);

    }else{
      const data:QAndA={
     id:'',
     Qusetion:formValue.question,
     Answer:formValue.answer
}   
  console.log(data)

      this.addqa(data)
    }
  }
patchValuetoForm(id:any){
  this.faqService.getQAndAById(id).subscribe({
      next:(qa)=>{
      this.editData.set(qa);
       this.qaForm.patchValue({
        Qusetion:qa.Qusetion,
        Answer:qa.Answer
        })
      },error:(err)=>{
        alert("error While patch the vlaue"+err)
      }
    })
}
  update(id:any,data:QAndA ){
    this.faqService.updateQAndA(id,data).subscribe({
      next:()=>this.rote.navigate(['/faq'])
    })
  }
  addqa(data:QAndA){
    this.faqService.addQAndA(data).subscribe({
      next:()=>this.rote.navigate(['/faq'])
    })
  }

}
