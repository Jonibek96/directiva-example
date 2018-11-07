import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{
  @HostBinding('style.backgroundColor') background: string;
  @Input() hoverColor: string = 'blue';
  @Input() defaultColor: string = 'transparent';

  constructor(){}

  ngOnInit(){
  }

  @HostListener('mouseenter') mouseEnter(){
    this.background = this.hoverColor;

  }

  @HostListener('mouseleave') mouseLeave(){
    this.background = this.defaultColor;
  }
}
